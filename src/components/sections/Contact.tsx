// Contact.tsx — updated with better input visibility and working status/error handling

"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SocialIcons from "@/components/ui/SocialIcons";

const projectTypes = [
  "Web Application",
  "SaaS Platform",
  "E-Commerce",
  "API Development",
  "Bug Fix / Support",
  "Other",
];

type FormState = {
  email: string;
  name: string;
  type: string;
  comment: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    email: "",
    name: "",
    type: "",
    comment: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
    if (feedback) setFeedback("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email.trim(),
          name: form.name.trim(),
          type: form.type.trim(),
          comment: form.comment.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setFeedback(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setFeedback("✓ Message sent! I'll get back to you within 24 hours.");
      setForm({ email: "", name: "", type: "", comment: "" });
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  const inputClass = `
    w-full bg-brand-surface border-2 border-brand-border rounded-[3px]
    text-brand-white text-sm px-4 py-3 outline-none
    placeholder:text-brand-gray
    focus:border-brand-green-light focus:bg-brand-surface2
    hover:border-brand-gray
    transition-all duration-200
  `;

  return (
    <section id="contact" className="section-padding bg-brand-bg dark:bg-brand-bg">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="md:col-span-3">
            <SectionLabel>Contacts</SectionLabel>
            <h2 className="font-akshar text-3xl md:text-4xl font-bold leading-snug mb-2">
              Have a project in mind?<br />Let&apos;s discuss it.
            </h2>
            <p className="text-sm text-brand-gray mb-8">
              Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] uppercase tracking-[0.1em] text-brand-gray">
                    Email or LinkedIn
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] uppercase tracking-[0.1em] text-brand-gray">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] uppercase tracking-[0.1em] text-brand-gray">
                  Project Type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className={inputClass + " cursor-pointer appearance-none"}
                >
                  <option value="">Select type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] uppercase tracking-[0.1em] text-brand-gray">Comment</label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className={inputClass + " resize-y min-h-[140px]"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brand-green-light text-white text-sm font-semibold uppercase tracking-widest py-3.5 rounded-[4px] hover:bg-brand-green transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1 hover:shadow-[0_0_20px_rgba(232,103,26,0.3)]"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {feedback ? (
                <p
                  className={`text-sm text-center ${
                    status === "sent" ? "text-brand-green-light" : "text-brand-red"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </div>

          <div className="md:col-span-2 pt-2">
            <p className="text-[0.7rem] uppercase tracking-[0.1em] text-brand-gray mb-6">
              You can also reach me on
            </p>
            <SocialIcons className="flex-col items-start gap-3" />

            <div className="mt-10 p-5 border border-brand-border rounded-[4px] bg-brand-surface">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-green-light animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-brand-green-light font-semibold">
                  Available for Work
                </span>
              </div>
              <p className="text-sm text-brand-gray-light">
                Currently accepting new projects and freelance opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
