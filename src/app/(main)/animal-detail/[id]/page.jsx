"use client";

import {
  GiCow, GiGoat, GiSheep, GiCamel,
} from "react-icons/gi";
import {
  FiUser, FiMail, FiPhone, FiMapPin, FiCheckCircle,
  FiArrowLeft, FiTag, FiShield, FiPackage,
} from "react-icons/fi";
import { LuWeight, LuCalendarDays } from "react-icons/lu";
import Link from "next/link";

const animal = {
  id: "ANM-2025-001",
  name: "Black Brahman Bull",
  species: "Cow",
  breed: "Brahman",
  age: "3 Years",
  weight: "480 kg",
  price: 85000,
  location: "Savar, Dhaka",
  seller: "Haji Farms Ltd.",
  vaccinated: true,
  description:
    "A premium-grade Brahman bull raised on organic feed in open pastures. Healthy, calm-tempered, and fully certified halal. Ideal for Qurbani. Comes with a complete veterinary health certificate and vaccination records upon purchase.",
  features: [
    "Vet-certified healthy",
    "Organic grass-fed",
    "Calm temperament",
    "Full vaccination records",
    "Halal certified",
    "Free home delivery",
  ],
};

const formatPrice = (p) => "৳" + Number(p).toLocaleString("en-IN");

const AnimalIcon = ({ species }) => {
  const cls = "text-[90px] md:text-[120px] text-amber-400 drop-shadow-[0_0_40px_rgba(200,160,58,0.5)]";
  switch (species) {
    case "Goat":  return <GiGoat  className={cls} />;
    case "Sheep": return <GiSheep className={cls} />;
    case "Camel": return <GiCamel className={cls} />;
    default:      return <GiCow   className={cls} />;
  }
};

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-[#0a1f10] border border-emerald-900/60 rounded-xl p-4 hover:border-emerald-700/50 transition-colors duration-300 group">
    <div className="flex items-center gap-1.5 mb-2">
      <Icon className="text-amber-500/80 text-xs group-hover:text-amber-400 transition-colors" />
      <span className="text-[9px] tracking-[2px] uppercase text-emerald-700 font-semibold">{label}</span>
    </div>
    <p className="text-sm font-semibold text-amber-100/80">{value}</p>
  </div>
);

export default function AnimalDetailsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap');
        .font-serif { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes orbA {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(20px,-15px) scale(1.08); }
        }
        @keyframes orbB {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(-15px,20px) scale(0.94); }
        }
        .anim-fadeup-1 { animation: fadeUp .55s .05s ease both; }
        .anim-fadeup-2 { animation: fadeUp .55s .12s ease both; }
        .anim-fadeup-3 { animation: fadeUp .55s .20s ease both; }
        .anim-fadeup-4 { animation: fadeUp .55s .27s ease both; }
        .anim-fadeup-r { animation: fadeUp .55s .18s ease both; }
        .float-icon    { animation: float 4s ease-in-out infinite; }
        .orb-a         { animation: orbA 9s ease-in-out infinite; }
        .orb-b         { animation: orbB 11s ease-in-out infinite; }
        .price-shine {
          background: linear-gradient(90deg,#c8a03a 0%,#f5d070 40%,#c8a03a 60%,#9a7820 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        input::placeholder { color: #1a4a2e !important; }
      `}</style>

      <div className="min-h-screen bg-[#040e07]">

        {/* ── Topbar ── */}
        <div className="sticky top-0 z-40 bg-[#040e07]/80 backdrop-blur-xl border-b border-emerald-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 flex-wrap">
            <Link href="/animals" className="flex items-center gap-2 text-xs text-emerald-600 hover:text-amber-400 border border-emerald-900/60 hover:border-amber-600/40 rounded-lg px-3 py-1.5 transition-all duration-200 cursor-pointer">
              <FiArrowLeft /> Back
            </Link>
            <div className="flex items-center gap-1.5 text-[10px] tracking-wide text-emerald-800 flex-wrap">
              <span>Animals</span>
              <span>/</span>
              <span>{animal.species}</span>
              <span>/</span>
              <span className="text-emerald-600 truncate max-w-[120px] sm:max-w-none">{animal.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-7 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_370px] gap-6">

            {/* ══ LEFT ══ */}
            <div className="space-y-5 min-w-0">

              {/* Hero Card */}
              <div className="anim-fadeup-1 relative overflow-hidden rounded-3xl border border-emerald-900/60 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d2e18] via-[#091a0f] to-[#061409]" />
                <div className="orb-a absolute w-72 h-72 rounded-full bg-emerald-900/20 blur-3xl -top-16 -left-16 pointer-events-none" />
                <div className="orb-b absolute w-56 h-56 rounded-full bg-amber-900/15 blur-3xl -bottom-10 -right-10 pointer-events-none" />

                <div className="relative h-52 sm:h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,160,58,0.07)_0%,transparent_65%)]" />
                  <div className="relative float-icon">
                    <AnimalIcon species={animal.species} />
                  </div>
                  {animal.vaccinated && (
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-900/70 border border-emerald-700/50 backdrop-blur-sm text-emerald-300 text-[10px] font-semibold px-3 py-1.5 rounded-full">
                      <FiShield className="text-xs" /> Vaccinated
                    </span>
                  )}
                  <span className="absolute top-4 left-4 bg-[#040e07]/60 border border-emerald-900/50 backdrop-blur-sm text-emerald-600 text-[10px] font-mono px-3 py-1.5 rounded-full">
                    {animal.id}
                  </span>
                </div>

                <div className="relative border-t border-emerald-900/40 bg-gradient-to-r from-[#0a1e10]/80 to-[#061409]/80 backdrop-blur-sm px-6 py-5 flex flex-wrap items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[3px] uppercase text-amber-500/70 mb-1">
                      {animal.species} · {animal.breed}
                    </p>
                    <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50 leading-tight break-words">
                      {animal.name}
                    </h1>
                    <p className="text-xs text-emerald-600 mt-1.5">
                      Sold by <span className="text-amber-500/80 font-medium">{animal.seller}</span>
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[10px] tracking-[2px] uppercase text-emerald-700 mb-1">Price</p>
                    <p className="font-serif text-3xl sm:text-4xl font-extrabold price-shine leading-none">
                      {formatPrice(animal.price)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="anim-fadeup-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard icon={LuCalendarDays} label="Age"      value={animal.age}      />
                <StatCard icon={LuWeight}        label="Weight"   value={animal.weight}   />
                <StatCard icon={FiMapPin}        label="Location" value={animal.location} />
                <StatCard icon={FiTag}           label="Species"  value={animal.species}  />
              </div>

              {/* Description */}
              <div className="anim-fadeup-3 bg-gradient-to-br from-[#0a1f10] to-[#061409] border border-emerald-900/60 rounded-2xl p-6">
                <p className="text-[10px] tracking-[3px] uppercase text-amber-500/70 font-semibold mb-3">
                  About This Animal
                </p>
                <p className="text-sm text-emerald-400/80 leading-relaxed">{animal.description}</p>
              </div>

              {/* Features */}
              <div className="anim-fadeup-4 bg-gradient-to-br from-[#0a1f10] to-[#061409] border border-emerald-900/60 rounded-2xl p-6">
                <p className="text-[10px] tracking-[3px] uppercase text-amber-500/70 font-semibold mb-4">
                  Key Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {animal.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-900/60 hover:border-amber-600/40 hover:bg-amber-900/10 rounded-lg px-3 py-2 text-xs text-emerald-300 transition-all duration-200 cursor-default"
                    >
                      <FiCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ══ RIGHT ══ */}
            <div className="anim-fadeup-r space-y-4 lg:sticky lg:top-20 lg:self-start">
              <p className="text-[10px] tracking-[3px] uppercase text-amber-500/70 font-semibold pl-0.5">
                Reserve This Animal
              </p>

              {/* Login Gate */}
              <div className="bg-gradient-to-br from-[#0a1f10] to-[#061409] border border-emerald-900/60 rounded-2xl p-7 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3c20] to-[#0d2e18] border border-emerald-800/50 flex items-center justify-center mx-auto mb-5">
                  <FiShield className="text-amber-400 text-2xl" />
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-50 mb-2">Login Required</h3>
                <p className="text-sm text-emerald-500/80 mb-7 leading-relaxed max-w-xs mx-auto">
                  You must be logged in to book an animal. Please sign in to continue with your Qurbani booking.
                </p>
                <button className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061409] font-bold text-sm rounded-xl tracking-widest uppercase transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,160,58,0.35)] hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                  Sign In to Book
                </button>
                <p className="text-xs text-emerald-800 mt-4">
                  No account?{" "}
                  <span className="text-amber-500 cursor-pointer hover:text-amber-400 transition-colors">
                    Register now
                  </span>
                </p>
              </div>

              {/* Booking Form */}
              <div className="bg-gradient-to-br from-[#0a1f10] to-[#061409] border border-emerald-900/60 rounded-2xl p-6">
                <p className="font-serif text-base font-bold text-amber-100 mb-5 flex items-center gap-2">
                  <FiPackage className="text-amber-500" />
                  Booking Details
                </p>

                {/* Fields */}
                {[
                  { icon: FiUser,   label: "Full Name",        placeholder: "e.g. Abdullah Al Mamun" },
                  { icon: FiMail,   label: "Email Address",    placeholder: "you@example.com" },
                  { icon: FiPhone,  label: "Phone Number",     placeholder: "+880 1XXX-XXXXXX" },
                  { icon: FiMapPin, label: "Delivery Address", placeholder: "House, Road, Area, City" },
                ].map(({ icon: Icon, label, placeholder }) => (
                  <div key={label} className="mb-4">
                    <label className="block text-[10px] tracking-[2px] uppercase text-emerald-600 mb-1.5 font-semibold">
                      {label}
                    </label>
                    <div className="relative">
                      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm pointer-events-none text-emerald-700" />
                      <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full pl-10 pr-4 py-3 bg-[#040e07] rounded-xl text-sm text-amber-50 outline-none border border-emerald-900/70 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-900/30 transition-all duration-200"
                      />
                    </div>
                  </div>
                ))}

                <button className="w-full mt-2 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061409] hover:shadow-[0_8px_30px_rgba(200,160,58,0.35)] hover:-translate-y-0.5 active:scale-95">
                  Confirm Booking
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="bg-gradient-to-br from-[#0a1f10] to-[#061409] border border-emerald-900/60 rounded-2xl p-5">
                <p className="text-[10px] tracking-[3px] uppercase text-emerald-700 font-semibold mb-4">
                  Price Breakdown
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Animal Price", value: formatPrice(animal.price), accent: false },
                    { label: "Delivery",     value: "Free",                    accent: true  },
                    { label: "Service Fee",  value: "Free",                    accent: true  },
                  ].map(({ label, value, accent }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-sm text-emerald-600">{label}</span>
                      <span className={`text-sm font-medium ${accent ? "text-emerald-400" : "text-amber-100/80"}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-emerald-900/60 pt-3 flex justify-between items-center">
                    <span className="text-sm font-bold text-amber-100">Total</span>
                    <span className="font-serif text-xl font-extrabold text-amber-400">
                      {formatPrice(animal.price)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: FiShield,      text: "Halal Certified" },
                  { icon: FiCheckCircle, text: "Vet Checked"     },
                  { icon: FiPackage,     text: "Free Delivery"   },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="bg-[#0a1f10] border border-emerald-900/50 hover:border-emerald-700/50 rounded-xl p-3 text-center transition-colors duration-200 group cursor-default"
                  >
                    <Icon className="text-amber-500/80 group-hover:text-amber-400 transition-colors text-base mx-auto mb-1.5" />
                    <p className="text-[9px] text-emerald-600 leading-tight">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}