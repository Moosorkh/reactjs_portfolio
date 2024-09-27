import React from "react";
import AboutImg from "../../7358653-removebg-preview.png"; // Your About image
import avatar from "../../7358602-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import TextChange from "../TextChange";

const About = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <div
      id="About"
      className="text-white flex flex-col items-center bg-opacity-30 rounded-lg p-12 bg-black shadow-xl"
    >
      {/* First Section from Home Component */}
      <div className="md:flex w-full justify-between items-center p-10 md:p-20">
        <div className="md:w-2/4">
          <p className=" md:text-xl font-bold leading-normal tracking-tighter">
            <TextChange />
          </p>
          <p className="text-sm md:text-2xl tracking-tight mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            dolore. Aspernatur, sequi molestias, velit quo reprehenderit
            debitis.
          </p>
          <button
            className="mt-5 md:mt-10 text-white py-2 px-3 bg-[#465697] text-sm md:text-lg rounded-3xl hover:scale-105 transition-transform"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>
        <div>
          <img className="w-2/5" src={avatar} alt="Avatar" />
        </div>
      </div>

      {/* Second Section from About Component */}
      <div className="md:flex overflow-hidden items-center md:flex-wrap md:justify-center mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 bg-black shadow-xl">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
          <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <img className="md:h-80" src={AboutImg} alt="About img" />
            <ul>
              {/* Frontend Developer */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Frontend developer
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores explicabo deserunt asperiores quasi, vitae
                    blanditiis perferendis quos consectetur ea harum!
                  </p>
                </span>
              </div>

              {/* Database Developer */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Database developer
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores explicabo deserunt asperiores quasi, vitae
                    blanditiis perferendis quos consectetur ea harum!
                  </p>
                </span>
              </div>

              {/* Backend Developer */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Backend developer
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores explicabo deserunt asperiores quasi, vitae
                    blanditiis perferendis quos consectetur ea harum!
                  </p>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
