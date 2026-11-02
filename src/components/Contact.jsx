import { useState } from "react";
import { AlertCircle, CheckCircle2, Info, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data/profile";
import { Section, Reveal } from "./Section";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import { cn } from "../lib/utils";

const empty = { name: "", email: "", subject: "", message: "" };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Please add a short subject.";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (err) =>
  cn(
    "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-slate-500 transition-colors focus:border-violet-400/60 focus:outline-none",
    err ? "border-rose-400/50" : "border-white/10"
  );

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  // idle | sending | sent | mailto | failed
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (profile.contactFormEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(profile.contactFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        setValues(empty);
      } catch {
        setStatus("failed");
      }
      return;
    }

    // No backend configured: open the visitor's email app with the message pre-filled.
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Meaningful.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-6">
          <p className="max-w-md text-base leading-relaxed text-slate-300">
            I'm open to software development internships, entry-level engineering opportunities, AI/ML projects, and
            technical collaborations where I can learn and contribute.
          </p>
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${profile.email}`} className="glass glass-hover flex items-center gap-4 p-4">
                <Mail size={18} className="text-violet-300" />
                <span className="min-w-0 break-all text-sm">{profile.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="glass glass-hover flex items-center gap-4 p-4">
                <Phone size={18} className="text-violet-300" />
                <span className="text-sm">{profile.phone}</span>
              </a>
            </li>
            <li className="glass flex items-center gap-4 p-4">
              <MapPin size={18} className="text-violet-300" />
              <span className="text-sm">{profile.location}</span>
            </li>
          </ul>
          <SocialLinks />
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 p-6 sm:p-8" aria-describedby="form-status">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputCls(errors.name)} placeholder="Your name" />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputCls(errors.email)} placeholder="you@example.com" />
              </Field>
            </div>
            <Field id="subject" label="Subject" error={errors.subject}>
              <input id="subject" name="subject" value={values.subject} onChange={onChange}
                aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined}
                className={inputCls(errors.subject)} placeholder="Internship opportunity" />
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
                className={cn(inputCls(errors.message), "resize-y")} placeholder="Tell me about the opportunity…" />
            </Field>

            <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
              {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {status === "sending" ? "Sending…" : profile.contactFormEndpoint ? "Send Message" : "Open in Email App"}
            </Button>

            <div id="form-status" role="status" aria-live="polite">
              {status === "sent" && (
                <p className="flex items-start gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.08] p-3 text-sm text-emerald-100">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> Message sent. Thank you — I'll reply as soon as I can.
                </p>
              )}
              {status === "mailto" && (
                <p className="flex items-start gap-2 rounded-xl border border-blue-400/25 bg-blue-400/[0.08] p-3 text-sm text-blue-100">
                  <Info size={16} className="mt-0.5 shrink-0" /> Your email app should now be open with the message
                  pre-filled. Nothing is sent until you press Send there. If nothing opened, email me directly at {profile.email}.
                </p>
              )}
              {status === "failed" && (
                <p className="flex items-start gap-2 rounded-xl border border-rose-400/25 bg-rose-400/[0.08] p-3 text-sm text-rose-100">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" /> The message could not be sent. Please try again or
                  email {profile.email} directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
