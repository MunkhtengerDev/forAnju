"use client";

import { useState } from "react";
import TypingEffect from "react-typing-effect";


export default function Home() {
  const [showHearts, setShowHearts] = useState(false);

  const handleButtonClick = () => {
    setShowHearts(true);
    setTimeout(() => {
      setShowHearts(false);
    }, 4000); 
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
      <TypingEffect
        text={[
          "Hey there, beautiful...",
          "I've made this only for you<3",
          "Will you have coffee with me?",
          "Tell me whenever you're ready, and I'll be there for you",
        ]}
        speed={100}
        eraseSpeed={50}
        typingDelay={500}
        className="text-4xl font-semibold text-white mb-8"
      />

     

      <button
        onClick={handleButtonClick}
        className="mt-6 px-6 py-3 bg-[#D95F59] text-[#522258] font-bold text-xl rounded-full shadow-lg hover:bg-[#522258] hover:text-[#D95F59] transition-all duration-300"
      >
        For You, Anju 
      </button>

      {showHearts && (
        <div className="absolute inset-0 flex justify-center items-center">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-red-400 text-4xl animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) scale(1.5);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
