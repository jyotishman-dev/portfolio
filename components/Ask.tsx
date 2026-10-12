"use client";
import { useState } from "react";

// Phase 1: stub. Phase 2 swaps `answer` for a fetch to /api/chat (RAG).
export default function Ask() {
  const [q, setQ] = useState("");
  const [a, setA] = useState<string | null>(null);

  function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!q.trim()) return;
    setA("The assistant isn't connected yet. It will answer from my projects, work history and blog posts.");
  }

  return (
    <div className="space-y-3">
      <form onSubmit={submit} className="row flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="What has Amitesh built with WebSockets?"
          className="flex-1 bg-transparent outline-none"
          aria-label="Ask a question"
        />
        <button className="px-3 font-medium">Ask</button>
      </form>
      {a && <p className="muted text-sm">{a}</p>}
    </div>
  );
}
