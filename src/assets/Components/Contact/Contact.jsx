import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      // Handle form submission
      console.log("Form submitted successfully:", formData);
      // Clear the form after submission (optional)
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-600 to-blue-800 text-white p-10 md:p-12 min-h-screen"
    >
      {/* Contact Information */}
      <div className="text-center mb-2">
        <h1 className="text-2xl md:text-6xl font-bold mb-1">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal mb-10">
          Feel Free To reach out!
        </h3>
        <div className="flex justify-center space-x-8 mb-1">
          <div className="text-center transition-transform duration-300 hover:scale-105">
            <FaEnvelope size={40} />
            <p className="mt-2">myemail@gmail.com</p>
          </div>
          <div className="text-center transition-transform duration-300 hover:scale-105">
            <FaPhoneAlt size={40} />
            <p className="mt-2">+123 456 789</p>
          </div>
          <div className="text-center transition-transform duration-300 hover:scale-105">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <p className="mt-2">LinkedIn</p>
          </div>
          <div className="text-center transition-transform duration-300 hover:scale-105">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
            <p className="mt-2">GitHub</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <form
        className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                errors.name ? "border-red-500" : ""
              }`}
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                errors.subject ? "border-red-500" : ""
              }`}
              id="subject"
              type="text"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs italic">{errors.subject}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                errors.message ? "border-red-500" : ""
              }`}
              id="message"
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs italic">{errors.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            className="shadow bg-teal-400 hover:bg-teal-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-105"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
