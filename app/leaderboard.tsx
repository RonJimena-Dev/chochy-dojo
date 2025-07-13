"use client";
import React from "react";
import { LeaderboardEntry } from "./chochydojo";

interface LeaderboardProps {
  leaderboard: LeaderboardEntry[];
}

function Leaderboard({ leaderboard }: LeaderboardProps) {
  return (
    <section className="p-6 rounded-md border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20">
      <h2 className="mx-0 mt-0 mb-4 text-lg font-bold">
        🏆 Dojo Leaderboard
      </h2>
      <div className="text-sm">
        {leaderboard.map((trader) => (
          <div
            key={trader.rank}
            className="flex justify-between items-center px-0 py-2"
            style={{
              borderBottom:
                trader.rank < 5
                  ? "1px solid rgba(213, 213, 213, 0.1)"
                  : "none",
            }}
          >
            <div className="flex gap-2 items-center">
              <span
                className="flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-[white]"
                style={{
                  backgroundColor:
                    trader.rank <= 3
                      ? "rgb(93, 41, 190)"
                      : "rgba(130, 130, 130, 0.3)",
                }}
              >
                {trader.rank}
              </span>
              <span>{trader.name}</span>
            </div>
            <span className="font-semibold text-blue-400">
              {trader.chochy}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leaderboard;
