import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center bg-[#465697] text-white p-10 md:p-12 min-h-screen"
    >
      {/* Contact Information */}
      <div className="text-center mb-12">
        {" "}
        {/* Increased margin-bottom */}
        <h1 className="text-2xl md:text-6xl font-bold mb-6">Contact</h1>{" "}
        {/* Added margin-bottom */}
        <h3 className="text-sm md:text-2xl font-normal mb-10">
          Feel Free To reach out!
        </h3>{" "}
        {/* Added margin-bottom */}
        <div className="flex justify-center space-x-8 mb-8">
          {" "}
          {/* Increased space between icons */}
          <div className="text-center">
            <FaEnvelope size={40} />
            <p className="mt-2">myemail@gmail.com</p>
          </div>
          <div className="text-center">
            <FaPhoneAlt size={40} />
            <p className="mt-2">+123 456 789</p>
          </div>
          <div className="text-center">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <p className="mt-2">LinkedIn</p>
          </div>
          <div className="text-center">
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
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="subject"
              type="text"
              placeholder="Enter subject"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="shadow bg-teal-400 hover:bg-teal-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
