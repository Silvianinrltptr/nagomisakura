"use client";

import React, { useState } from "react";
import { Heart, Music, Volume2 } from "lucide-react";
import { Vocabulary } from "../data/vocabulary";

interface VocabularyCardProps {
  data: Vocabulary;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  isFocusMode?: boolean;
}

export function VocabularyCard({ data, isFavorited, onToggleFavorite, isFocusMode = false }: VocabularyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "QA/Bug": return "bg-[#FF6B9D]";
      case "Komunikasi": return "bg-[#60A5FA]";
      case "Report": return "bg-[#4ADE80]";
      case "Standup": return "bg-[#FBBF24]";
      case "Kerja umum": return "bg-[#A78BFA]";
      default: return "bg-gray-400";
    }
  };

  const playAudio = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleClick = () => {
    if (isFocusMode && !revealed) {
      setRevealed(true);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const isHidden = isFocusMode && !revealed;

  return (
    <div className="flex flex-col bg-white border border-brand-border rounded-[16px] overflow-hidden hover:border-brand-pink transition-colors">
      <div
        className="flex items-center p-4 cursor-pointer gap-4"
        onClick={handleClick}
      >
        {/* Left: Kanji & Reading */}
        <div className="w-[140px] shrink-0">
          <h3 className="text-[#1F1F1F] text-[22px] font-medium leading-tight">
            {data.kanji}
          </h3>
          <div
            className={[
              "text-brand-pink-dark text-[11px] mt-1 leading-tight transition-all",
              isHidden ? "blur-sm select-none opacity-50" : "",
            ].join(" ")}
          >
            <div>{data.hiragana}</div>
            <div>{data.romaji}</div>
          </div>
        </div>

        {/* Middle: Meaning */}
        <div
          className={[
            "flex-1 transition-all",
            isHidden ? "blur-md select-none opacity-40" : "",
          ].join(" ")}
        >
          <h4 className="text-[#1F1F1F] text-sm font-medium">{data.meaning}</h4>
          <p className="text-[#9CA3AF] text-xs mt-0.5">{data.shortExample}</p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
          <div className={`w-2.5 h-2.5 rounded-full ${getCategoryColor(data.category)}`}></div>

          {data.level === "N5" ? (
            <span className="px-2.5 py-0.5 bg-[#FCE7F3] text-brand-pink-dark rounded-full text-[11px] font-medium">
              N5
            </span>
          ) : (
            <span className="px-2.5 py-0.5 bg-[#EDE9FE] text-[#7C3AED] rounded-full text-[11px] font-medium">
              N4
            </span>
          )}

          <button
            onClick={() => onToggleFavorite(data.id)}
            className="p-1 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${isFavorited ? "fill-brand-pink text-brand-pink" : "text-[#FCA5A5]"}`}
            />
          </button>

          <button
            onClick={(e) => playAudio(data.kanji, e)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-pink text-white rounded-full hover:bg-pink-500 transition-colors"
          >
            <Music className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Audio</span>
          </button>
        </div>
      </div>

      {/* Expanded State */}
      {isExpanded && !isHidden && (
        <div className="bg-brand-bg border-t border-brand-border p-4 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Multiple Examples */}
          <div className="flex flex-col gap-4 mb-5">
            {data.examples.map((ex, idx) => (
              <div key={idx} className="flex gap-3">
                <button
                  onClick={(e) => playAudio(ex.jp, e)}
                  className="mt-0.5 w-6 h-6 shrink-0 bg-white border border-brand-pink text-brand-pink rounded-full flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
                >
                  <Volume2 className="w-3 h-3" />
                </button>
                <div>
                  <div className="text-[#1F1F1F] mb-0.5 font-medium">{ex.jp}</div>
                  <div className="text-brand-pink-dark text-xs mb-1">{ex.hiragana}</div>
                  <div className="text-gray-600 text-[13px]">{ex.id}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tip Box */}
          <div className="bg-white border-l-4 border-brand-navbar rounded-r-lg p-2.5 shadow-sm">
            <span className="text-brand-pink-dark text-[11px] font-medium uppercase tracking-wider mb-1 block">
              ✧ tip
            </span>
            <span className="text-[#6B7280] text-xs">{data.tip}</span>
          </div>
        </div>
      )}
    </div>
  );
}
