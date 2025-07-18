import React from "react";

// Simple playful dog SVG mascot (can be replaced with a more advanced one later)
export default function ChochyMascot({ mood = "neutral", className = "" }: { mood?: "neutral" | "happy" | "bark" | "sad"; className?: string }) {
  // You can swap SVGs or emoji based on mood
  if (mood === "happy") return <span className={className} role="img" aria-label="Happy Chochy">🐕‍🦺✨</span>;
  if (mood === "bark") return <span className={className} role="img" aria-label="Barking Chochy">🐕‍🦺🗯️</span>;
  if (mood === "sad") return <span className={className} role="img" aria-label="Sad Chochy">🐕‍🦺😢</span>;
  return <span className={className} role="img" aria-label="Chochy Mascot">🐕‍🦺</span>;
}
