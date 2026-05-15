"use client";

import React, { useState } from "react";
import { Heart, Music } from "lucide-react";
import { Vocabulary } from "../data/vocabulary";

interface VocabularyCardProps {
  data: Vocabulary;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
}

export function VocabularyCard({ data, isFavorited, onToggleFavorite }: VocabularyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <div className="flex flex-col bg-white border border-brand-border rounded-[16px] overflow-hidden hover:border-brand-pink transition-colors">
      <div 
        className="flex items-center p-4 cursor-pointer gap-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Left: Kanji & Reading */}
        <div className="w-[140px] shrink-0">
          <h3 className="text-[#1F1F1F] text-[22px] font-medium leading-tight">
            {data.kanji}
          </h3>
          <div className="text-brand-pink-dark text-[11px] mt-1 leading-tight">
            <div>{data.hiragana}</div>
            <div>{data.romaji}</div>
          </div>
        </div>

        {/* Middle: Meaning */}
        <div className="flex-1">
          <h4 className="text-[#1F1F1F] text-sm font-medium">
            {data.meaning}
          </h4>
          <p className="text-[#9CA3AF] text-xs mt-0.5">
            {data.shortExample}
          </p>
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

          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-pink text-white rounded-full hover:bg-pink-500 transition-colors">
            <Music className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Audio</span>
          </button>
        </div>
      </div>

      {/* Expanded State */}
      {isExpanded && (
        <div className="bg-brand-bg border-t border-brand-border p-4 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="mb-3">
            <div className="text-[#1F1F1F] mb-0.5">{data.fullExampleJP}</div>
            <div className="text-brand-pink-dark text-xs mb-1">{data.fullExampleHiragana}</div>
            <div className="text-brand-pink-dark text-sm">{data.fullExampleID}</div>
          </div>
          
          <div className="bg-white border-l-4 border-brand-navbar rounded-r-lg p-2.5 shadow-sm">
            <span className="text-brand-pink-dark text-[11px] font-medium uppercase tracking-wider mb-1 block">
              ✧ tip
            </span>
            <span className="text-[#6B7280] text-xs">
              {data.tip}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
