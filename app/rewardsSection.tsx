"use client";
import React from "react";
import { User } from "./ChochyDojo";

interface RewardsSectionProps {
  user: User;
}

function RewardsSection({ user }: RewardsSectionProps) {
  return (
    <section className="p-6 rounded-md border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20">
      <h2 className="mx-0 mt-0 mb-4 text-lg font-bold">
        💰 $CHOCHY Rewards
      </h2>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Earned Today</span>
          <span className="font-semibold text-emerald-500">+150</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Spent This Week</span>
          <span className="text-red-500">-75</span>
        </div>
        <div className="flex justify-between">
          <span>Total Balance</span>
          <span className="font-semibold text-blue-400">
            {user.chochyBalance}
          </span>
        </div>
      </div>
      <div className="text-xs text-zinc-300">
        <strong>Unlocked:</strong> GPT Assistant, Advanced Charts
      </div>
    </section>
  );
}

export default RewardsSection;
