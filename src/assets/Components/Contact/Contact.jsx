import React, { useState, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
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

  const {name, email, subject, message} = formData;

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

      // Handle form submission with updated service details
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
      className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 md:p-12 min-h-screen pt-24"
    >
      {/* Contact Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to discuss a collaboration opportunity? 
          I'd love to hear from you!
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="md:col-span-1 space-y-6">
          {/* Email Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <FaEnvelope className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-300">Moosorkh@Gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* LinkedIn Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <FaLinkedin className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/irdmousa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
          
          {/* GitHub Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <FaGithub className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <a 
                  href="https://github.com/Moosorkh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  View my projects
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            {formStatus.submitted && formStatus.success ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormStatus({ submitted: false, success: false, message: "" })}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
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
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className={`w-full px-4 py-3 bg-gray-700 border ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className={`w-full px-4 py-3 bg-gray-700 border ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      errors.subject ? "border-red-500" : "border-gray-600"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject of your message"
                    value={subject}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-40`}
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-70"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                  <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                    {formStatus.message}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;