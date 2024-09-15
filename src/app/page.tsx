"use client";

import Image from "next/image";
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
    <div className="relative flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
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

      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <Image
          src="/png-transparent-cat-kitten-cartoon-adorable-artwork-kawaii-kitty-fluffy-happy-paw-removebg-preview.png" // Path to your cat image
          alt="Cat Animation"
          width={150} // Set the width of the image
          height={150} // Set the height of the image
          className="w-32 h-32 transform transition-transform duration-1000 ease-in-out animate-bounce"
        />
      </div>

      <style jsx>{`
        @keyframes catDance {
          0% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(15deg);
          }
          100% {
            transform: translateY(0) rotate(-15deg);
          }
        }

        .cat-animation {
          animation: catDance 3s ease-in-out infinite;
        }

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
