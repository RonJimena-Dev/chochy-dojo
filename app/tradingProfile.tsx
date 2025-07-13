"use client";
import React from "react";

function TradingProfile() {
  return (
    <section className="p-6 rounded-md border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20">
      <h2 className="mx-0 mt-0 mb-4 text-lg font-bold">
        📈 Trading Profile
      </h2>
      <div className="mb-4 text-center">
        <div className="mb-2 text-5xl">🧘‍♂️</div>
        <div className="mb-1 text-lg font-semibold text-blue-400">
          Moderate Trader
        </div>
        <div className="text-xs text-zinc-300">
          Balanced risk, good discipline
        </div>
      </div>
      <div className="text-sm">
        <div className="flex justify-between mb-1">
          <span>Risk Level</span>
          <span>Medium</span>
        </div>
        <div className="flex justify-between">
          <span>Discipline Score</span>
          <span className="text-emerald-500">85/100</span>
        </div>
      </div>
    </section>
  );
}

export default TradingProfile;
