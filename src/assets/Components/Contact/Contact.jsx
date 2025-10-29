import React, { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [animatedElements, setAnimatedElements] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, email, subject, message } = formData;

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Animation on page load
  useEffect(() => {
    // Initialize elements as not animated
    const elements = ['header', 'cards', 'form'];
    const initialState = {};

    elements.forEach((el) => initialState[el] = false);
    setAnimatedElements(initialState);

    // Trigger animations with staggered timing
    elements.forEach((el, index) => {
      setTimeout(() => {
        setAnimatedElements(prev => ({
          ...prev,
          [el]: true
        }));
      }, 300 + (index * 200)); // Stagger the animations
    });
  }, []);

  // Validation for email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Remove error message when user types in the field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  // Handle field blur (when user leaves the field)
  const handleBlur = (e) => {
    const { id, value } = e.target;

    // Check if the field is empty
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "This field is required.",
      }));
    }

    // Check if email field is valid
    if (id === "email" && value.trim() && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for required fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    // Validate email format
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // If there are errors, set them; otherwise, proceed with form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Set loading state
      setIsSubmitting(true);

      // Handle form submission
      emailjs.sendForm('service_jrv8j4r', 'template_k51y7id', form.current, 'r9kJS4CN9kj1xDzH1')
        .then(
          (result) => {
            console.log(result.text);
            setFormStatus({
              submitted: true,
              success: true,
              message: "Thank you! Your message has been sent successfully."
            });
            // Clear the form after submission
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.log(error.text);
            setFormStatus({
              submitted: true,
              success: false,
              message: "Oops! Something went wrong. Please try again later."
            });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-bg-primary to-bg-secondary text-text-primary min-h-screen transition-colors duration-300"
    >
      {/* Add extra padding at the top to prevent header overlap - increased from pt-24 to pt-32 */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-12">
        {/* Contact Header with animation */}
        <div
          className={`text-center mb-10 transition-all duration-700 transform ${animatedElements.header ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration opportunity?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards with animation */}
          <div
            className={`md:col-span-1 space-y-6 transition-all duration-700 transform ${animatedElements.cards ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            {/* Email Card */}
            <div className="card card-hover p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <FaEnvelope className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Email</h3>
                  <p className="text-text-secondary">Moosorkh@Gmail.com</p>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="card card-hover p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <FaLinkedin className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/irdmousa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="card card-hover p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <FaGithub className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">GitHub</h3>
                  <a
                    href="https://github.com/Moosorkh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    View my projects
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with animation */}
          <div
            className={`md:col-span-2 transition-all duration-700 transform ${animatedElements.form ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            <div className="card p-6 md:p-8">
              {formStatus.submitted && formStatus.success ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <FaPaperPlane className="text-text-inverse text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-text-primary">Message Sent!</h3>
                  <p className="text-text-secondary mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, success: false, message: "" })}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  ref={form}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-bold mb-6 text-text-primary">Send Me a Message</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field - Added min-h-[76px] to preserve space for error messages */}
                    <div className="min-h-[76px]">
                      <label
                        className="block text-sm font-medium mb-2 text-text-primary"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.name ? "border-error" : "border-border-primary"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary transition-colors duration-200`}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      <div className="h-5 mt-1">
                        {errors.name && (
                          <p className="text-error text-xs">{errors.name}</p>
                        )}
                      </div>
                    </div>

                    {/* Email Field - Added min-h-[76px] to preserve space for error messages */}
                    <div className="min-h-[76px]">
                      <label
                        className="block text-sm font-medium mb-2 text-text-primary"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.email ? "border-error" : "border-border-primary"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary transition-colors duration-200`}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      <div className="h-5 mt-1">
                        {errors.email && (
                          <p className="text-error text-xs">{errors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subject Field - Added min-h-[76px] to preserve space for error messages */}
                  <div className="min-h-[76px]">
                    <label
                      className="block text-sm font-medium mb-2 text-text-primary"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.subject ? "border-error" : "border-border-primary"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary transition-colors duration-200`}
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject of your message"
                      value={subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    <div className="h-5 mt-1">
                      {errors.subject && (
                        <p className="text-error text-xs">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message Field - Added min-h-[76px] to preserve space for error messages */}
                  <div className="min-h-[76px]">
                    <label
                      className="block text-sm font-medium mb-2 text-text-primary"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.message ? "border-error" : "border-border-primary"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary h-40 transition-colors duration-200`}
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    ></textarea>
                    <div className="h-5 mt-1">
                      {errors.message && (
                        <p className="text-error text-xs">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      className="w-full md:w-auto btn-primary flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text-inverse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <FaPaperPlane className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>

                  {formStatus.submitted && !formStatus.success && (
                    <div className="bg-error/20 border border-error text-error px-4 py-3 rounded-lg">
                      {formStatus.message}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;