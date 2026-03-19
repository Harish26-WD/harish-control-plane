"use client"

import { useActionState, useEffect, useRef } from "react"
import { sendContactEmail, type ContactActionState } from "@/features/contact/actions"
import { CheckCircle2, AlertCircle, Loader2, Send, Sparkles } from "lucide-react"

const initialState: ContactActionState = { success: false, message: "" }

export function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) formRef.current?.reset()
  }, [state.success])

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/40 transition-all text-sm hover:border-[var(--primary)]/30 backdrop-blur-sm"

  return (
    <form ref={formRef} action={action} noValidate className="space-y-5">
      {/* Name */}
      <div className="group">
        <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
          Name <span className="text-[var(--pink)]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputClasses}
        />
        {state.errors?.name && (
          <p className="text-[var(--pink)] text-xs mt-1.5 flex items-center gap-1">
            <AlertCircle size={11} />
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
          Email <span className="text-[var(--pink)]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          className={inputClasses}
        />
        {state.errors?.email && (
          <p className="text-[var(--pink)] text-xs mt-1.5 flex items-center gap-1">
            <AlertCircle size={11} />
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
          Subject <span className="text-[var(--pink)]">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className={inputClasses}
        >
          <option value="">Select a subject</option>
          <option value="hiring">Hiring Inquiry</option>
          <option value="freelance">Freelance Project</option>
          <option value="collaboration">Collaboration</option>
          <option value="other">Other</option>
        </select>
        {state.errors?.subject && (
          <p className="text-[var(--pink)] text-xs mt-1.5 flex items-center gap-1">
            <AlertCircle size={11} />
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
          Message <span className="text-[var(--pink)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project or inquiry..."
          className={`${inputClasses} resize-none`}
        />
        {state.errors?.message && (
          <p className="text-[var(--pink)] text-xs mt-1.5 flex items-center gap-1">
            <AlertCircle size={11} />
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {/* Status message */}
      {state.message && (
        <div
          role="alert"
          className={`flex items-start gap-3 p-4 rounded-xl text-sm border ${
            state.success
              ? "bg-[var(--status-green)]/10 text-[var(--status-green)] border-[var(--status-green)]/20"
              : "bg-[var(--pink)]/10 text-[var(--pink)] border-[var(--pink)]/20"
          }`}
        >
          {state.success
            ? <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
            : <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />}
          {state.message}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full btn-primary justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        {isPending ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
            <Sparkles size={14} className="opacity-70" />
          </>
        )}
      </button>
    </form>
  )
}
