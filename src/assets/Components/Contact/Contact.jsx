/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { scrollToSection } from "../../../utils/scroll";
import "./Contact.css";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = ({
  isWindowSheetOpen = false,
  isWindowSheetRestoring = false,
  onWindowSheetRestore,
}) => {
  const sectionRef = useRef(null);
  const restoreButtonRef = useRef(null);
  const form = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isWindowSheetOpen) return undefined;

    setIsVisible(true);
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !isWindowSheetRestoring) onWindowSheetRestore?.();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    const focusTimer = window.setTimeout(() => restoreButtonRef.current?.focus(), 780);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isWindowSheetOpen, isWindowSheetRestoring, onWindowSheetRestore]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = ({ target: { id, value } }) => {
    setFormData((current) => ({ ...current, [id]: value }));
    setErrors((current) => ({ ...current, [id]: "" }));
  };

  const handleBlur = ({ target: { id, value } }) => {
    const error = !value.trim()
      ? "This field is required."
      : id === "email" && !validateEmail(value)
        ? "Please enter a valid email address."
        : "";

    setErrors((current) => ({ ...current, [id]: error }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = Object.fromEntries(
      Object.entries(formData).map(([field, value]) => [
        field,
        value.trim() ? "" : "This field is required.",
      ])
    );

    if (formData.email && !validateEmail(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_jrv8j4r",
        "template_k51y7id",
        form.current,
        "r9kJS4CN9kj1xDzH1"
      )
      .then(
        () => {
          setFormStatus({
            submitted: true,
            success: true,
            message: "Thank you. Your message has been sent.",
          });
          setFormData(initialFormData);
          setErrors(initialFormData);
        },
        () => {
          setFormStatus({
            submitted: true,
            success: false,
            message: "Something went wrong. Please try again later.",
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div
      ref={sectionRef}
      id="contact"
      className={`contact-cta-track${isWindowSheetOpen ? " contact-cta-track--window-sheet" : ""}${isWindowSheetRestoring ? " contact-cta-track--restoring" : ""}`}
      data-lenis-prevent={isWindowSheetOpen ? "true" : undefined}
    >
      {isWindowSheetOpen && (
        <>
          <div className="contact-cta__window-surface" aria-hidden="true">
            <div className="contact-cta__window-toolbar">
              <span className="contact-cta__window-controls">
                <i />
                <i />
                <i />
              </span>
              <span className="contact-cta__window-title">mehdi-azar - portfolio</span>
              <span className="contact-cta__window-actions">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="contact-cta__window-tabs">
              <span className="contact-cta__window-tab contact-cta__window-tab--active">about.tsx</span>
              <span className="contact-cta__window-tab">skills.tsx</span>
              <span className="contact-cta__window-tab">projects.tsx</span>
              <span className="contact-cta__window-tab">contact.tsx</span>
            </div>
            <span className="contact-cta__window-preview">
              <i />
              <i />
              <i />
            </span>
          </div>
          <button
            ref={restoreButtonRef}
            type="button"
            className="contact-cta__restore-tile"
            onClick={onWindowSheetRestore}
            aria-label="Restore portfolio window"
            disabled={isWindowSheetRestoring}
          >
            <span className="contact-cta__restore-window" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Portfolio</span>
          </button>
        </>
      )}
      <section
        className={`contact-cta ${isVisible ? "contact-cta--visible" : ""}`}
        aria-labelledby="contact-cta-title"
        aria-modal={isWindowSheetOpen ? "true" : undefined}
        role={isWindowSheetOpen ? "dialog" : "region"}
      >
        <div className="contact-cta__grid">
          <div className="contact-cta__intro">
            <p className="contact-cta__eyebrow">Let&apos;s build work that matters.</p>
            <h2 id="contact-cta-title">
              Ready to build
              <span>something bold?</span>
            </h2>
            <p className="contact-cta__availability">
              Available for select freelance and collaborative projects.
            </p>

            <div className="contact-cta__meta">
              <div>
                <p>Business enquiry</p>
                <a href="mailto:Moosorkh@gmail.com">Moosorkh@gmail.com</a>
              </div>
              <div>
                <p>Elsewhere</p>
                <div className="contact-cta__socials">
                  <a href="https://www.linkedin.com/in/irdmousa/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/Moosorkh" target="_blank" rel="noreferrer">GitHub</a>
                  <button type="button" onClick={() => scrollToSection("portfolio")}>Selected work</button>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta__form-column">
            <div className="contact-cta__form-heading">
              <span>Start a collaboration</span>
              <FaArrowRight aria-hidden="true" />
            </div>

            {formStatus.success ? (
              <div className="contact-cta__success" role="status">
                <FaPaperPlane aria-hidden="true" />
                <h3>Message sent.</h3>
                <p>{formStatus.message}</p>
                <button
                  type="button"
                  onClick={() => setFormStatus({ submitted: false, success: false, message: "" })}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={form} className="contact-cta__form" onSubmit={handleSubmit} noValidate>
                <div className="contact-cta__field-row">
                  <ContactField
                    id="name"
                    label="Name"
                    placeholder="Your name"
                    value={formData.name}
                    error={errors.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <ContactField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    error={errors.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>

                <ContactField
                  id="subject"
                  label="Subject"
                  placeholder="What are we building?"
                  value={formData.subject}
                  error={errors.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />

                <div className="contact-cta__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the idea, timeline, and goals."
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.message)}
                  />
                  <span className="contact-cta__error">{errors.message}</span>
                </div>

                <div className="contact-cta__form-footer">
                  <button className="contact-cta__submit" type="submit" disabled={isSubmitting}>
                    <span>{isSubmitting ? "Sending" : "Send message"}</span>
                    <FaPaperPlane aria-hidden="true" />
                  </button>
                  <a
                    className="contact-cta__resume"
                    href="/Mehdi_Azar_Technical_Resume.pdf"
                    download="Mehdi_Azar_Technical_Resume.pdf"
                  >
                    <span>Download resume</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>

                {formStatus.submitted && !formStatus.success && (
                  <p className="contact-cta__submit-error" role="alert">{formStatus.message}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactField = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}) => (
  <div className="contact-cta__field">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      aria-invalid={Boolean(error)}
    />
    <span className="contact-cta__error">{error}</span>
  </div>
);

export default Contact;
