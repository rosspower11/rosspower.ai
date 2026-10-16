"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight } from "@rosspower/ui/components/Icon";
import { cn } from "@rosspower/ui/lib/cn";
import { contactPage, enquiryTypes, limits } from "@/content/contact";
import { contact } from "@/content/nav";

type Status = "idle" | "sending" | "sent" | "error";

const control =
  "w-full rounded-lg border border-ink/15 bg-cream px-4 text-[16px] text-ink transition-colors placeholder:text-ink/40 hover:border-ink/30 focus:border-ink focus:outline-none";

function Field({ label, optional, children }: { label: string; optional?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="type-label tracking-[0.12em] text-ink/70 uppercase">
        {label}
        {optional ? <span className="text-ink/40 normal-case tracking-normal"> (optional)</span> : null}
      </span>
      {children}
    </label>
  );
}

/** The booking enquiry form. Posts to /api/contact, which emails Mary. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "We couldn't send your enquiry just now.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your enquiry just now.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-4 rounded-panel bg-card p-7 tablet:p-10">
        <h2 className="type-h3">{contactPage.thanks.title}</h2>
        <p className="type-p-lg text-ink/80">{contactPage.thanks.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 rounded-panel bg-card p-6 tablet:p-10">
      <div className="grid gap-5 tablet:grid-cols-2">
        <Field label="Name">
          <input name="name" required autoComplete="name" maxLength={limits.short} className={cn(control, "min-h-12")} />
        </Field>
        <Field label="Email">
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={limits.short}
            className={cn(control, "min-h-12")}
          />
        </Field>
        <Field label="Organisation">
          <input
            name="organisation"
            required
            autoComplete="organization"
            maxLength={limits.short}
            className={cn(control, "min-h-12")}
          />
        </Field>
        <Field label="Enquiry">
          <select name="type" required defaultValue="" className={cn(control, "min-h-12 appearance-none bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10")} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23101317' stroke-width='1.5'/%3E%3C/svg%3E\")" }}>
            <option value="" disabled>
              Choose one
            </option>
            {enquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Event date" optional>
          <input name="date" placeholder="e.g. March 2027" maxLength={limits.short} className={cn(control, "min-h-12")} />
        </Field>
        <Field label="Location" optional>
          <input name="location" placeholder="City, or online" maxLength={limits.short} className={cn(control, "min-h-12")} />
        </Field>
        <Field label="Audience size" optional>
          <input name="audience" placeholder="e.g. 200 people" maxLength={limits.short} className={cn(control, "min-h-12")} />
        </Field>
      </div>
      <Field label="Tell us about your event">
        <textarea
          name="message"
          required
          rows={6}
          maxLength={limits.message}
          placeholder="Who is in the room, and what should they leave with?"
          className={cn(control, "resize-y py-3")}
        />
      </Field>

      {/* Hidden from people; bots fill it in and get dropped. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      {status === "error" ? (
        <p role="alert" className="type-p-sm text-ink">
          {error} Please try again, or email{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold underline underline-offset-4">
            {contact.email}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center gap-2.5 self-start rounded-lg border border-ink bg-ink px-6 py-3.5 text-[14px] font-semibold tracking-[0.08em] text-cream uppercase transition-colors hover:bg-ink/85 disabled:opacity-60 max-tablet:w-full"
      >
        {status === "sending" ? "Sending" : "Send enquiry"}
        <ArrowUpRight />
      </button>
    </form>
  );
}
