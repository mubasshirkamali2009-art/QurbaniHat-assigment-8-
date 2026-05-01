"use client";

import React from "react";
import { GiCow, GiGoat, GiCamel } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import Link from "next/link";
import animalsData from "../../animal.json";
import Marquee from "react-fast-marquee";
const FEATURED_IDS = [2, 4, 3, 6];

const getAnimalIcon = (type) => {
  const style = { fontSize: 64, color: "#c8a03a" };
  switch (type) {
    case "Cow":
      return <GiCow style={style} />;
    case "Goat":
      return <GiGoat style={style} />;
    case "Camel":
      return <GiCamel style={style} />;
    default:
      return <MdOutlinePets style={style} />;
  }
};

const getCategoryBadge = (category) => {
  if (category === "Large Animal") return "Large";
  if (category === "Small Animal") return "Small";
  return category;
};

const formatPrice = (price) => {
  return "৳" + price.toLocaleString("en-IN");
};

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

const Animalcards = () => {
  const featured = FEATURED_IDS.map((id) =>
    animalsData.find((a) => a.id === id)
  ).filter(Boolean);

  return (
    <>
      <style>{`
        .fa-card {
          background: #0a1f10;
          border: 1px solid #1e4a2e;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, border-color 0.2s;
          flex: 1;
          min-width: 140px;
          text-decoration: none;
        }
        .fa-card:hover {
          transform: translateY(-4px);
          border-color: #c8a03a;
        }
      `}</style>

    <section style={{ background: "#0d2818", padding: "52px 20px" }}>
        <SectionHeader eyebrow="Top Picks" title="Featured Animals" />
  
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          {featured.map((animal) => (
            <Link
              key={animal.id}
              href={`/animals/${animal.id}`}
              className="fa-card"
            >
              <div
                style={{
                  width: "100%",
                  height: 110,
                  background: "#1a3c2e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getAnimalIcon(animal.type)}
              </div>

              <div style={{ padding: 12 }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 10,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    background: "#1e4a2e",
                    color: "#8fbc9a",
                    padding: "2px 8px",
                    borderRadius: 20,
                    marginBottom: 6,
                  }}
                >
                  {getCategoryBadge(animal.category)}
                </span>

                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#f5e6c0",
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {animal.name}
                </p>

                <p style={{ fontSize: 11, color: "#6b9a7a", marginBottom: 8 }}>
                  {animal.weight} kg · Age {animal.age} · {animal.location}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{ fontSize: 14, fontWeight: 700, color: "#c8a03a" }}
                  >
                    {formatPrice(animal.price)}
                  </span>
                  <span style={{ fontSize: 10, color: "#5a7a65" }}>
                    {animal.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div> 
      </section> 
    </>
  );
};

export default Animalcards;