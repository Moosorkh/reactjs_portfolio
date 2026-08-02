import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      if (!value.trim()) nextErrors[field] = "This field is required.";
    });
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });
    try {
      await emailjs.sendForm("service_jrv8j4r", "template_k51y7id", form.current, "r9kJS4CN9kj1xDzH1");
      setFormData(initialForm);
      setStatus({ type: "success", message: "Thank you — your message has been sent." });
    } catch {
      setStatus({ type: "error", message: "The message could not be sent. Please email me directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell">
      <div className="noise" />
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 pb-24 pt-28 sm:px-8">
        <header className="border-b border-[var(--line)] pb-12">
          <p className="mono mb-6 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">04 / Contact</p>
          <h1 className="editor-hero max-w-[10ch]">Let’s make something useful.</h1>
        </header>
        <section className="section grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside>
            <p className="max-w-md text-lg leading-8 text-[var(--muted)]">
              For product roles, consulting, or a thoughtful collaboration, send a note. I usually reply within two business days.
            </p>
            <div className="mono mt-10 grid gap-5 border-t border-[var(--line)] pt-6 text-[11px] uppercase tracking-[0.12em]">
              <a href="mailto:Moosorkh@gmail.com" className="flex justify-between border-b border-[var(--line)] pb-4"><span className="text-[var(--muted)]">Email</span><span>Email me</span></a>
              <a href="https://www.linkedin.com/in/irdmousa/" target="_blank" rel="noreferrer" className="flex justify-between border-b border-[var(--line)] pb-4"><span className="text-[var(--muted)]">LinkedIn</span><span>Connect ↗</span></a>
              <a href="https://github.com/Moosorkh" target="_blank" rel="noreferrer" className="flex justify-between border-b border-[var(--line)] pb-4"><span className="text-[var(--muted)]">GitHub</span><span>View work ↗</span></a>
            </div>
          </aside>
          <form ref={form} onSubmit={handleSubmit} className="surface p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" value={formData.name} error={errors.name} onChange={handleChange} />
              <Field label="Email" name="email" type="email" value={formData.email} error={errors.email} onChange={handleChange} />
            </div>
            <div className="mt-6"><Field label="Subject" name="subject" value={formData.subject} error={errors.subject} onChange={handleChange} /></div>
            <div className="mt-6">
              <label className="mono mb-2 block text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="7" value={formData.message} onChange={handleChange} className="w-full resize-y border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]" />
              <p className="mt-2 min-h-4 text-xs text-[var(--accent)]">{errors.message}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <button type="submit" disabled={isSubmitting} className="mono border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-[11px] uppercase tracking-[0.14em] text-[#0a0908] transition hover:bg-transparent hover:text-[var(--text)] disabled:opacity-60">
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
              {status.message && <p className={`text-sm ${status.type === "error" ? "text-[var(--accent)]" : "text-[var(--muted)]"}`} role="status">{status.message}</p>}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

const Field = ({ label, name, type = "text", value, error, onChange }) => (
  <div>
    <label className="mono mb-2 block text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]" htmlFor={name}>{label}</label>
    <input id={name} name={name} type={type} value={value} onChange={onChange} className="w-full border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]" />
    <p className="mt-2 min-h-4 text-xs text-[var(--accent)]">{error}</p>
  </div>
);

export default Contact;
