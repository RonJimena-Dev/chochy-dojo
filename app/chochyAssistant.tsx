"use client";
import React from "react";
import { Trade } from "./chochydojo";

interface ChochyAssistantProps {
  trades: Trade[];
}

function ChochyAssistant({ trades }: ChochyAssistantProps) {
  const hasEnoughTrades = trades.length >= 3;

  return (
    <section className="p-6 rounded-md border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20">
      <h2 className="mx-0 mt-0 mb-4 text-lg font-bold">
        🤖 Chochy Assistant
      </h2>
      <div className="flex justify-center items-center p-4 text-sm text-center rounded-md bg-zinc-500 bg-opacity-10 min-h-[120px] text-zinc-300">
        {hasEnoughTrades ? (
          <div>
            <div className="mb-2">
              🐕 "Woof! I see you've been disciplined lately. Keep up
              the good work, trader!"
            </div>
            <button className="px-3 py-1.5 text-xs bg-blue-400 rounded cursor-pointer border-[none] text-stone-900">
              Ask Chochy
            </button>
          </div>
        ) : (
          <div>Log more trades to unlock Chochy's wisdom! 🔒</div>
        )}
      </div>
    </section>
  );
}

export default ChochyAssistant;
