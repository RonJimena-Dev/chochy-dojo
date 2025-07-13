"use client";
import React, { useState } from "react";
import { Trade } from "./ChochyDojo";
import TradeForm from "./TradeForm";

interface TradeLogProps {
  trades: Trade[];
  onAddTrade: (trade: Omit<Trade, 'id'>) => void;
}

function TradeLog({ trades, onAddTrade }: TradeLogProps) {
  const [showTradeForm, setShowTradeForm] = useState(false);

  const toggleTradeForm = () => {
    setShowTradeForm(!showTradeForm);
  };

  return (
    <section className="p-6 rounded-md border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20 col-[span_2] max-md:col-[span_1]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="m-0 text-lg font-bold">📊 Trade Log</h2>
        <button
          className="px-4 py-2 text-sm font-semibold bg-blue-400 rounded-md cursor-pointer border-[none] text-stone-900"
          onClick={toggleTradeForm}
        >
          + Submit New Trade
        </button>
      </div>

      {showTradeForm && (
        <TradeForm
          onSubmit={onAddTrade}
          onCancel={() => setShowTradeForm(false)}
        />
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-solid border-b-neutral-300 border-b-opacity-20">
              <th className="p-2 text-left text-zinc-300">Pair</th>
              <th className="p-2 text-left text-zinc-300">Direction</th>
              <th className="p-2 text-left text-zinc-300">Risk</th>
              <th className="p-2 text-left text-zinc-300">Outcome</th>
              <th className="p-2 text-left text-zinc-300">Emotion</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id} className="border-b border-solid border-b-neutral-300 border-b-opacity-10">
                <td className="p-2">{trade.pair}</td>
                <td className="p-2">
                  <span
                    style={{
                      color: trade.direction === "Long" ? "#10b981" : "#ef4444",
                    }}
                  >
                    {trade.direction}
                  </span>
                </td>
                <td className="p-2">{trade.risk}</td>
                <td
                  className="p-2"
                  style={{
                    color: trade.outcome.startsWith("+") ? "#10b981" : "#ef4444",
                  }}
                >
                  {trade.outcome}
                </td>
                <td className="p-2">
                  <span
                    className="px-1.5 py-0.5 text-xs rounded"
                    style={{
                      backgroundColor:
                        trade.emotion === "Disciplined"
                          ? "rgb(93, 41, 190)"
                          : "rgba(239, 68, 68, 0.2)",
                      color:
                        trade.emotion === "Disciplined"
                          ? "white"
                          : "#ef4444",
                    }}
                  >
                    {trade.emotion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TradeLog;
