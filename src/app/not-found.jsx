"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaMoon, FaStar } from 'react-icons/fa';
import { GiGoat, GiCamel, GiCow, GiBatteredAxe, GiKnifeFork } from 'react-icons/gi';

const NotFound = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(50); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50%       { transform: translateY(-18px) rotate(-15deg); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0px) rotate(10deg); }
          50%       { transform: translateY(-14px) rotate(10deg); }
        }
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px) rotate(5deg); }
          50%       { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes pulse404 {
          0%, 100% { text-shadow: 0 0 40px rgba(200,160,58,0.15); }
          50%       { text-shadow: 0 0 80px rgba(200,160,58,0.35); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.3); }
        }
        @keyframes moonGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(200,160,58,0.3)); }
          50%       { filter: drop-shadow(0 0 20px rgba(200,160,58,0.7)); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(200,160,58,0.25); }
          50%       { box-shadow: 0 4px 40px rgba(200,160,58,0.55); }
        }
        @keyframes grassWave {
          0%, 100% { opacity: 0.4; transform: scaleX(1); }
          50%       { opacity: 0.7; transform: scaleX(1.05); }
        }

        .anim-fade-in-down  { animation: fadeInDown 0.7s ease both; }
        .anim-fade-in-up    { animation: fadeInUp 0.7s ease both; }
        .anim-fade-in       { animation: fadeIn 0.8s ease both; }
        .anim-scale-in      { animation: scaleIn 0.6s cubic-bezier(.34,1.56,.64,1) both; }
        .anim-slide-left    { animation: slideInLeft 0.6s ease both; }
        .anim-slide-right   { animation: slideInRight 0.6s ease both; }

        .float-cow     { animation: floatSlow 4s ease-in-out infinite; }
        .float-goat    { animation: floatRight 3.5s ease-in-out infinite; }
        .float-camel   { animation: floatLeft 5s ease-in-out infinite; }
        .float-generic { animation: float 4.5s ease-in-out infinite; }

        .twinkle-1 { animation: twinkle 2s ease-in-out infinite; }
        .twinkle-2 { animation: twinkle 2.7s ease-in-out infinite 0.4s; }
        .twinkle-3 { animation: twinkle 1.8s ease-in-out infinite 0.8s; }
        .twinkle-4 { animation: twinkle 3.2s ease-in-out infinite 0.2s; }
        .twinkle-5 { animation: twinkle 2.4s ease-in-out infinite 1s; }
        .twinkle-6 { animation: twinkle 2.1s ease-in-out infinite 0.6s; }

        .moon-glow  { animation: moonGlow 3s ease-in-out infinite; }
        .pulse-404  { animation: pulse404 3s ease-in-out infinite; }
        .btn-pulse  { animation: btnPulse 2.5s ease-in-out infinite; }
        .grass-wave { animation: grassWave 4s ease-in-out infinite; }

        .delay-100  { animation-delay: 0.1s; }
        .delay-200  { animation-delay: 0.2s; }
        .delay-300  { animation-delay: 0.3s; }
        .delay-400  { animation-delay: 0.4s; }
        .delay-500  { animation-delay: 0.5s; }
        .delay-600  { animation-delay: 0.6s; }
        .delay-700  { animation-delay: 0.7s; }
        .delay-800  { animation-delay: 0.8s; }
        .delay-900  { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>

      <div className="min-h-screen bg-[#0d2818] flex flex-col items-center justify-center px-4 relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <GiCow         className="float-cow     absolute text-[#1a3c2e] text-[80px]  sm:text-[120px] top-[5%]     left-[2%]   opacity-60" />
          <GiGoat        className="float-goat    absolute text-[#1a3c2e] text-[60px]  sm:text-[100px] top-[10%]    right-[4%]  opacity-60" />
          <GiCamel       className="float-camel   absolute text-[#1a3c2e] text-[70px]  sm:text-[110px] bottom-[12%] left-[3%]   opacity-60" />
          <GiGoat        className="float-goat    absolute text-[#1a3c2e] text-[50px]  sm:text-[80px]  bottom-[8%]  right-[5%]  opacity-60" />
          <GiCow         className="float-generic absolute text-[#1a3c2e] text-[40px]  sm:text-[70px]  top-[40%]    left-[1%]   opacity-40" />
          <GiCamel       className="float-camel   absolute text-[#1a3c2e] text-[40px]  sm:text-[65px]  top-[35%]    right-[2%]  opacity-40" />
          <GiKnifeFork      className="float-generic absolute text-[#1a3c2e] text-[30px]  sm:text-[50px]  top-[20%]    left-[20%]  rotate-[45deg]  opacity-30" />
          <GiBatteredAxe className="float-generic absolute text-[#1a3c2e] text-[30px]  sm:text-[50px]  top-[20%]    right-[20%] rotate-[-30deg] opacity-30" />
          <FaStar className="twinkle-1 absolute text-[#c8a03a] text-[10px] top-[15%]    left-[35%]  opacity-40" />
          <FaStar className="twinkle-2 absolute text-[#c8a03a] text-[8px]  top-[25%]    left-[60%]  opacity-30" />
          <FaStar className="twinkle-3 absolute text-[#c8a03a] text-[12px] top-[8%]     left-[50%]  opacity-50" />
          <FaStar className="twinkle-4 absolute text-[#c8a03a] text-[6px]  top-[30%]    right-[30%] opacity-30" />
          <FaStar className="twinkle-5 absolute text-[#c8a03a] text-[10px] bottom-[30%] left-[40%]  opacity-30" />
          <FaStar className="twinkle-6 absolute text-[#c8a03a] text-[8px]  bottom-[20%] right-[35%] opacity-40" />
        </div>

        <div className="moon-glow anim-fade-in delay-200 absolute top-4 sm:top-8 right-6 sm:right-16 flex items-center gap-1">
          <FaStar className="twinkle-1 text-[#c8a03a] text-[10px] sm:text-[13px] mb-3 opacity-80" />
          <FaMoon className="text-[#c8a03a] text-[40px] sm:text-[56px] md:text-[68px] opacity-90" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">

          <div className="flex items-end justify-center gap-3 sm:gap-5 mb-4 sm:mb-6">
            <GiCamel className="anim-slide-left  delay-200 text-[#c8a03a] text-[36px] sm:text-[48px] md:text-[56px] opacity-90" />
            <GiCow   className="anim-scale-in    delay-300 text-[#c8a03a] text-[44px] sm:text-[60px] md:text-[72px]" />
            <GiGoat  className="anim-slide-right delay-200 text-[#c8a03a] text-[36px] sm:text-[48px] md:text-[56px] opacity-90" />
          </div>

          <h1
            className="pulse-404 anim-scale-in delay-400 font-bold leading-none text-[80px] sm:text-[110px] md:text-[130px] lg:text-[150px]"
            style={{ color: '#c8a03a', fontFamily: "'Georgia', serif" }}
          >
            404
          </h1>

          <div className="anim-fade-in delay-500 flex items-center gap-3 sm:gap-4 my-3 sm:my-4 w-full">
            <div className="flex-1 h-px bg-[#2d5c43]" />
            <GiKnifeFork       className="text-[#c8a03a] text-lg sm:text-xl rotate-[-45deg]" />
            <GiBatteredAxe className="text-[#c8a03a] text-lg sm:text-xl rotate-[45deg]" />
            <GiKnifeFork   className="text-[#c8a03a] text-lg sm:text-xl rotate-[135deg]" />
            <div className="flex-1 h-px bg-[#2d5c43]" />
          </div>

          <h2
            className="anim-fade-in-up delay-600 font-bold text-[#f5e6c0] mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Page Not Found
          </h2>

          <p className="anim-fade-in-up delay-700 text-[#8fbc9a] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-2">
            This page has gone missing like a goat before Eid. Let us guide you back home.
          </p>

          <p className="anim-fade-in delay-800 text-[#c8a03a] text-xs sm:text-sm tracking-widest uppercase font-medium mb-6 sm:mb-8 opacity-70">
            Qurbani Season · Eid Al-Adha
          </p>

          <Link
            href="/"
            className="btn-pulse anim-scale-in delay-900 flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: '#c8a03a', color: '#0d2818' }}
          >
            <FaHome className="text-base sm:text-lg" />
            Back to Home
          </Link>

          <div className="anim-fade-in-up delay-1000 flex items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-14 opacity-40">
            <GiGoat  className="float-goat    text-[#8fbc9a] text-2xl sm:text-3xl" />
            <GiCow   className="float-generic text-[#8fbc9a] text-3xl sm:text-4xl" />
            <GiCamel className="float-camel   text-[#8fbc9a] text-2xl sm:text-3xl" />
            <GiCow   className="float-generic text-[#8fbc9a] text-3xl sm:text-4xl" />
            <GiGoat  className="float-goat    text-[#8fbc9a] text-2xl sm:text-3xl" />
          </div>

          <div className="grass-wave w-full mt-2 h-1 rounded-full bg-gradient-to-r from-transparent via-[#2d5c43] to-transparent" />
        </div>

      </div>
    </>
  );
};

export default NotFound;