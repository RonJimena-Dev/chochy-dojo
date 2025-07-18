"use client";
import React, { useState } from "react";
import { Trade } from "./chochydojo";
import Spinner from "./Spinner";
import ChochyMascot from "./ChochyMascot";

interface TradeFormProps {
  onSubmit: (trade: Omit<Trade, 'id'>) => void;
  onCancel: () => void;
}

function TradeForm({ onSubmit, onCancel }: TradeFormProps) {
  const [newTrade, setNewTrade] = useState({
    pair: "",
    direction: "Long",
    risk: "",
    outcome: "",
    emotion: "Disciplined",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [mascotMood, setMascotMood] = useState<'neutral' | 'happy' | 'bark'>('neutral');

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);
    setMascotMood('neutral');
    // Validation
    if (!newTrade.pair || !newTrade.risk || !newTrade.outcome) {
      setError('Please fill in all required fields.');
      setMascotMood('bark');
      return;
    }
    if (isNaN(Number(newTrade.risk))) {
      setError('Risk must be a number.');
      setMascotMood('bark');
      return;
    }
    setLoading(true);
    try {
      await new Promise(res => setTimeout(res, 800)); // Simulate loading
      onSubmit(newTrade);
      setNewTrade({
        pair: "",
        direction: "Long",
        risk: "",
        outcome: "",
        emotion: "Disciplined",
      });
      setSuccess(true);
      setMascotMood('happy');
      setTimeout(() => setSuccess(false), 1200);
      onCancel();
    } catch (e) {
      setError('Something went wrong.');
      setMascotMood('bark');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setNewTrade(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form className="grid gap-3 p-4 mb-4 rounded-md bg-zinc-500 bg-opacity-10 grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
      <select
        className="p-2 text-sm rounded border border-solid bg-zinc-800 border-neutral-400 text-white focus:bg-zinc-900 focus:text-yellow-200 placeholder:text-neutral-400"
        value={newTrade.pair}
        onChange={(e) => handleInputChange('pair', e.target.value)}
      >
        <option value="" disabled>Select Symbol</option>
        <option value="BTC/USD">BTC/USD</option>
        <option value="ETH/USD">ETH/USD</option>
        <option value="SOL/USD">SOL/USD</option>
        <option value="BNB/USD">BNB/USD</option>
        <option value="XRP/USD">XRP/USD</option>
        <option value="ADA/USD">ADA/USD</option>
        <option value="DOGE/USD">DOGE/USD</option>
        <option value="Other">Other</option>
      </select>
      <select
        className="p-2 text-sm rounded border border-solid bg-zinc-800 border-neutral-400 text-white focus:bg-zinc-900 focus:text-yellow-200 placeholder:text-neutral-400"
        value={newTrade.direction}
        onChange={(e) => handleInputChange('direction', e.target.value)}
      >
        <option value="Long">Long</option>
        <option value="Short">Short</option>
      </select>
      <input
        placeholder="Risk %"
        className="p-2 text-sm rounded border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20 text-[white]"
        value={newTrade.risk}
        onChange={(e) => handleInputChange('risk', e.target.value)}
      />
      <select
        className="p-2 text-sm rounded border border-solid bg-zinc-800 border-neutral-400 text-white focus:bg-zinc-900 focus:text-yellow-200 placeholder:text-neutral-400"
        value={newTrade.outcome}
        onChange={(e) => handleInputChange('outcome', e.target.value)}
      >
        <option value="" disabled>Select Outcome</option>
        <option value="Win">Win</option>
        <option value="Lose">Lose</option>
        <option value="Breakeven">Breakeven</option>
        <option value="In Progress">In Progress</option>
      </select>
      <select
        className="p-2 text-sm rounded border border-solid bg-zinc-800 border-neutral-400 text-white focus:bg-zinc-900 focus:text-yellow-200 placeholder:text-neutral-400"
        value={newTrade.emotion}
        onChange={(e) => handleInputChange('emotion', e.target.value)}
      >
        <option value="Disciplined">Disciplined</option>
        <option value="FOMO">FOMO</option>
        <option value="Patient">Patient</option>
        <option value="Greedy">Greedy</option>
        <option value="Fearful">Fearful</option>
        <option value="Hopeful">Hopeful</option>
        <option value="Angry">Angry</option>
      </select>
      <button
        type="button"
        className="px-4 py-2 text-sm bg-violet-800 rounded cursor-pointer border-[none] text-[white]"
        onClick={handleSubmit}
        disabled={loading}
      >
        Submit
      </button>
    </form>
  );
}

export default TradeForm;
