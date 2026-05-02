"use client";

import React from "react";

import {
  GiKnifeFork,
  GiBatteredAxe,
  GiRopeCoil,
  GiWaterDrop,
  GiScales,
  GiMedicines,
} from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";

const toolsData = [
  {
    id: 1,
    name: "Qurbani Knife Set",
    type: "Cutting Tool",
    brand: "Premium Steel",
    price: 1200,
    weight: 0.8,
    stock: 50,
    location: "Dhaka",
    description: "High-carbon stainless steel knife set, razor sharp for swift and humane slaughter.",
    category: "Knife",
  },
  {
    id: 2,
    name: "Heavy Butcher Axe",
    type: "Cutting Tool",
    brand: "Iron Forge",
    price: 2500,
    weight: 2.5,
    stock: 30,
    location: "Chattogram",
    description: "Heavy-duty butcher axe for bone cutting. Forged iron head with wooden handle.",
    category: "Axe",
  },
  {
    id: 3,
    name: "Animal Rope & Halter",
    type: "Restraint Tool",
    brand: "Deshi Craft",
    price: 350,
    weight: 0.5,
    stock: 200,
    location: "Bogura",
    description: "Strong jute and nylon rope for safely restraining animals during Qurbani.",
    category: "Rope",
  },
  {
    id: 4,
    name: "Water Bucket Set",
    type: "Cleaning Tool",
    brand: "HomePlus",
    price: 280,
    weight: 1.2,
    stock: 150,
    location: "Rajshahi",
    description: "Heavy-duty plastic buckets for washing and cleaning the slaughter area.",
    category: "Cleaning",
  },
  {
    id: 5,
    name: "Hanging Weighing Scale",
    type: "Measurement Tool",
    brand: "AccuMeasure",
    price: 1800,
    weight: 1.0,
    stock: 40,
    location: "Dhaka",
    description: "100kg capacity hanging scale for accurate meat distribution during Qurbani.",
    category: "Scale",
  },
  {
    id: 6,
    name: "First Aid & Medicine Kit",
    type: "Safety Tool",
    brand: "MediCare",
    price: 950,
    weight: 0.6,
    stock: 80,
    location: "Mymensingh",
    description: "Essential first aid kit with antiseptic, bandages, and basic medicines for safe Qurbani.",
    category: "Medicine",
  },
  {
    id: 7,
    name: "Meat Packaging Box",
    type: "Storage Tool",
    brand: "FreshPack",
    price: 600,
    weight: 0.4,
    stock: 300,
    location: "Dhaka",
    description: "Food-grade cardboard boxes for hygienic packaging and distribution of Qurbani meat.",
    category: "Packaging",
  },
  {
    id: 8,
    name: "Area Cleaning Kit",
    type: "Cleaning Tool",
    brand: "CleanPro",
    price: 750,
    weight: 1.5,
    stock: 100,
    location: "Cumilla",
    description: "Complete cleaning kit including disinfectant, mop, and gloves for post-Qurbani cleanup.",
    category: "Cleaning",
  },
];

const getToolIcon = (category) => {
  const style = { fontSize: 48, color: "#c8a03a" };
  switch (category) {
    case "Knife":
      return <GiKnifeFork style={style} />;
    case "Axe":
      return <GiBatteredAxe style={style} />;
    case "Rope":
      return <GiRopeCoil style={style} />;
    case "Cleaning":
      return <MdCleaningServices style={style} />;
    case "Scale":
      return <GiScales style={style} />;
    case "Medicine":
      return <GiMedicines style={style} />;
    case "Packaging":
      return <FaBoxOpen style={style} />;
    default:
      return <GiKnifeFork style={style} />;
  }
};

const getCategoryColor = (category) => {
  const map = {
    Knife: "#3a1c0a",
    Axe: "#1c0a0a",
    Rope: "#1a3c2e",
    Cleaning: "#0a1c3a",
    Scale: "#1c1a0a",
    Medicine: "#0a1c1c",
    Packaging: "#1a1c0a",
  };
  return map[category] || "#1a3c2e";
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

const QurbaniTools = () => {
  return (
    <>
      <style>{`
        .tool-card {
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
        .tool-card:hover {
          transform: translateY(-4px);
          border-color: #c8a03a;
        }
        .tool-stock-badge {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 20px;
          margin-bottom: 6px;
        }
      `}</style>

      <section style={{ background: "#061409", padding: "52px 20px" }}>
        <SectionHeader eyebrow="Essentials" title="Qurbani Tools" />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          {toolsData.map((tool) => (
           <div
              key={tool.id}
                  className="tool-card"
              >
            
              <div
                style={{
                  width: "100%",
                  height: 100,
                  background: getCategoryColor(tool.category),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getToolIcon(tool.category)}
              </div>

              <div style={{ padding: 12 }}>
                <span
                  className="tool-stock-badge"
                  style={{
                    background: tool.stock > 100 ? "#1e4a2e" : "#3a2a0a",
                    color: tool.stock > 100 ? "#8fbc9a" : "#c8a03a",
                  }}
                >
                  {tool.stock > 100 ? "In Stock" : `Only ${tool.stock} left`}
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
                  {tool.name}
                </p>

                <p style={{ fontSize: 11, color: "#6b9a7a", marginBottom: 8 }}>
                  {tool.type} · {tool.weight} kg · {tool.location}
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
                    {formatPrice(tool.price)}
                  </span>
                  <span style={{ fontSize: 10, color: "#5a7a65" }}>
                    {tool.brand}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default QurbaniTools;