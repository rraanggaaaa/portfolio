import React, { useState, useEffect, useRef } from "react";
import {
  Code2, Briefcase, GraduationCap, Mail, Phone, Linkedin, Github, Globe,
  Award, Star, Layers, Database, Server, Smartphone, ChevronRight,
  Sparkles, MapPin, Calendar, ExternalLink, Cpu, Terminal, ArrowRight, BookOpen, Zap, Languages
} from "lucide-react";

const STATS = [
  { number: "2+", labelEn: "Years Exp", labelId: "Tahun Exp", from: "#93c5fd", to: "#818cf8"  },
  { number: "41+", labelEn: "Projects", labelId: "Proyek", from: "#f9a8d4", to: "#c084fc" },
  { number: "∞", labelEn: "Programming Languages", labelId: "Bahasa Pemrograman", from: "#86efac", to: "#34d399" },
  { number: "10+", labelEn: "Certs", labelId: "Sertifikasi", from: "#fcd34d", to: "#fb923c" },
];

const EXPERIENCES = [
  {
    titleEn: "Software Developer", titleId: "Pengembang Perangkat Lunak",
    company: "PT Askara Advertensi Internasional",
    period: "Apr 2026 – Mei 2026", location: "Jakarta",
    from: "#818cf8", to: "#c084fc", icon: <Code2 size={17} />,
    descEn: ["ASP Classic system maintenance", "SQL Server query optimization", "Algorithm implementation to code", "Client support & feature adjust"],
    descId: ["Maintenance sistem ASP Classic", "Query optimization SQL Server", "Implementasi algoritma ke kode", "Client support & feature adjust"],
  },
  {
    titleEn: "Fullstack Developer", titleId: "Pengembang Fullstack",
    company: "PT Pertamina Hulu Energi OSES",
    period: "Mei 2025 – Maret 2026", location: "Jakarta",
    from: "#60a5fa", to: "#818cf8", icon: <Layers size={17} />,
    descEn: ["System design from scratch", "Team task coordination", "VRP feature development", "Full frontend + backend dev"],
    descId: ["Merancang sistem dari nol", "Koordinasi task anggota tim", "Develop fitur VRP bersama tim", "Full frontend + backend dev"],
  },
  {
    titleEn: "Fullstack Web Dev Intern", titleId: "Intern Pengembang Web Fullstack",
    company: "PT Wesclic Indonesia Neotech",
    period: "Jan 2025 – Apr 2025", location: "Yogyakarta",
    from: "#f9a8d4", to: "#818cf8", icon: <Server size={17} />,
    descEn: ["ERD to system implementation", "API development & documentation", "Responsive frontend slicing", "Code documentation"],
    descId: ["ERD ke implementasi sistem", "API development & dokumentasi", "Frontend slicing responsif", "Penyusunan dokumentasi kode"],
  },
];

const SKILLS = [
  { name: "JavaScript", icon: <Code2 size={14} />, level: 95, color: "#fbbf24" },
  { name: "ReactJS", icon: <Layers size={14} />, level: 92, color: "#60a5fa" },
  { name: "NodeJS", icon: <Server size={14} />, level: 87, color: "#34d399" },
  { name: "TypeScript", icon: <Terminal size={14} />, level: 82, color: "#818cf8" },
  { name: "MySQL", icon: <Database size={14} />, level: 85, color: "#f9a8d4" },
  { name: "PHP", icon: <Cpu size={14} />, level: 78, color: "#c084fc" },
  { name: "Python", icon: <Terminal size={14} />, level: 72, color: "#86efac" },
  { name: "Kotlin", icon: <Smartphone size={14} />, level: 68, color: "#fb923c" },
];

const CERTS = [
  { name: "SINTA 2 Journal", icon: <Star size={12} />, from: "#fcd34d", to: "#fb923c", href: "https://jurnal.iaii.or.id/index.php/RESTI/article/view/6105" },
  { name: "META Front-End", icon: <Code2 size={12} />, from: "#60a5fa", to: "#818cf8", href: "#" },
  { name: "META JavaScript", icon: <Zap size={12} />, from: "#fbbf24", to: "#f59e0b", href: "#" },
  { name: "Cloud Practitioner", icon: <Globe size={12} />, from: "#93c5fd", to: "#60a5fa", href: "#" },
  { name: "RapidMiner Data Eng", icon: <Database size={12} />, from: "#86efac", to: "#34d399", href: "#" },
  { name: "SparkAR by META", icon: <Sparkles size={12} />, from: "#f9a8d4", to: "#c084fc", href: "#" },
];

const TAGS = ["Tailwind CSS", "VPS Hosting", "GCP", "System Analyst", "Git & Github", "ASP Classic", "Bahasa Indonesia", "English"];

/* ── REUSABLE GLASS COMPONENTS ── */
function GlassCard({ children, className = "", hover = true }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setH(true)}
      onMouseLeave={() => hover && setH(false)}
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${className}`}
      style={{
        background: "rgba(255,255,255,0.28)",
        border: "1.5px solid rgba(255,255,255,0.55)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        boxShadow: h
          ? "0 20px 60px rgba(129,140,248,0.2),0 4px 16px rgba(249,168,212,0.12),inset 0 1.5px 0 rgba(255,255,255,0.8)"
          : "0 8px 32px rgba(129,140,248,0.1),0 2px 8px rgba(249,168,212,0.06),inset 0 1.5px 0 rgba(255,255,255,0.65)",
        transform: h ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.48) 0%,rgba(255,255,255,0.06) 55%,rgba(173,216,255,0.04) 100%)" }} />
      <div className="absolute top-0 left-0 w-px h-full pointer-events-none" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.05))" }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function MiniGlass({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl ${className}`} style={{
      background: "rgba(255,255,255,0.38)",
      border: "1px solid rgba(255,255,255,0.55)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65),0 2px 8px rgba(129,140,248,0.07)",
      ...style,
    }}>{children}</div>
  );
}

function SkillBar({ name, icon, level, color }) {
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex items-center gap-3">
      <MiniGlass className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ color }}>
        {icon}
      </MiniGlass>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[13px] font-semibold text-[#1a1a2e]">{name}</span>
          <span className="text-[11px] font-medium text-[#9090b0]">{level}%</span>
        </div>
        <div className="h-[5px] rounded-full overflow-hidden" style={{ background: "rgba(139,168,255,0.12)", border: "1px solid rgba(255,255,255,0.4)" }}>
          <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{
            width: on ? `${level}%` : "0%",
            background: `linear-gradient(90deg,${color}bb,${color})`,
            boxShadow: `0 0 8px ${color}70`,
          }} />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ icon, titleEn, titleId, lang }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <MiniGlass className="w-9 h-9 flex items-center justify-center text-[#818cf8]">{icon}</MiniGlass>
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a1a2e] tracking-tight">{lang === "en" ? titleEn : titleId}</h2>
    </div>
  );
}

/* ── MAIN ── */
export default function Home() {
  const [active, setActive] = useState("home");
  const [lang, setLang] = useState("en"); // 'en' or 'id'

  const t = (en, id) => lang === "en" ? en : id;

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{
      background: "linear-gradient(135deg,#dbeafe 0%,#ede9fe 35%,#fce7f3 65%,#fdf2f8 100%)",
      fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif",
    }}>

      {/* BLOBS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] sm:w-[640px] sm:h-[640px] rounded-full" style={{ background: "radial-gradient(circle,rgba(147,197,253,0.55) 0%,rgba(129,140,248,0.3) 60%,transparent 100%)", filter: "blur(60px)", animation: "bp1 9s ease-in-out infinite" }} />
        <div className="absolute top-1/3 -right-28 w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] rounded-full" style={{ background: "radial-gradient(circle,rgba(249,168,212,0.5) 0%,rgba(192,132,252,0.25) 60%,transparent 100%)", filter: "blur(60px)", animation: "bp2 11s ease-in-out infinite 2s" }} />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full" style={{ background: "radial-gradient(circle,rgba(196,181,253,0.4) 0%,rgba(147,197,253,0.2) 60%,transparent 100%)", filter: "blur(70px)", animation: "bp1 13s ease-in-out infinite 4s" }} />
        <div className="absolute top-2/3 left-1/2 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full" style={{ background: "radial-gradient(circle,rgba(253,186,116,0.25) 0%,rgba(249,168,212,0.2) 60%,transparent 100%)", filter: "blur(50px)", animation: "bp2 8s ease-in-out infinite 1s" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,rgba(255,255,255,0.32) 0%,transparent 40%,rgba(255,255,255,0.08) 100%)" }} />
      </div>

      <style>{`
        @keyframes bp1{0%,100%{transform:scale(1) translate(0,0)}33%{transform:scale(1.08) translate(20px,-15px)}66%{transform:scale(0.95) translate(-10px,20px)}}
        @keyframes bp2{0%,100%{transform:scale(1) translate(0,0)}40%{transform:scale(1.06) translate(-18px,12px)}70%{transform:scale(0.97) translate(14px,-10px)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.3)}}
      `}</style>

      {/* NAVBAR with Language Toggle */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 px-2 w-full" style={{ maxWidth: 660, transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
        <MiniGlass className="flex items-center justify-between px-4 py-2.5" style={{ boxShadow: "0 8px 32px rgba(129,140,248,0.18),inset 0 1px 0 rgba(255,255,255,0.7)" }}>
          <span className="text-[13px] sm:text-sm font-extrabold text-[#1a1a2e] tracking-tight">{t("Portfolio", "Portofolio")}</span>
          <div className="flex gap-0.5 sm:gap-1">
            {[["Work", "home"], ["Experience", "experience"], ["Skills", "skills"], ["Contact", "contact"]].map(([lbl, id]) => (
              <a key={id} href={`#${id}`} className="px-2 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 no-underline"
                style={{
                  background: active === id ? "linear-gradient(135deg,#818cf8,#c084fc)" : "transparent",
                  color: active === id ? "#fff" : "#5a5a7a",
                  boxShadow: active === id ? "0 4px 12px rgba(129,140,248,0.35)" : "none",
                }}>{t(lbl, lbl === "Work" ? "Karya" : lbl === "Experience" ? "Pengalaman" : lbl === "Skills" ? "Keahlian" : "Kontak")}</a>
            ))}
            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="px-2 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1"
              style={{
                background: "rgba(129,140,248,0.15)",
                color: "#818cf8",
                border: "1px solid rgba(129,140,248,0.3)",
              }}
            >
              <Languages size={12} />
              {lang === "en" ? "ID" : "EN"}
            </button>
          </div>
        </MiniGlass>
      </nav>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-5 pb-20">

        {/* HERO */}
        <section id="home" className="pt-24 sm:pt-28 pb-4">
          <GlassCard hover={false} className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center">

              {/* Photo – top on mobile */}
              <div className="flex-shrink-0 order-first sm:order-last" style={{ animation: "float 5s ease-in-out infinite" }}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2rem]" style={{ background: "linear-gradient(135deg,rgba(147,197,253,0.45),rgba(249,168,212,0.35),rgba(192,132,252,0.3))", filter: "blur(20px)" }} />
                  <div className="absolute -inset-1 rounded-[2rem]" style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.65),rgba(249,168,212,0.25))" }} />
                  <div className="relative w-36 h-40 sm:w-44 sm:h-48 md:w-48 md:h-52 rounded-[1.75rem] overflow-hidden" style={{ border: "2px solid rgba(255,255,255,0.75)", boxShadow: "0 20px 60px rgba(129,140,248,0.25),0 4px 16px rgba(249,168,212,0.2),inset 0 2px 0 rgba(255,255,255,0.8)" }}>
                    <img src="https://i.ibb.co.com/TDMqMPs9/Chat-GPT-Image-Jun-7-2026-10-34-51-PM.png" alt="Dwi Rangga" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.22) 0%,transparent 50%,rgba(147,197,253,0.07) 100%)" }} />
                  </div>
                  <MiniGlass className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-2.5 py-1.5" style={{ boxShadow: "0 4px 16px rgba(129,140,248,0.25)" }}>
                    <div className="w-5 h-5 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)" }}><Code2 size={10} /></div>
                    <span className="text-[11px] font-bold text-[#1a1a2e]">{t("Fullstack", "Fullstack")}</span>
                  </MiniGlass>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(134,239,172,0.18)", border: "1px solid rgba(134,239,172,0.38)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ boxShadow: "0 0 5px #22c55e", animation: "pulse-dot 2s ease-in-out infinite" }} />
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 tracking-wider">{t("AVAILABLE FOR WORK", "TERSEDIA UNTUK BEKERJA")}</span>
                </div>

                <h1 className="font-black leading-none tracking-tight text-[#1a1a2e] mb-1" style={{ fontSize: "clamp(2rem,6vw,3.2rem)" }}>Dwi Rangga</h1>
                <h1 className="font-black leading-none tracking-tight mb-4" style={{
                  fontSize: "clamp(2rem,6vw,3.2rem)",
                  background: "linear-gradient(120deg,#60a5fa 0%,#818cf8 40%,#f9a8d4 75%,#c084fc 100%)",
                  backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  animation: "shimmer 4s linear infinite",
                }}>Okta Zuhdiyanto</h1>

                <p className="text-[13px] sm:text-sm font-medium text-[#5a5a7a] mb-2">{t("Fullstack Developer", "Pengembang Fullstack")}</p>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#9090b0] text-xs mb-6">
                  <MapPin size={11} /><span>Jakarta Selatan, Indonesia</span>
                </div>

                <div className="flex gap-2.5 flex-wrap justify-center sm:justify-start">
                  <a href="/CV_RANGGA.pdf" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs sm:text-[13px] font-bold text-white no-underline transition-all active:scale-95"
                    style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)", boxShadow: "0 8px 24px rgba(129,140,248,0.35),inset 0 1px 0 rgba(255,255,255,0.25)" }}>
                    <Globe size={13} /> {t("Download CV", "Unduh CV")} <ExternalLink size={11} />
                  </a>
                  <a href="http://pheosesxsindis.my.id" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs sm:text-[13px] font-bold text-white no-underline transition-all active:scale-95"
                    style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)", boxShadow: "0 8px 24px rgba(129,140,248,0.35),inset 0 1px 0 rgba(255,255,255,0.25)" }}>
                    <Globe size={13} /> {t("Portfolio", "Portofolio")} <ExternalLink size={11} />
                  </a>
                  <a href="#contact"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs sm:text-[13px] font-bold no-underline transition-all active:scale-95"
                    style={{ color: "#818cf8", background: "rgba(129,140,248,0.1)", border: "1.5px solid rgba(129,140,248,0.28)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)" }}>
                    <Mail size={13} /> {t("Hire Me", "Hubungi Saya")}
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* STATS */}
        <section className="py-4">
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {STATS.map((s, i) => (
              <GlassCard key={i} className="p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-black tracking-tight" style={{ backgroundImage: `linear-gradient(135deg,${s.from},${s.to})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.number}</div>
                <div className="text-[9px] sm:text-[11px] text-[#9090b0] font-medium mt-0.5">{t(s.labelEn, s.labelId)}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-6 sm:py-8">
          <SectionHeader icon={<Briefcase size={15} />} titleEn="Work Experience" titleId="Pengalaman Kerja" lang={lang} />
          <div className="flex flex-col gap-3">
            {EXPERIENCES.map((job, idx) => (
              <GlassCard key={idx} className="p-4 sm:p-5">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ background: `linear-gradient(135deg,${job.from},${job.to})`, boxShadow: `0 5px 18px rgba(129,140,248,0.28)` }}>{job.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap justify-between items-start gap-x-2 gap-y-1 mb-1">
                      <h3 className="text-sm sm:text-[15px] font-extrabold text-[#1a1a2e] leading-tight">{t(job.titleEn, job.titleId)}</h3>
                      <MiniGlass className="flex items-center gap-1 px-2 py-1 flex-shrink-0">
                        <Calendar size={9} className="text-[#9090b0]" />
                        <span className="text-[9px] sm:text-[10px] font-semibold text-[#5a5a7a] whitespace-nowrap">{job.period}</span>
                      </MiniGlass>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[11px] sm:text-xs font-bold text-[#818cf8]">{job.company}</span>
                      <span className="flex items-center gap-1 text-[10px] text-[#9090b0]"><MapPin size={8} />{job.location}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
                      {t(job.descEn, job.descId).map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <ChevronRight size={10} className="mt-0.5 flex-shrink-0 text-[#c084fc]" />
                          <span className="text-[11px] sm:text-xs text-[#5a5a7a] leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="pb-6 sm:pb-8">
          <SectionHeader icon={<Cpu size={15} />} titleEn="Tech Stack" titleId="Teknologi" lang={lang} />
          <GlassCard hover={false} className="p-5 sm:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-5">
              {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
            <div className="mt-5 pt-4 border-t border-[rgba(129,140,248,0.12)]">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {TAGS.map(tag => (
                  <MiniGlass key={tag} className="px-2.5 sm:px-3 py-1 sm:py-1.5">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5a5a7a]">{tag}</span>
                  </MiniGlass>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* CERTIFICATIONS */}
        <section className="pb-4">
          <SectionHeader icon={<Award size={15} />} titleEn="Certifications" titleId="Sertifikasi" lang={lang} />
          <GlassCard hover={false} className="p-4 sm:p-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {CERTS.map(cert => (
                <a key={cert.name} href={cert.href} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <MiniGlass className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 transition-all hover:-translate-y-0.5 cursor-pointer">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: `linear-gradient(135deg,${cert.from},${cert.to})`, boxShadow: "0 3px 8px rgba(0,0,0,0.1)" }}>{cert.icon}</div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#1a1a2e] leading-snug">{cert.name}</span>
                  </MiniGlass>
                </a>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* EDUCATION + JOURNAL */}
        <section className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <GlassCard hover={false} className="p-4 sm:p-5">
              <div className="flex gap-3 items-center">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg,#60a5fa,#818cf8)", boxShadow: "0 5px 18px rgba(96,165,250,0.28)" }}><GraduationCap size={19} /></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[12px] sm:text-[13px] font-extrabold text-[#1a1a2e] leading-tight">Universitas Teknologi Yogyakarta</h3>
                  <p className="text-[10px] sm:text-[11px] text-[#5a5a7a] mt-0.5">{t("Informatics S1", "S1 Informatika")} · 2021–2025</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg sm:text-xl font-black" style={{ backgroundImage: "linear-gradient(135deg,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>3.83</div>
                  <div className="text-[9px] text-[#9090b0]">GPA/4.00</div>
                </div>
              </div>
            </GlassCard>

            <a href="https://jurnal.iaii.or.id/index.php/RESTI/article/view/6105" target="_blank" rel="noopener noreferrer" className="no-underline">
              <GlassCard hover={true} className="p-4 sm:p-5 h-full">
                <div className="flex gap-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg,#f9a8d4,#c084fc)", boxShadow: "0 5px 18px rgba(249,168,212,0.28)" }}><BookOpen size={19} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="text-[12px] sm:text-[13px] font-extrabold text-[#1a1a2e]">SINTA 2 Journal</span>
                      <MiniGlass className="px-1.5 py-0.5"><span className="text-[9px] font-bold text-[#c084fc]">2025</span></MiniGlass>
                    </div>
                    <p className="text-[10px] font-bold text-[#818cf8] mb-1">Jurnal RESTI — IAII</p>
                    <p className="text-[10px] sm:text-[11px] text-[#5a5a7a] leading-relaxed">{t("Real-Time Location Monitoring & IoT for Dementia Disorder", "Pemantauan Lokasi Real-Time & IoT untuk Gangguan Demensia")}</p>
                    <div className="flex items-center gap-1 mt-2 text-[#c084fc]">
                      <span className="text-[9px] font-semibold">{t("Read Journal", "Baca Jurnal")}</span><ExternalLink size={9} />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pt-4 pb-6">
          <GlassCard hover={false} className="p-7 sm:p-10 text-center">
            <div className="w-14 h-14 rounded-[1.25rem] flex items-center justify-center text-white mx-auto mb-5" style={{ background: "linear-gradient(135deg,#818cf8,#f9a8d4)", boxShadow: "0 10px 30px rgba(129,140,248,0.32)" }}><Mail size={24} /></div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a2e] mb-1.5 tracking-tight">{t("Let's Work Together", "Mari Bekerja Sama")}</h2>
            <p className="text-xs sm:text-[13px] text-[#9090b0] mb-7">{t("Fullstack Developer · Open for projects & collaborations", "Pengembang Fullstack · Terbuka untuk proyek & kolaborasi")}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-2.5 mb-5">
              <a href="tel:+6281326298750" className="no-underline">
                <MiniGlass className="flex items-center justify-center gap-2 px-4 py-3 cursor-pointer transition-all hover:-translate-y-0.5">
                  <Phone size={13} style={{ color: "#22c55e" }} /><span className="text-xs sm:text-[13px] font-semibold text-[#1a1a2e]">+62 813-2629-8750</span>
                </MiniGlass>
              </a>
              <a href="mailto:dwiranggaoktaz@gmail.com" className="no-underline">
                <MiniGlass className="flex items-center justify-center gap-2 px-4 py-3 cursor-pointer transition-all hover:-translate-y-0.5">
                  <Mail size={13} style={{ color: "#818cf8" }} /><span className="text-xs sm:text-[13px] font-semibold text-[#1a1a2e]">dwiranggaoktaz@gmail.com</span>
                </MiniGlass>
              </a>
            </div>

            <div className="flex justify-center gap-2 sm:gap-3 mb-7 flex-wrap">
              {[
                { label: "LinkedIn", icon: <Linkedin size={14} />, href: "https://www.linkedin.com/in/dwi-rangga-okta-zuhdiyanto/", color: "#0077b5" },
                { label: "GitHub", icon: <Github size={14} />, href: "https://github.com/rraanggaaaa/", color: "#333" },
                { label: t("Portfolio", "Portofolio"), icon: <Globe size={14} />, href: "http://pheosesxsindis.my.id", color: "#818cf8" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <MiniGlass className="flex items-center gap-1.5 px-3.5 py-2.5 cursor-pointer transition-all hover:-translate-y-0.5">
                    <span style={{ color: l.color }}>{l.icon}</span>
                    <span className="text-xs font-semibold text-[#5a5a7a]">{l.label}</span>
                    <ArrowRight size={10} className="text-[#9090b0]" />
                  </MiniGlass>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[rgba(129,140,248,0.1)] text-[10px] text-[#9090b0]">
              © 2026 Dwi Rangga Okta Zuhdiyanto · {t("Lets Deploy! 🚀", "Ayo Deploy! 🚀")}
            </div>
          </GlassCard>
        </section>

      </div>
    </div>
  );
}