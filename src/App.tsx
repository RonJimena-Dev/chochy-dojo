import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">🐶 Welcome to Chochy Dojo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* $CHOCHY STATS */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-2">💰 $CHOCHY Balance</h2>
          <p className="text-3xl font-mono text-green-400">12,300</p>
          <p className="text-sm text-gray-400 mt-2">+500 earned this week</p>
        </div>

        {/* CHOCHY COACH */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-2">🤖 Chochy AI Coach</h2>
          <p className="text-sm text-yellow-300">“Good boy! That trade was well-structured!”</p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 rounded-xl text-black font-bold hover:bg-yellow-400">
            Unlock GPT Feedback
          </button>
        </div>
      </div>

      {/* MANUAL TRADE JOURNAL */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl mb-10">
        <h2 className="text-xl font-bold mb-4">📓 Log a Trade</h2>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Pair (e.g., ADA/USDT)"
            className="bg-gray-800 px-4 py-2 rounded-xl"
          />
          <input
            type="text"
            placeholder="Entry price"
            className="bg-gray-800 px-4 py-2 rounded-xl"
          />
          <input
            type="text"
            placeholder="TP / SL / R:R"
            className="bg-gray-800 px-4 py-2 rounded-xl"
          />
          <textarea
            placeholder="Emotional State or Reason for Trade"
            className="bg-gray-800 px-4 py-2 rounded-xl"
          ></textarea>
          <button type="submit" className="bg-green-500 py-2 px-4 rounded-xl text-black font-bold hover:bg-green-400">
            Submit Trade
          </button>
        </form>
      </div>

      {/* BADGES + STREAK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* STREAK */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-2">🔥 Discipline Streak</h2>
          <p className="text-2xl font-mono text-orange-400">5 Days</p>
        </div>

        {/* BADGES */}
        <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-2">🎖️ Badges</h2>
          <div className="flex gap-2">
            <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold">Obeyed SL</span>
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Logged 10 trades</span>
            <span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-semibold">5-Day Streak</span>
          </div>
        </div>
      </div>
    </div>
  );
}
