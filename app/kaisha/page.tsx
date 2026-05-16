"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Building2, Search, Zap, EyeOff } from "lucide-react";
import { VocabularyCard } from "../components/VocabularyCard";
import { VOCABULARY_DATA, Category, Level } from "../data/vocabulary";

type Tab = "Semua" | Category | "Favorit";
type LevelTab = "Semua" | Level;

export default function KaishaPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("Semua");
  const [activeLevel, setActiveLevel] = useState<LevelTab>("Semua");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedFavs = localStorage.getItem("nagomi_favorites");
    if (savedFavs) {
      try {
        setFavorites(JSON.parse(savedFavs));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavs = prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id];
      localStorage.setItem("nagomi_favorites", JSON.stringify(newFavs));
      return newFavs;
    });
  };

  const filteredData = VOCABULARY_DATA.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      item.kanji.toLowerCase().includes(query) ||
      item.hiragana.toLowerCase().includes(query) ||
      item.romaji.toLowerCase().includes(query) ||
      item.meaning.toLowerCase().includes(query);

    let matchesTab = true;
    if (activeTab === "Favorit") {
      matchesTab = favorites.includes(item.id);
    } else if (activeTab !== "Semua") {
      matchesTab = item.category === activeTab;
    }

    let matchesLevel = true;
    if (activeLevel !== "Semua") {
      matchesLevel = item.level === activeLevel;
    }

    return matchesSearch && matchesTab && matchesLevel;
  });

  if (!isMounted) return null;

  const categories: Tab[] = ["Semua", "QA/Bug", "Komunikasi", "Report", "Standup", "Kerja umum", "Favorit"];
  const levels: LevelTab[] = ["Semua", "N5", "N4"];

  return (
    <div className="min-h-screen bg-brand-bg pb-12">
      <div className="max-w-3xl mx-auto pt-6 px-4">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-1 text-brand-pink-dark hover:text-brand-pink-darker text-sm font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-brand-pink rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-[#1F1F1F] text-xl font-semibold leading-tight">QA Kosakata</h1>
              <span className="text-[#9CA3AF] text-sm">きゅーえー・こさかた</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => router.push("/latihan")}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-brand-pink text-white rounded-full text-sm font-medium hover:bg-pink-500 transition-colors shadow-sm"
            >
              <Zap className="w-4 h-4" />
              Latihan
            </button>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#FCE7F3] text-brand-pink-dark rounded-full text-xs font-medium">
                {VOCABULARY_DATA.length} kata
              </span>
              <span className="px-3 py-1 bg-[#FCE7F3] text-brand-pink-dark rounded-full text-xs font-medium">
                {favorites.length} favorit
              </span>
            </div>
          </div>
        </div>

        {/* Search & Focus Mode */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-brand-pink-dark" />
            </div>
            <input
              type="text"
              placeholder="Cari kanji, hiragana, romaji, arti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-navbar border border-brand-border rounded-xl py-3 pl-12 pr-4 text-brand-pink-darker placeholder-brand-pink-dark outline-none focus:border-brand-pink transition-colors"
            />
          </div>

          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            title="Sembunyikan arti & cara baca (untuk hafalan)"
            className={[
              "px-4 rounded-xl flex flex-col items-center justify-center gap-1 transition-colors border",
              isFocusMode
                ? "bg-brand-pink border-brand-pink text-white"
                : "bg-white border-brand-border text-brand-pink-dark hover:bg-pink-50",
            ].join(" ")}
          >
            <EyeOff className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Focus</span>
          </button>
        </div>

        {/* Filter Tabs Row 1 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={[
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                activeTab === cat
                  ? "bg-brand-active text-white"
                  : "bg-[#FCE7F3] text-brand-pink-dark hover:bg-pink-200",
              ].join(" ")}
            >
              {cat === "Favorit" ? "Favorit (" + favorites.length + ")" : cat}
            </button>
          ))}
        </div>

        {/* Filter Tabs Row 2 */}
        <div className="flex gap-2 mb-6">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={[
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                activeLevel === lvl
                  ? "bg-brand-active text-white"
                  : "bg-[#FCE7F3] text-brand-pink-dark hover:bg-pink-200",
              ].join(" ")}
            >
              {lvl === "Semua" ? "N5 + N4" : lvl}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-4">
          {[
            { label: "QA/Bug", color: "#FF6B9D" },
            { label: "Komunikasi", color: "#60A5FA" },
            { label: "Report", color: "#4ADE80" },
            { label: "Standup", color: "#FBBF24" },
            { label: "Kerja umum", color: "#A78BFA" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-[#6B7280] text-[11px]">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="text-[#6B7280] text-xs mb-4">
          Menampilkan {filteredData.length} dari {VOCABULARY_DATA.length} kosakata
        </div>

        {/* List */}
        <div className="flex flex-col gap-3">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <VocabularyCard
                key={item.id}
                data={item}
                isFavorited={favorites.includes(item.id)}
                onToggleFavorite={handleToggleFavorite}
                isFocusMode={isFocusMode}
              />
            ))
          ) : (
            <div className="text-center py-10 text-gray-500 bg-white rounded-xl border border-brand-border">
              Kosakata tidak ditemukan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
