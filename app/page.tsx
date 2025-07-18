// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../src/supabaseClient";
import ChoChyDojo from "./chochydojo"
import Header from "./header";
import BehaviorTracker from "./behaviorTracker";
import TradeLog from "./tradeLog";
import RewardsSection from "./rewardsSection";
import ChochyAssistant from "./chochyAssistant";
import TradingProfile from "./tradingProfile";
import Leaderboard from "./leaderboard";
import TradeForm from "./tradeForm";

export default function Page() {
  const [user, setUser] = useState({
    name: "TraderDog",
    avatar: "🐕",
    chochyBalance: 1250,
    level: "Good Dog",
    streak: 7,
  });

  const [trades, setTrades] = useState([]);
  useEffect(() => {
    async function fetchTrades() {
      const { data, error } = await supabase
        .from('trades')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) setTrades(data);
    }
    fetchTrades();
  }, []);

  const [leaderboard] = useState([
    { rank: 1, name: "AlphaDoge", chochy: 5420 },
    { rank: 2, name: "ZenTrader", chochy: 4890 },
    { rank: 3, name: "DiamondPaws", chochy: 4200 },
    { rank: 4, name: "ShibaWise", chochy: 3750 },
    { rank: 5, name: "CryptoSensei", chochy: 3200 },
  ]);

  const addTrade = async (newTrade) => {
    const { data, error } = await supabase
      .from('trades')
      .insert([{ ...newTrade }])
      .select();
    if (!error && data && data.length > 0) {
      setTrades((prev) => [data[0], ...prev]);
      setUser((prev) => ({
        ...prev,
        chochyBalance: prev.chochyBalance + 50,
      }));
    }
  };


  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-zinc-900 dark:text-white">
      <Header user={user} />
      <main className="flex flex-col gap-6 p-6 max-sm:gap-4 max-sm:p-4">
        {/* Top row */}
        {/* 5x2 dashboard grid */}
        <section
          className="grid grid-cols-5 grid-rows-2 gap-6 max-lg:grid-cols-1 max-lg:grid-rows-none"
        >
          {/* Row 1 */}
          <div className="col-span-1 row-span-1">
            <BehaviorTracker user={user} />
          </div>
          <div className="col-span-3 row-span-2 flex flex-col h-full">
            <TradeLog trades={trades} onAddTrade={addTrade} />
          </div>
          <div className="col-span-1 row-span-1 col-start-5 row-start-1">
            <TradingProfile />
          </div>
          {/* Row 2 */}
          <div className="col-span-1 row-span-1">
            <Leaderboard leaderboard={leaderboard} />
          </div>
          <div className="col-span-1 row-span-1"></div> {/* Spacer for grid symmetry */}
          <div className="col-span-1 row-span-1"></div> {/* Spacer for grid symmetry */}
          <div className="col-span-1 row-span-1 col-start-5 row-start-2">
            <RewardsSection user={user} />
          </div>
        </section>
      </main>
      {/* Floating Chochy Assistant button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-violet-700 hover:bg-violet-800 text-white rounded-full shadow-lg p-4 flex items-center justify-center text-3xl focus:outline-none focus:ring-2 focus:ring-violet-400">
          🐕💬
        </button>
      </div>
    </div>
  );
}
