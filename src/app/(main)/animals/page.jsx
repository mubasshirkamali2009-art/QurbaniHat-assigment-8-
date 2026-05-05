"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { GiCow, GiGoat, GiCamel, GiBatteredAxe } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import { FaArrowUp, FaArrowDown, FaMapMarkerAlt, FaWeight, FaBirthdayCake, FaTag, FaFilter, FaSortAmountDown } from "react-icons/fa";
import { Spinner } from "@heroui/react";
import animaldata from "./../../../animal.json";

const getAnimalIcon = (type) => {
  const style = { fontSize: 56, color: "#c8a03a" };
  switch (type) {
    case "Cow": return <GiCow style={style} />;
    case "Goat": return <GiGoat style={style} />;
    case "Camel": return <GiCamel style={style} />;
    case "Buffalo": return <GiBatteredAxe style={style} />;
    default: return <MdOutlinePets style={style} />;
  }
};

const formatPrice = (price) => "৳" + price.toLocaleString("en-IN");

const TYPES = ["All", ...new Set(animaldata.map((a) => a.type))];

const AnimalsPage = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeType, setActiveType] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let list = activeType === "All"
      ? [...animaldata]
      : animaldata.filter((a) => a.type === activeType);
    list.sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);
    return list;
  }, [sortOrder, activeType]);

  if (loading) return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1f10',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <Spinner size="lg" color="warning" />
      <p style={{ color: '#8fbc9a', fontSize: '14px', letterSpacing: '2px' }}>
        Loading Animals...
      </p>
    </div>
  );

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .ap-page { min-height: 100vh; background: #0a1f10; font-family: sans-serif; color: #f0e8d0; }
        .ap-header { background: linear-gradient(160deg, #0d2818 0%, #061409 100%); border-bottom: 1px solid #2d5c43; padding: 36px 20px 28px; text-align: center; }
        .ap-eyebrow { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #c8a03a; opacity: 0.8; margin-bottom: 8px; }
        .ap-title { font-family: 'Georgia', serif; font-size: clamp(28px, 6vw, 48px); font-weight: 700; color: #f5e6c0; margin-bottom: 6px; }
        .ap-title span { color: #c8a03a; }
        .ap-rule { display: flex; align-items: center; justify-content: center; gap: 10px; margin: 12px auto 0; }
        .ap-rule-line { width: 48px; height: 1px; background: #2d5c43; }
        .ap-rule-dot { width: 6px; height: 6px; border-radius: 50%; background: #c8a03a; opacity: 0.7; }
        .ap-controls { background: #0d2818; border-bottom: 1px solid #1e4a2e; padding: 16px 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; max-width: 1100px; margin: 0 auto; }
        .ap-filters { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
        .ap-filter-label { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #8fbc9a; letter-spacing: 1px; text-transform: uppercase; margin-right: 4px; }
        .ap-filter-btn { background: transparent; border: 1px solid #2d5c43; color: #8fbc9a; font-size: 12px; padding: 6px 14px; border-radius: 20px; cursor: pointer; transition: all 0.2s; font-family: sans-serif; }
        .ap-filter-btn:hover { border-color: #c8a03a; color: #c8a03a; }
        .ap-filter-btn.active { background: #c8a03a; border-color: #c8a03a; color: #0d2818; font-weight: 700; }
        .ap-sort { display: flex; align-items: center; gap: 8px; }
        .ap-sort-label { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #8fbc9a; letter-spacing: 1px; text-transform: uppercase; }
        .ap-sort-btn { display: flex; align-items: center; gap: 6px; background: transparent; border: 1px solid #2d5c43; color: #8fbc9a; font-size: 12px; padding: 6px 14px; border-radius: 20px; cursor: pointer; transition: all 0.2s; font-family: sans-serif; }
        .ap-sort-btn:hover { border-color: #c8a03a; color: #c8a03a; }
        .ap-sort-btn.active { background: #1e4a2e; border-color: #c8a03a; color: #c8a03a; }
        .ap-count { font-size: 12px; color: #5a7a65; padding: 0 20px; max-width: 1100px; margin: 14px auto 0; }
        .ap-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; max-width: 1100px; margin: 16px auto 0; padding: 0 20px 48px; }
        .ap-card { background: #0d2818; border: 1px solid #1e4a2e; border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; text-decoration: none; }
        .ap-card:hover { transform: translateY(-5px); border-color: #c8a03a; box-shadow: 0 8px 32px rgba(200, 160, 58, 0.12); }
        .ap-card-img { width: 100%; height: 120px; background: #1a3c2e; display: flex; align-items: center; justify-content: center; position: relative; }
        .ap-card-category { position: absolute; top: 10px; left: 10px; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; background: rgba(13, 40, 24, 0.85); color: #8fbc9a; padding: 3px 8px; border-radius: 20px; border: 1px solid #2d5c43; }
        .ap-card-body { padding: 16px; display: flex; flex-direction: column; flex: 1; }
        .ap-card-name { font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #f5e6c0; margin-bottom: 4px; line-height: 1.3; }
        .ap-card-breed { font-size: 12px; color: #5a7a65; margin-bottom: 14px; }
        .ap-card-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
        .ap-stat { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #8fbc9a; }
        .ap-stat-icon { color: #c8a03a; font-size: 11px; flex-shrink: 0; }
        .ap-card-desc { font-size: 12px; color: #5a7a65; line-height: 1.6; margin-bottom: 16px; flex: 1; }
        .ap-card-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid #1e4a2e; gap: 10px; }
        .ap-card-price { font-size: 18px; font-weight: 700; color: #c8a03a; font-family: 'Georgia', serif; }
        .ap-details-btn { display: inline-flex; align-items: center; gap: 6px; background: transparent; border: 1px solid #c8a03a; color: #c8a03a; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 7px 14px; border-radius: 20px; text-decoration: none; transition: all 0.2s; white-space: nowrap; font-family: sans-serif; }
        .ap-details-btn:hover { background: #c8a03a; color: #0d2818; }
        .ap-empty { text-align: center; padding: 60px 20px; color: #5a7a65; font-size: 14px; }
        @media (max-width: 600px) {
          .ap-controls { flex-direction: column; align-items: flex-start; }
          .ap-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
          .ap-card-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ap-page">
        <div className="ap-header">
          <p className="ap-eyebrow">Eid Al-Adha · Qurbani Season 2025</p>
          <h1 className="ap-title">All <span>Animals</span></h1>
          <div className="ap-rule">
            <div className="ap-rule-line" />
            <div className="ap-rule-dot" />
            <div className="ap-rule-line" />
          </div>
        </div>

        <div style={{ background: "#0a1f10" }}>
          <div className="ap-controls">
            <div className="ap-filters">
              <span className="ap-filter-label"><FaFilter style={{ fontSize: 11 }} /> Type</span>
              {TYPES.map((t) => (
                <button key={t} className={`ap-filter-btn${activeType === t ? " active" : ""}`} onClick={() => setActiveType(t)}>
                  {t}
                </button>
              ))}
            </div>
            <div className="ap-sort">
              <span className="ap-sort-label"><FaSortAmountDown style={{ fontSize: 11 }} /> Price</span>
              <button className={`ap-sort-btn${sortOrder === "asc" ? " active" : ""}`} onClick={() => setSortOrder("asc")}>
                <FaArrowUp style={{ fontSize: 10 }} /> Low to High
              </button>
              <button className={`ap-sort-btn${sortOrder === "desc" ? " active" : ""}`} onClick={() => setSortOrder("desc")}>
                <FaArrowDown style={{ fontSize: 10 }} /> High to Low
              </button>
            </div>
          </div>

          <p className="ap-count">Showing {filtered.length} animal{filtered.length !== 1 ? "s" : ""}</p>

          {filtered.length === 0 ? (
            <div className="ap-empty">No animals found for this filter.</div>
          ) : (
            <div className="ap-grid">
              {filtered.map((animal) => (
                <div key={animal.id} className="ap-card">
                  <div className="ap-card-img">
                    {getAnimalIcon(animal.type)}
                    <span className="ap-card-category">{animal.category}</span>
                  </div>
                  <div className="ap-card-body">
                    <p className="ap-card-name">{animal.name}</p>
                    <p className="ap-card-breed">{animal.breed}</p>
                    <div className="ap-card-stats">
                      <div className="ap-stat"><FaWeight className="ap-stat-icon" />{animal.weight} kg</div>
                      <div className="ap-stat"><FaBirthdayCake className="ap-stat-icon" />Age {animal.age}</div>
                      <div className="ap-stat"><FaMapMarkerAlt className="ap-stat-icon" />{animal.location}</div>
                      <div className="ap-stat"><FaTag className="ap-stat-icon" />{animal.type}</div>
                    </div>
                    <p className="ap-card-desc">{animal.description}</p>
                    <div className="ap-card-footer flex flex-col lg:flex-row">
  <span className="ap-card-price">{formatPrice(animal.price)}</span>
  <Link href={`/animal-detail/${animal.id}`} className="ap-details-btn">Details</Link>
</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimalsPage;