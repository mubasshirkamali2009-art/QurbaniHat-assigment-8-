"use client";

import React from "react";
import Link from "next/link";
import { GiCow, GiGoat, GiCamel } from "react-icons/gi";
import { FaSheepdog } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

const breeds = [
  {
    id: 1,
    icon: <GiCow style={{ fontSize: 28, color: "#c8a03a" }} />,
    name: "Shahiwal",
    type: "Cow · Premium",
    href: "/animals?breed=shahiwal",
  },
  {
    id: 2,
    icon: <GiGoat style={{ fontSize: 28, color: "#c8a03a" }} />,
    name: "Black Bengal",
    type: "Goat · Popular",
    href: "/animals?breed=black-bengal",
  },
  {
    id: 3,
    icon: <GiCow style={{ fontSize: 28, color: "#c8a03a" }} />,
    name: "Friesian",
    type: "Cow · Large",
    href: "/animals?breed=friesian",
  },
  {
    id: 4,
    icon: <GiGoat style={{ fontSize: 28, color: "#c8a03a" }} />,
    name: "Jamuna Pari",
    type: "Goat · Heavy",
    href: "/animals?breed=jamuna-pari",
  },
  {
    id: 5,
    icon: <MdOutlinePets style={{ fontSize: 28, color: "#c8a03a" }} />,
    name: "Merino",
    type: "Sheep · Medium",
    href: "/animals?breed=merino",
  },
  {
    id: 6,
    icon: <GiCow style={{ fontSize: 28, color: "#c8a03a" }} />,
    name: "Nili Ravi",
    type: "Buffalo · Giant",
    href: "/animals?breed=nili-ravi",
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

const TopBreeds = () => {
  return (
    <>
      <style>{`
        .breed-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #0a1f10;
          border: 1px solid #1e4a2e;
          border-radius: 10px;
          padding: 12px 14px;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .breed-item:hover {
          border-color: #c8a03a;
          transform: translateY(-2px);
        }
      `}</style>

      <section style={{ background: "#0d2818", padding: "52px 20px" }}>
        <SectionHeader eyebrow="Popular Choices" title="Top Breeds" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12,
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          {breeds.map((breed) => (
            <Link key={breed.id} href={breed.href} className="breed-item">
              {breed.icon}
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#f0e0a0",
                    margin: 0,
                  }}
                >
                  {breed.name}
                </p>
                <p style={{ fontSize: 11, color: "#5a7a65", margin: 0 }}>
                  {breed.type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div
        style={{
          background: "#061409",
          borderTop: "1px solid #1e4a2e",
          padding: 20,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "#3d6b4e",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Qurbani Haat · Eid Al-Adha 2025 · Bangladesh
        </p>
      </div>
    </>
  );
};

export default TopBreeds;