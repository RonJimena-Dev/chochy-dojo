// app/Dashboard.tsx
"use client";

import { useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "TraderDoge",
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

  const [showTradeForm, setShowTradeForm] = useState(false);

  const [newTrade, setNewTrade] = useState({
    pair: "",
    direction: "Long",
    risk: "",
    outcome: "",
    emotion: "Disciplined",
  });

  function toggleTradeForm() {
    setShowTradeForm(!showTradeForm);
  }

  function submitTrade() {
    if (newTrade.pair && newTrade.risk && newTrade.outcome) {
      const newEntry = {
        id: Date.now(),
        ...newTrade,
      };
      setTrades([newEntry, ...trades]);
      setNewTrade({
        pair: "",
        direction: "Long",
        risk: "",
        outcome: "",
        emotion: "Disciplined",
      });
      setShowTradeForm(false);
      setUser({ ...user, chochyBalance: user.chochyBalance + 50 });
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.name} {user.avatar}</h1>
        <p className="text-sm">Level: {user.level} | Streak: {user.streak} days</p>
        <p className="text-sm">💰 $CHOCHY: {user.chochyBalance}</p>
      </div>

      <button
        className="bg-emerald-500 text-white px-4 py-2 rounded-xl shadow"
        onClick={toggleTradeForm}
      >
        {showTradeForm ? "Cancel" : "Log New Trade"}
      </button>

      {showTradeForm && (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Pair"
            value={newTrade.pair}
            onChange={(e) => setNewTrade({ ...newTrade, pair: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Risk"
            value={newTrade.risk}
            onChange={(e) => setNewTrade({ ...newTrade, risk: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Outcome"
            value={newTrade.outcome}
            onChange={(e) => setNewTrade({ ...newTrade, outcome: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <select
            value={newTrade.emotion}
            onChange={(e) => setNewTrade({ ...newTrade, emotion: e.target.value })}
            className="p-2 border rounded w-full"
          >
            <option value="Disciplined">Disciplined</option>
            <option value="FOMO">FOMO</option>
            <option value="Greedy">Greedy</option>
            <option value="Patient">Patient</option>
          </select>
          <button onClick={submitTrade} className="bg-blue-600 text-white px-4 py-2 rounded-xl">
