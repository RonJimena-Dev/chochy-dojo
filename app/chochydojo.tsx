"use client";
import * as React from "react";
import { useState } from "react";
import Header from "./header";
import BehaviorTracker from "./behaviorTracker";
import TradeLog from "./tradeLog";
import RewardsSection from "./RewardsSection";
import ChochyAssistant from "./chochyAssistant";
import TradingProfile from "./tradingProfile";
import Leaderboard from "./leaderboard";

export interface User {
  name: string;
  avatar: string;
  chochyBalance: number;
  level: string;
  streak: number;
}

export interface Trade {
  id: number;
  pair: string;
  direction: string;
  risk: string;
  outcome: string;
  emotion: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  chochy: number;
}

function ChochyDojo() {
  const [user, setUser] = useState<User>({
    name: "TraderDog",
    avatar: "🐕",
    chochyBalance: 1250,
    level: "Good Dog",
    streak: 7,
  });

  const [trades, setTrades] = useState<Trade[]>([
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

  const [leaderboard] = useState<LeaderboardEntry[]>([
    {
      rank: 1,
      name: "AlphaDoge",
      chochy: 5420,
    },
    {
      rank: 2,
      name: "ZenTrader",
      chochy: 4890,
    },
    {
      rank: 3,
      name: "DiamondPaws",
      chochy: 4200,
    },
    {
      rank: 4,
      name: "ShibaWise",
      chochy: 3750,
    },
    {
      rank: 5,
      name: "CryptoSensei",
      chochy: 3200,
    },
  ]);

  const addTrade = (newTrade: Omit<Trade, 'id'>) => {
    const trade: Trade = {
      id: Date.now(),
      ...newTrade,
    };
    setTrades(prev => [trade, ...prev]);
    setUser(prev => ({
      ...prev,
      chochyBalance: prev.chochyBalance + 50
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
        <Leaderboard leaderboard={leaderboard} />
      </main>
    </div>
  );
}

export default ChochyDojo;
