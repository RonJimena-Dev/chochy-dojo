"use client";
import React, { useState } from "react";
import { Trade } from "./ChochyDojo";

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

  const handleSubmit = () => {
    if (newTrade.pair && newTrade.risk && newTrade.outcome) {
      onSubmit(newTrade);
      setNewTrade({
        pair: "",
        direction: "Long",
        risk: "",
        outcome: "",
        emotion: "Disciplined",
      });
      onCancel();
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
      <input
        placeholder="Pair (e.g., BTC/USD)"
        className="p-2 text-sm rounded border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20 text-[white]"
        value={newTrade.pair}
        onChange={(e) => handleInputChange('pair', e.target.value)}
      />
      <select
        className="p-2 text-sm rounded border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20 text-[white]"
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
      <input
        placeholder="Outcome"
        className="p-2 text-sm rounded border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20 text-[white]"
        value={newTrade.outcome}
        onChange={(e) => handleInputChange('outcome', e.target.value)}
      />
      <select
        className="p-2 text-sm rounded border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20 text-[white]"
        value={newTrade.emotion}
        onChange={(e) => handleInputChange('emotion', e.target.value)}
      >
        <option value="Disciplined">Disciplined</option>
        <option value="FOMO">FOMO</option>
        <option value="Patient">Patient</option>
        <option value="Greedy">Greedy</option>
        <option value="Fearful">Fearful</option>
      </select>
      <button
        type="button"
        className="px-4 py-2 text-sm bg-violet-800 rounded cursor-pointer border-[none] text-[white]"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default TradeForm;
