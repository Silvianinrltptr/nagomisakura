"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, Zap, Check, X, RefreshCw, Trophy,
  ChevronLeft, ChevronRight, Volume2, AlertTriangle
} from "lucide-react";
import { VOCABULARY_DATA, Vocabulary } from "../data/vocabulary";

type Mode = "setup" | "playing" | "result";
type CardStatus = "unseen" | "known" | "unknown";

interface CardState {
  vocab: Vocabulary;
  status: CardStatus;
  isFlipped: boolean;
}

// ─────────────────────────────────────────────
// Exit Confirmation Modal
// ─────────────────────────────────────────────
function ExitModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onCancel} />
      {/* Card */}
      <div className="relative bg-white rounded-2xl border border-brand-border p-6 shadow-xl max-w-sm w-full animate-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#FFF0F5] rounded-full flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-brand-pink" />
          </div>
          <h3 className="text-[#1F1F1F] text-base font-semibold">Keluar dari latihan?</h3>
        </div>
        <p className="text-[#6B7280] text-sm mb-6">
          Progress kamu akan hilang. Yakin mau berhenti?
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl border border-brand-border text-[#6B7280] text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Lanjut Latihan
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl bg-brand-pink text-white text-sm font-medium hover:bg-pink-500 transition-colors"
          >
            Ya, Keluar
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Card Dot Navigation
// ─────────────────────────────────────────────
function CardNav({
  cards,
  currentIndex,
  onJump,
}: {
  cards: CardState[];
  currentIndex: number;
  onJump: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-1 flex-wrap justify-center">
      {cards.map((c, i) => {
        let bg = "bg-gray-200";
        if (c.status === "known") bg = "bg-green-400";
        if (c.status === "unknown") bg = "bg-red-400";
        if (i === currentIndex) bg = "bg-brand-pink";

        return (
          <button
            key={i}
            onClick={() => onJump(i)}
            title={"Kartu " + (i + 1)}
            className={[
              "rounded-full transition-all",
              i === currentIndex ? "w-5 h-5" : "w-2.5 h-2.5",
              bg,
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function LatihanPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("setup");
  const [cardCount, setCardCount] = useState<number>(10);
  const [customCount, setCustomCount] = useState<string>("10");
  const [isCustom, setIsCustom] = useState(false);
  const [category, setCategory] = useState<string>("Semua");
  const [showExitModal, setShowExitModal] = useState(false);

  const [cards, setCards] = useState<CardState[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);

  const categories = ["Semua", "QA/Bug", "Komunikasi", "Report", "Standup", "Kerja umum", "Favorit"];
  const presets = [5, 10, 20, 30];

  const handleStart = () => {
    let sourceData = [...VOCABULARY_DATA];

    if (category === "Favorit") {
      const savedFavs = localStorage.getItem("nagomi_favorites");
      const favIds: string[] = savedFavs ? JSON.parse(savedFavs) : [];
      sourceData = sourceData.filter((v) => favIds.includes(v.id));
    } else if (category !== "Semua") {
      sourceData = sourceData.filter((v) => v.category === category);
    }

    sourceData = sourceData.sort(() => Math.random() - 0.5);

    const count = isCustom ? parseInt(customCount) || 10 : cardCount;
    if (count !== 0 && sourceData.length > count) {
      sourceData = sourceData.slice(0, count);
    }

    if (sourceData.length === 0) {
      alert("Tidak ada kosakata yang cocok dengan filter ini!");
      return;
    }

    const initialCards: CardState[] = sourceData.map((v) => ({
      vocab: v,
      status: "unseen",
      isFlipped: false,
    }));

    setCards(initialCards);
    setCurrentIndex(0);
    setRoundNumber(1);
    setMode("playing");
  };

  // Retry unknown cards
  const handleRetryUnknown = () => {
    const unknownCards = cards
      .filter((c) => c.status === "unknown")
      .map((c) => ({ ...c, status: "unseen" as CardStatus, isFlipped: false }));

    if (unknownCards.length === 0) return;
    setCards(unknownCards);
    setCurrentIndex(0);
    setRoundNumber((prev) => prev + 1);
    setMode("playing");
  };

  const currentCard = cards[currentIndex];

  const flipCard = () => {
    setCards((prev) =>
      prev.map((c, i) => (i === currentIndex ? { ...c, isFlipped: !c.isFlipped } : c))
    );
  };

  const handleAnswer = (know: boolean) => {
    const newStatus: CardStatus = know ? "known" : "unknown";
    const updatedCards = cards.map((c, i) =>
      i === currentIndex ? { ...c, status: newStatus } : c
    );
    setCards(updatedCards);

    // Advance
    const nextUnseen = updatedCards.findIndex((c, i) => i > currentIndex && c.status === "unseen");
    if (nextUnseen !== -1) {
      setCurrentIndex(nextUnseen);
    } else {
      // Check if all cards have been answered
      const allDone = updatedCards.every((c) => c.status !== "unseen");
      if (allDone) {
        setMode("result");
      } else {
        // Find first unseen (wrap around)
        const firstUnseen = updatedCards.findIndex((c) => c.status === "unseen");
        if (firstUnseen !== -1) setCurrentIndex(firstUnseen);
      }
    }
  };

  const jumpToCard = (i: number) => {
    setCurrentIndex(i);
    // Reset flip when navigating manually
    setCards((prev) =>
      prev.map((c, idx) => (idx === i ? { ...c, isFlipped: false } : c))
    );
  };

  const playAudio = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const knownCount = cards.filter((c) => c.status === "known").length;
  const unknownCount = cards.filter((c) => c.status === "unknown").length;
  const unseenCount = cards.filter((c) => c.status === "unseen").length;
  const progressPercent = cards.length > 0 ? ((knownCount + unknownCount) / cards.length) * 100 : 0;

  const handleBackPress = () => {
    if (mode === "playing") {
      setShowExitModal(true);
    } else if (mode === "result") {
      setMode("setup");
    } else {
      router.push("/kaisha");
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg pb-16">
      {/* Exit Modal */}
      {showExitModal && (
        <ExitModal
          onConfirm={() => {
            setShowExitModal(false);
            setMode("setup");
          }}
          onCancel={() => setShowExitModal(false)}
        />
      )}

      <div className="max-w-xl mx-auto pt-6 px-4">
        {/* Back Button */}
        <button
          onClick={handleBackPress}
          className="flex items-center gap-1 text-brand-pink-dark hover:text-brand-pink-darker text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        {/* ── SETUP ── */}
        {mode === "setup" && (
          <div className="bg-white rounded-[24px] border border-brand-border p-6 shadow-sm animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-[#1F1F1F] text-xl font-semibold leading-tight">Latihan Flashcard</h1>
                <span className="text-[#9CA3AF] text-sm">Uji hafalan kosakata Kaisha Anda</span>
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-[#1F1F1F] text-sm font-medium mb-3">Pilih Kategori</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={[
                      "px-3 py-1.5 rounded-xl text-sm font-medium transition-colors border",
                      category === cat
                        ? "bg-[#FBCFE8] border-brand-pink text-brand-pink-dark"
                        : "bg-white border-brand-border text-[#6B7280] hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Count */}
            <div className="mb-8">
              <label className="block text-[#1F1F1F] text-sm font-medium mb-3">Jumlah Soal</label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {presets.map((num) => (
                  <button
                    key={num}
                    onClick={() => { setCardCount(num); setIsCustom(false); }}
                    className={[
                      "py-3 rounded-xl text-sm font-semibold transition-colors border",
                      !isCustom && cardCount === num
                        ? "bg-brand-pink border-brand-pink text-white"
                        : "bg-white border-brand-border text-[#6B7280] hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => { setCardCount(0); setIsCustom(false); }}
                  className={[
                    "flex-1 py-3 rounded-xl text-sm font-semibold transition-colors border",
                    !isCustom && cardCount === 0
                      ? "bg-brand-pink border-brand-pink text-white"
                      : "bg-white border-brand-border text-[#6B7280] hover:bg-gray-50",
                  ].join(" ")}
                >
                  Semua
                </button>
                <div className="flex-1 relative">
                  <input
                    type="number"
                    min="1"
                    max="200"
                    placeholder="Custom..."
                    value={isCustom ? customCount : ""}
                    onChange={(e) => {
                      setCustomCount(e.target.value);
                      setIsCustom(true);
                    }}
                    onFocus={() => setIsCustom(true)}
                    className={[
                      "w-full py-3 px-4 rounded-xl text-sm font-semibold transition-colors border text-center outline-none",
                      isCustom
                        ? "bg-[#FBCFE8] border-brand-pink text-brand-pink-dark"
                        : "bg-white border-brand-border text-[#6B7280]",
                    ].join(" ")}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleStart}
              className="w-full bg-brand-pink text-white rounded-xl py-4 font-semibold text-lg hover:bg-pink-500 transition-colors shadow-md"
            >
              Mulai Latihan
            </button>
          </div>
        )}

        {/* ── PLAYING ── */}
        {mode === "playing" && currentCard && (
          <div className="animate-in fade-in duration-200">
            {/* Round Badge */}
            {roundNumber > 1 && (
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 bg-[#FCE7F3] text-brand-pink-dark text-xs font-semibold rounded-full">
                  Putaran #{roundNumber} — Mengulang kata yang belum hafal
                </span>
              </div>
            )}

            {/* Dot Navigation */}
            <div className="mb-4">
              <CardNav cards={cards} currentIndex={currentIndex} onJump={jumpToCard} />
            </div>

            {/* Counter Row */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-brand-pink-dark font-medium text-sm">
                {currentIndex + 1} / {cards.length}
              </span>
              <div className="flex gap-3 text-xs font-semibold">
                <span className="text-green-500">{knownCount} tahu</span>
                <span className="text-red-400">{unknownCount} kurang tahu</span>
                <span className="text-gray-400">{unseenCount} belum</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-brand-navbar rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-brand-pink transition-all duration-500 ease-out"
                style={{ width: progressPercent + "%" }}
              />
            </div>

            {/* Flashcard */}
            <div
              onClick={flipCard}
              className="w-full cursor-pointer mb-6"
              style={{ perspective: "1200px" }}
            >
              <div
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
                  transform: currentCard.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  position: "relative",
                  minHeight: "260px",
                }}
              >
                {/* FRONT — Kanji only, no romaji */}
                <div
                  style={{ backfaceVisibility: "hidden", position: "absolute", width: "100%", height: "100%" }}
                  className="bg-white border-2 border-brand-border rounded-[24px] shadow-sm flex flex-col items-center justify-center p-8 select-none"
                >
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FCE7F3] text-brand-pink-dark rounded-full text-xs font-medium whitespace-nowrap">
                    Tap untuk balik kartu
                  </span>
                  <div className="flex items-center gap-3">
                    <h2 className="text-6xl font-medium text-[#1F1F1F] text-center leading-none">
                      {currentCard.vocab.kanji}
                    </h2>
                    <button
                      onClick={(e) => playAudio(currentCard.vocab.kanji, e)}
                      className="w-9 h-9 rounded-full bg-[#FCE7F3] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* BACK — Full info */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  className="bg-[#FFF0F5] border-2 border-brand-pink rounded-[24px] shadow-md flex flex-col items-center justify-center p-8 select-none"
                >
                  <h3 className="text-3xl font-medium text-[#1F1F1F] mb-1 text-center">
                    {currentCard.vocab.hiragana}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm mb-4 text-center">{currentCard.vocab.romaji}</p>
                  <h4 className="text-2xl font-bold text-brand-pink-darker text-center mb-2">
                    {currentCard.vocab.meaning}
                  </h4>
                  <p className="text-[#6B7280] text-sm text-center mb-5">
                    {currentCard.vocab.shortExample}
                  </p>
                  <button
                    onClick={(e) => playAudio(currentCard.vocab.kanji, e)}
                    className="px-4 py-2 rounded-full bg-white border border-brand-pink text-brand-pink text-xs font-medium flex items-center gap-1.5 hover:bg-brand-pink hover:text-white transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> Dengar
                  </button>
                </div>
              </div>
            </div>

            {/* Left/Right navigation arrows + answer buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => jumpToCard(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-[#9CA3AF] hover:bg-gray-50 disabled:opacity-30 transition-colors shrink-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Answer buttons — only shown when flipped */}
              <div
                className="flex gap-3 flex-1 transition-opacity duration-300"
                style={{ opacity: currentCard.isFlipped ? 1 : 0, pointerEvents: currentCard.isFlipped ? "auto" : "none" }}
              >
                <button
                  onClick={() => handleAnswer(false)}
                  className="flex-1 bg-white border-2 border-red-200 text-red-500 hover:bg-red-50 rounded-2xl py-3 font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <X className="w-4 h-4" /> Kurang Tahu
                </button>
                <button
                  onClick={() => handleAnswer(true)}
                  className="flex-1 bg-brand-pink text-white hover:bg-pink-500 rounded-2xl py-3 font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Check className="w-4 h-4" /> Sudah Tahu
                </button>
              </div>

              <button
                onClick={() => jumpToCard(Math.min(cards.length - 1, currentIndex + 1))}
                disabled={currentIndex === cards.length - 1}
                className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-[#9CA3AF] hover:bg-gray-50 disabled:opacity-30 transition-colors shrink-0"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Hint when not flipped */}
            {!currentCard.isFlipped && (
              <p className="text-center text-[#9CA3AF] text-xs mt-4">
                Balik kartu untuk menampilkan tombol jawaban
              </p>
            )}
          </div>
        )}

        {/* ── RESULT ── */}
        {mode === "result" && (
          <div className="bg-white rounded-[24px] border border-brand-border p-8 shadow-sm text-center animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-[#FCE7F3] rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-brand-pink" />
            </div>

            <h2 className="text-2xl font-bold text-[#1F1F1F] mb-1">
              {roundNumber > 1 ? "Putaran #" + roundNumber + " Selesai!" : "Latihan Selesai!"}
            </h2>
            <p className="text-[#6B7280] text-sm mb-8">Hasil hafalan kamu:</p>

            {/* Score */}
            <div className="flex justify-center gap-8 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-green-500 mb-1">{knownCount}</span>
                <span className="text-xs font-medium text-gray-400">Sudah Tahu</span>
              </div>
              <div className="w-px bg-gray-100"></div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-red-400 mb-1">{unknownCount}</span>
                <span className="text-xs font-medium text-gray-400">Kurang Tahu</span>
              </div>
            </div>

            {/* Accuracy bar */}
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-8">
              <div
                className="h-full bg-green-400 rounded-full transition-all duration-700"
                style={{ width: cards.length > 0 ? (knownCount / cards.length) * 100 + "%" : "0%" }}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              {unknownCount > 0 && (
                <button
                  onClick={handleRetryUnknown}
                  className="w-full bg-[#FFF0F5] border border-brand-pink text-brand-pink-dark rounded-xl py-3.5 font-semibold hover:bg-[#FCE7F3] transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Ulang {unknownCount} kata yang kurang tahu
                </button>
              )}
              <button
                onClick={() => setMode("setup")}
                className="w-full bg-brand-pink text-white rounded-xl py-3.5 font-semibold hover:bg-pink-500 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" /> Latihan Baru
              </button>
              <button
                onClick={() => router.push("/kaisha")}
                className="w-full bg-white border border-brand-border text-[#6B7280] rounded-xl py-3.5 font-semibold hover:bg-gray-50 transition-colors"
              >
                Kembali ke Daftar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
