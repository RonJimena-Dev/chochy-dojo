"use client";
import React from "react";
import { User } from "./chochydojo";

interface BehaviorTrackerProps {
  user: User;
}

function BehaviorTracker({ user }: BehaviorTrackerProps) {
  return (
    <section className="p-6 rounded-md border border-solid bg-zinc-500 bg-opacity-10 border-neutral-300 border-opacity-20">
      <h2 className="gap-2 mx-0 mt-0 mb-4 text-lg font-bold">
        🎯 Behavior Tracker
      </h2>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Discipline Streak</span>
          <span className="font-semibold text-blue-400">
            🔥 {user.streak} days
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Current Badge</span>
          <span className="px-2 py-0.5 text-xs bg-violet-800 rounded text-[white]">
            {user.level}
          </span>
        </div>
      </div>
      <div className="text-sm text-zinc-300">
        <strong>Recent Tags:</strong> Disciplined, Patient, Risk-Aware
      </div>
    </section>
  );
}

export default BehaviorTracker;

