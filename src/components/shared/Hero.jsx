

"use client";
 
import React from "react";
import { FaMoon, FaStar } from "react-icons/fa";
import { GiGoat, GiCamel, GiCow } from "react-icons/gi";
import Link from "next/link";
 
const STARS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top: `${((i * 37 + 11) % 97)}%`,
  left: `${((i * 53 + 7) % 97)}%`,
  delay: `${((i * 0.3) % 3).toFixed(1)}s`,
  opacity: (0.2 + ((i * 0.05) % 0.5)).toFixed(2),
}));
 
const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes heroTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes heroMoonGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(200,160,58,0.4)); }
          50% { filter: drop-shadow(0 0 24px rgba(200,160,58,0.9)); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroBtnPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(200,160,58,0.3); }
          50% { box-shadow: 0 4px 40px rgba(200,160,58,0.65); }
        }
        .hero-star { animation: heroTwinkle 3s ease-in-out infinite; }
        .hero-moon-glow { animation: heroMoonGlow 4s ease-in-out infinite; }
        .hero-animal-1 { animation: heroFloat 4s ease-in-out infinite; }
        .hero-animal-2 { animation: heroFloat 4s ease-in-out infinite 0.5s; }
        .hero-animal-3 { animation: heroFloat 4s ease-in-out infinite 1s; }
        .hero-animal-4 { animation: heroFloat 4s ease-in-out infinite 1.5s; }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #c8a03a;
          color: #0d2818;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 40px;
          text-decoration: none;
          transition: transform 0.2s;
          animation: heroBtnPulse 2.5s ease-in-out infinite;
        }
        .hero-btn:hover { transform: scale(1.05); }
      `}</style>
 
      <section
        style={{
          position: "relative",
          minHeight: "460px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(160deg, #0d2818 0%, #0a1f10 50%, #061409 100%)",
          borderBottom: "1px solid #2d5c43",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {STARS.map((s) => (
            <div
              key={s.id}
              className="hero-star"
              style={{
                position: "absolute",
                top: s.top,
                left: s.left,
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "#c8a03a",
                opacity: s.opacity,
                animationDelay: s.delay,
              }}
            />
          ))}
        </div>
 
        <div className="hero-moon-glow" style={{ position: "absolute", top: 20, right: 40 }}>
          <FaMoon style={{ color: "#c8a03a", fontSize: 64, opacity: 0.9 }} />
        </div>
 
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "60px 24px",
            maxWidth: 640,
          }}
        >
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c8a03a",
              marginBottom: 16,
              opacity: 0.85,
            }}
          >
            Eid Al-Adha · Qurbani Season 2025
          </p>
 
          <h1
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(36px, 7vw, 64px)",
              fontWeight: 900,
              color: "#f5e6c0",
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            Find Your <span style={{ color: "#c8a03a" }}>Qurbani</span>
            <br />
            Animal
          </h1>
 
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              margin: "16px 0",
            }}
          >
            <div style={{ width: 60, height: 1, background: "#2d5c43" }} />
            <FaStar style={{ color: "#c8a03a", fontSize: 12 }} />
            <div style={{ width: 60, height: 1, background: "#2d5c43" }} />
          </div>
 
          <p
            style={{
              fontSize: 15,
              color: "#8fbc9a",
              lineHeight: 1.7,
              margin: "16px auto 32px",
              maxWidth: 480,
            }}
          >
            Premium cows, goats, sheep & camels. Ethically raised, Shariah-compliant.
            Delivered to your door across Bangladesh.
          </p>
 
          <Link href="/animals" className="hero-btn">
            <GiCow style={{ fontSize: 20 }} />
            Browse Animals
          </Link>
 
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginTop: 36,
              opacity: 0.25,
              color: "#c8a03a",
            }}
          >
            <GiCow className="hero-animal-1" style={{ fontSize: 36 }} />
            <GiGoat className="hero-animal-2" style={{ fontSize: 36 }} />
            <GiCamel className="hero-animal-3" style={{ fontSize: 36 }} />
            <GiGoat className="hero-animal-4" style={{ fontSize: 36 }} />
          </div>
        </div>
      </section>
    </>
  );
};
 
export default HeroSection;