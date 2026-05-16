import React from "react";
import { Building2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="h-16 bg-brand-navbar border-b border-brand-border flex items-center px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-pink rounded-[10px] flex items-center justify-center">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-brand-pink-darker text-base font-semibold italic leading-tight">
            DailyLife Namagomi Sakura
          </span>
          <span className="text-brand-pink-dark text-[11px] tracking-[2px] leading-tight mt-0.5">
            日本語・毎日の生活
          </span>
        </div>
      </div>
    </nav>
  );
}
