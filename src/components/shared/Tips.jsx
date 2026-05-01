"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaCheckCircle,
  FaScroll,
  FaCut,
  FaHandshake,
} from "react-icons/fa";

const tips = [
  {
    id: 1,
    icon: <FaCheckCircle style={{ fontSize: 28, color: "#c8a03a" }} />,
    title: "Check Age & Health",
    text: "Ensure the animal meets minimum age: 1yr goat, 2yr cow, 5yr camel. Check for visible illness.",
  },
  {
    id: 2,
    icon: <FaScroll style={{ fontSize: 28, color: "#c8a03a" }} />,
    title: "Niyyah & Intention",
    text: "Make your intention (niyyah) clearly before Eid prayer. Qurbani is only valid after the prayer.",
  },
  {
    id: 3,
    icon: <FaCut style={{ fontSize: 28, color: "#c8a03a" }} />,
    title: "Sharp Knife Only",
    text: "Use a very sharp blade for swift, humane slaughter. Avoid sharpening in front of the animal.",
  },
  {
    id: 4,
    icon: <FaHandshake style={{ fontSize: 28, color: "#c8a03a" }} />,
    title: "Distribute Meat",
    text: "Divide into 3 equal parts: family, relatives, and the poor. This is the Sunnah way.",
  },
];

const SectionHeader = ({ eyebrow, title }) => (
  <>
    <p
      style={{
        fontSize: 11,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: "#c8a03a",
        textAlign: "center",
        marginBottom: 8,
        opacity: 0.8,
      }}
    >
      {eyebrow}
    </p>
    <h2
      style={{
        fontFamily: "'Georgia', serif",
        fontSize: "clamp(24px, 5vw, 36px)",
        fontWeight: 700,
        textAlign: "center",
        color: "#f5e6c0",
        marginBottom: 6,
      }}
    >
      {title}
    </h2>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        margin: "12px 0 36px",
      }}
    >
      <div style={{ width: 48, height: 1, background: "#2d5c43" }} />
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#c8a03a",
          opacity: 0.7,
        }}
      />
      <div style={{ width: 48, height: 1, background: "#2d5c43" }} />
    </div>
  </>
);

const QurbaniTips = () => {
  return (
    <section style={{ background: "#061409", padding: "52px 20px" }}>
      <SectionHeader eyebrow="Be Prepared" title="Qurbani Tips" />
<Marquee pauseOnHover={true} >
      <div
        style={{
          display: "flex",
          flex: "wrap",
          gap: 16,
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        {tips.map((tip) => (
          <div
            key={tip.id}
            style={{
              background: "#0d2818",
              border: "1px solid #1e4a2e",
              borderRadius: 10,
              padding: "20px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: 10 }}>{tip.icon}</div>
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#f0e0a0",
                marginBottom: 6,
              }}
            >
              {tip.title}
            </p>
            <p style={{ fontSize: 12, color: "#6b9a7a", lineHeight: 1.6 }}>
              {tip.text}
            </p>
          </div>
        ))}
      </div> </Marquee>
    </section>
  );
};

export default QurbaniTips;