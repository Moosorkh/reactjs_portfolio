import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [animatedElements, setAnimatedElements] = useState({});
  
  // Countdown timer for automatic redirect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/");
    }
  }, [countdown, navigate]);
  
  // Animation for sequential element reveals
  useEffect(() => {
    const elements = ['header', 'message', 'number', 'buttons', 'countdown'];
    const initialState = {};
    
    elements.forEach((el, index) => {
      initialState[el] = false;
      setTimeout(() => {
        setAnimatedElements(prev => ({
          ...prev,
          [el]: true
        }));
      }, 200 + (index * 150));
    });
    
    setAnimatedElements(initialState);
  }, []);
  
  // Function to generate the 404 glitch effect
  const generateGlitchLayers = () => {
    return Array(3).fill().map((_, i) => (
      <div 
        key={i} 
        className={`absolute inset-0 text-[20rem] leading-none font-bold opacity-80 flex justify-center select-none
                   ${i === 0 ? 'text-red-500 animate-glitch-1' : 
                     i === 1 ? 'text-blue-500 animate-glitch-2' : 
                              'text-green-500 animate-glitch-3'}`}
        style={{ fontFamily: 'monospace' }}
      >
        404
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6 pt-24 overflow-hidden">
      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="relative overflow-hidden">
          {/* Header */}
          <div 
            className={`text-center mb-2 transition-all duration-700 ease-out ${
              animatedElements.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <FaExclamationTriangle className="text-yellow-500 text-3xl mr-3" />
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                Page Not Found
              </h1>
            </div>
          </div>
          
          {/* Message */}
          <div 
            className={`text-center mb-10 max-w-xl mx-auto transition-all duration-700 ease-out ${
              animatedElements.message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-300 text-lg mb-2">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-gray-400">
              You'll be automatically redirected to the homepage in {countdown} seconds...
            </p>
          </div>
          
          {/* 404 Number with Glitch Effect */}
          <div 
            className={`relative h-48 md:h-64 flex justify-center items-center mb-10 overflow-hidden transition-all duration-700 ease-out ${
              animatedElements.number ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {/* Base 404 */}
            <div className="relative z-10 text-8xl md:text-9xl font-bold text-white">
              404
            </div>
            
            {/* Glitch effect layers */}
            {generateGlitchLayers()}
            
            {/* Light rays effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
          </div>
          
          {/* Action Buttons */}
          <div 
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 transition-all duration-700 ease-out ${
              animatedElements.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg w-full sm:w-auto"
            >
              <FaHome className="text-lg" />
              Return Home
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-800 text-white font-medium rounded-full border border-gray-700 hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out w-full sm:w-auto"
            >
              <FaArrowLeft className="text-lg" />
              Go Back
            </button>
          </div>
          
          {/* Progress Bar */}
          <div 
            className={`transition-all duration-700 ease-out ${
              animatedElements.countdown ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full max-w-md mx-auto h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating shapes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Random floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-600/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-yellow-600/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      {/* Add these animations to your global CSS or in a style tag in this component */}
      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(5px, 0); }
          50% { transform: translate(-5px, 0); }
          75% { transform: translate(0, 5px); }
        }
        
        @keyframes glitch-3 {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(0, 5px); }
          50% { transform: translate(5px, 0); }
          75% { transform: translate(0, -5px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(20px) translateX(10px); }
          50% { transform: translateY(0) translateX(-20px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-15px) translateX(15px); }
          66% { transform: translateY(15px) translateX(-15px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(15px) translateX(-15px); }
          66% { transform: translateY(-15px) translateX(15px); }
        }
        
        .animate-glitch-1 {
          animation: glitch-1 3s infinite linear alternate-reverse;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 2.5s infinite linear alternate-reverse;
        }
        
        .animate-glitch-3 {
          animation: glitch-3 2s infinite linear alternate-reverse;
        }
        
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        
        .animate-float-delayed {
          animation: float-delayed 18s infinite ease-in-out;
        }
        
        .animate-float-slow {
          animation: float-slow 20s infinite ease-in-out;
        }
        
        .animate-float-reverse {
          animation: float-reverse 17s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default NotFound;