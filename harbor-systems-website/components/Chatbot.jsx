"use client";

import BrandLogo from "@/components/BrandLogo";
import { MessageCircle, Send, X, RotateCcw } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const welcome = {
  role: "assistant",
  content:
    "Hi, I'm Harbor AI. I help churches, nonprofits, and schools think through automation, dashboards, and AI systems. What's your organization working on?"
};

const suggestions = [
  "What services does Harbor Systems provide?",
  "How would an operational audit work?",
  "Can AI help a nonprofit without replacing staff?"
];

export default function Chatbot({ embedded = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(embedded);
  const [messages, setMessages] = useState([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const hideLauncher = !embedded && pathname === "/demo";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open && !embedded) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open, embedded]);

  function reset() {
    setMessages([welcome]);
    setInput("");
    setError("");
  }

  async function sendMessage(text = input) {
    const clean = text.trim();
    if (!clean || loading) return;

    const nextMessages = [...messages, { role: "user", content: clean }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        throw new Error("invalid_response");
      }

      if (!response.ok) {
        setError(data.content || "Something went wrong. Please try again.");
        return;
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.content || "I'm having trouble responding right now." }
      ]);
    } catch {
      setError("Harbor AI is temporarily unavailable. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  const panel = (
    <div
      className={
        embedded
          ? "h-[min(640px,80vh)] w-full"
          : "fixed bottom-20 right-4 z-50 h-[min(580px,78vh)] w-[min(100vw-2rem,400px)] sm:bottom-24 sm:right-6"
      }
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-black/[0.07] bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-navy px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-1.5">
              <BrandLogo size="chat" alt="" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Harbor AI</p>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <p className="text-xs text-white/55">AI consultant assistant</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="focus-ring rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              onClick={reset}
              aria-label="Reset conversation"
            >
              <RotateCcw size={15} />
            </button>
            {!embedded && (
              <button
                type="button"
                className="focus-ring rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-offwhite p-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-[1.65] ${
                  message.role === "user"
                    ? "rounded-br-sm bg-navy text-white shadow-soft"
                    : "rounded-bl-sm border border-black/[0.06] bg-white text-ink shadow-xs"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-sm border border-black/[0.06] bg-white px-4 py-3 shadow-xs">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-gold" style={{ animation: "pulse-dot 1.4s ease-in-out 0s infinite" }} />
                  <span className="h-2 w-2 rounded-full bg-gold" style={{ animation: "pulse-dot 1.4s ease-in-out 0.2s infinite" }} />
                  <span className="h-2 w-2 rounded-full bg-gold" style={{ animation: "pulse-dot 1.4s ease-in-out 0.4s infinite" }} />
                </span>
              </div>
            </div>
          )}

          {error && (
            <p
              className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-black/[0.06] bg-white p-4">
          {messages.length <= 1 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => sendMessage(item)}
                  disabled={loading}
                  className="focus-ring rounded-full border border-black/[0.08] px-3 py-1.5 text-xs font-medium text-ink/65 transition-all hover:border-gold/50 hover:bg-gold/[0.06] hover:text-navy disabled:opacity-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) sendMessage(); }}
              placeholder="Ask anything about your organization..."
              disabled={loading}
              aria-label="Chat message"
              className="focus-ring min-w-0 flex-1 rounded-2xl border border-black/[0.08] bg-offwhite px-4 py-3 text-sm text-ink placeholder:text-ink/35 disabled:opacity-60"
            />
            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="focus-ring inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-white transition-all duration-200 hover:bg-navy2 disabled:opacity-40"
            >
              <Send size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (embedded) return panel;
  if (hideLauncher) return null;

  return (
    <>
      {open && panel}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-premium transition-all duration-200 hover:-translate-y-1 hover:bg-navy2 sm:bottom-6 sm:right-6"
        aria-label="Open Harbor AI chat"
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
}
