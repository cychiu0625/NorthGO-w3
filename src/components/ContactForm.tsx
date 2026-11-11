"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") {
        const subject = encodeURIComponent(
          `Northgo enquiry — ${String(data.service ?? "")} — ${String(data.company ?? "")}`,
        );
        const body = encodeURIComponent(
          Object.entries(data)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n"),
        );
        window.location.href = `mailto:info.tpe@northgo.com?subject=${subject}&body=${body}`;
        setStatus("success");
        form.reset();
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="font-display text-2xl text-navy-900">{dict.contact.formTitle}</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label={dict.contact.name} name="name" required />
        <Field label={dict.contact.company} name="company" required />
        <Field label={dict.contact.email} name="email" type="email" required />
        <Field label={dict.contact.phone} name="phone" />
        <label className="block text-sm md:col-span-2">
          <span className="mb-1.5 block text-muted">{dict.contact.service}</span>
          <select
            name="service"
            required
            className="w-full rounded-xl border border-line bg-sand-50 px-3 py-2.5 outline-none focus:border-cyan-500"
            defaultValue=""
          >
            <option value="" disabled>
              —
            </option>
            {dict.contact.serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <Field label={dict.contact.origin} name="origin" />
        <Field label={dict.contact.destination} name="destination" />
        <label className="block text-sm md:col-span-2">
          <span className="mb-1.5 block text-muted">{dict.contact.cargo}</span>
          <textarea
            name="cargo"
            rows={3}
            className="w-full rounded-xl border border-line bg-sand-50 px-3 py-2.5 outline-none focus:border-cyan-500"
          />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1.5 block text-muted">{dict.contact.message}</span>
          <textarea
            name="message"
            rows={3}
            className="w-full rounded-xl border border-line bg-sand-50 px-3 py-2.5 outline-none focus:border-cyan-500"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary inline-flex rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-60"
      >
        {status === "sending" ? dict.contact.sending : dict.contact.submit}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald-700" role="status">
          {dict.contact.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {dict.contact.error}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-sand-50 px-3 py-2.5 outline-none focus:border-cyan-500"
      />
    </label>
  );
}
