// app/page.tsx
"use client";

import React, { useState } from "react";
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

  const [trades, setTrades] = useState([
    {
      id: 1,
      pair: "BTC/USD",
      direction: "Long",
      risk: "2%",
      outcome: "+150",
      emotion: "Disciplined",
    },
    {
      id: 2,
      pair: "ETH/USD",
      direction: "Short",
      risk: "1.5%",
      outcome: "-75",
      emotion: "FOMO",
    },
    {
      id: 3,
      pair: "SOL/USD",
      direction: "Long",
      risk: "2%",
      outcome: "+200",
      emotion: "Patient",
    },
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: "AlphaDoge", chochy: 5420 },
    { rank: 2, name: "ZenTrader", chochy: 4890 },
    { rank: 3, name: "DiamondPaws", chochy: 4200 },
    { rank: 4, name: "ShibaWise", chochy: 3750 },
    { rank: 5, name: "CryptoSensei", chochy: 3200 },
  ]);

  const addTrade = (newTrade) => {
    const trade = {
      id: Date.now(),
      ...newTrade,
    };
    setTrades((prev) => [trade, ...prev]);
    setUser((prev) => ({
      ...prev,
      chochyBalance: prev.chochyBalance + 50,
    }));
  };

  return (
    <div className="min-h-screen text-white bg-neutral-900">
      <Header user={user} />
      <main className="grid gap-6 p-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-sm:gap-4 max-sm:p-4 max-sm:grid-cols-[1fr]">
        <BehaviorTracker user={user} />
        <TradeLog trades={trades} onAddTrade={addTrade} />
        <RewardsSection user={user} />
        <ChochyAssistant trades={trades} />
        <TradingProfile />
        <SMCZonesPreview />
        <Leaderboard leaderboard={leaderboard} />
      </main>
    </div>
  );
}
