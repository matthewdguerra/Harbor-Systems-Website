"use client";

import BrandLogo from "@/components/BrandLogo";
import { MessageCircle, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const welcome = {
  role: "assistant",
  content:
    "Hi, I'm Harbor AI. I can help you think through automation, dashboards, operational audits, and AI assistants for churches, nonprofits, and schools. What are you working on?"
};

const suggestions = [
  "What services does Harbor Systems provide?",
  "How would an operational audit work?",
  "Can AI help a church without replacing staff?"
];

export default function Chatbot({ embedded = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(embedded);
  const [messages, setMessages] = useState([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  const hideLauncher = !embedded && pathname === "/demo";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

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
      setError("The assistant is temporarily unavailable. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  const panel = (
    <div
      className={
        embedded
          ? "h-[min(620px,78vh)] w-full"
          : "fixed bottom-20 right-4 z-50 h-[min(560px,72vh)] w-[min(100vw-2rem,400px)] sm:bottom-24 sm:right-5"
      }
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-navy/10 bg-white shadow-premium">
        <div className="flex items-center justify-between border-b border-navy/10 bg-navy px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <BrandLogo size="chat" alt="" />
            <div>
              <p className="text-sm font-bold">Harbor AI</p>
              <p className="text-xs text-white/60">Responsible AI assistant</p>
            </div>
          </div>
          {!embedded && (
            <button
              type="button"
              className="focus-ring rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-offwhite p-4">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-soft ${
                  message.role === "user"
                    ? "rounded-br-md bg-navy text-white"
                    : "rounded-bl-md border border-navy/10 bg-white text-ink"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-3xl rounded-bl-md border border-navy/10 bg-white px-4 py-3 text-sm text-muted shadow-soft">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          )}
          {error && (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
        </div>

        <div className="border-t border-navy/10 bg-white p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => sendMessage(item)}
                disabled={loading}
                className="focus-ring rounded-full border border-navy/10 px-3 py-1.5 text-xs font-semibold text-navy/70 transition hover:border-gold/70 hover:text-navy disabled:opacity-50"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendMessage();
              }}
              placeholder="Ask anything..."
              disabled={loading}
              aria-label="Chat message"
              className="focus-ring min-w-0 flex-1 rounded-2xl border border-navy/10 bg-offwhite px-4 py-3 text-sm text-ink disabled:opacity-60"
            />
            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="focus-ring inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-navy transition hover:bg-navy hover:text-white disabled:opacity-60"
              aria-label="Send message"
            >
              <Send size={18} />
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
        className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-premium transition hover:-translate-y-1 hover:bg-white sm:bottom-6 sm:right-6"
        aria-label="Open Harbor AI chat"
      >
        <MessageCircle size={26} />
      </button>
    </>
  );
}
