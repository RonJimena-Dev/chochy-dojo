"use client";
import React from "react";
import { User } from "./ChochyDojo";

interface HeaderProps {
  user: User;
}

function Header({ user }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-solid bg-zinc-500 bg-opacity-10 border-b-neutral-300 border-b-opacity-20">
      <div className="flex gap-3 items-center">
        <span className="text-3xl">🐕🔥</span>
        <h1 className="m-0 text-2xl font-bold">Chochy Dojo</h1>
      </div>
      <div className="flex gap-4 items-center px-4 py-2 rounded-md bg-zinc-500 bg-opacity-10">
        <span className="text-2xl">{user.avatar}</span>
        <div className="text-right">
          <div className="text-sm font-semibold">{user.name}</div>
          <div className="text-xs text-zinc-300">
            💰 {user.chochyBalance} $CHOCHY
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
