"use client";

import { useRouter } from "next/navigation";
import { Navbar } from "./components/Navbar";
import { Building2 } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-4xl w-full">
          {/* Left - Hero Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <h1 className="text-[#DB2777] text-[42px] font-serif italic tracking-[4px] mb-2">
              はじめましょう
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-brand-pink-dark opacity-30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-pink"></div>
              <div className="h-[1px] w-12 bg-brand-pink-dark opacity-30"></div>
            </div>
            <p className="text-[#9CA3AF] text-sm">Ayo mulai belajar hari ini</p>
          </div>

          {/* Right - Kaisha Card */}
          <div 
            onClick={() => router.push("/kaisha")}
            className="bg-white border border-brand-border rounded-[20px] p-6 w-full max-w-[320px] cursor-pointer hover:border-brand-pink transition-colors shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-brand-pink rounded-[14px] flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#1F1F1F] text-lg font-semibold leading-tight">
                  Kaisha / Office Japanese
                </h2>
                <span className="text-brand-pink-dark text-xs mt-1">
                  かいしゃ・オフィス日本語
                </span>
              </div>
            </div>

            <p className="text-[#6B7280] text-[13px] leading-relaxed mb-6">
              Kosakata Jepang untuk lingkungan kerja. Bug report, standup, komunikasi tim, hingga istilah kantor sehari-hari.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#FCE7F3] text-[#BE185D] rounded-full text-xs font-medium">
                QA / Bug
              </span>
              <span className="px-3 py-1 bg-[#DBEAFE] text-[#1D4ED8] rounded-full text-xs font-medium">
                IT
              </span>
              <span className="px-3 py-1 bg-[#D1FAE5] text-[#065F46] rounded-full text-xs font-medium">
                Developer
              </span>
              <span className="px-3 py-1 bg-[#FEF9C3] text-[#854D0E] rounded-full text-xs font-medium">
                Meeting
              </span>
              <span className="px-3 py-1 bg-[#EDE9FE] text-[#7C3AED] rounded-full text-xs font-medium">
                PM
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
