"use client";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
/* ─────────────────────────────────────────────
   Botanical illustration — drawn-on SVG paths
───────────────────────────────────────────── */
function BotanicalIllustration() {
  return (
    <svg
      width="100%"
      viewBox="0 0 300 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: 340 }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes svgDraw {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes svgPop {
          from { opacity: 0; transform: scale(0); }
          to   { opacity: 1; transform: scale(1); }
        }
        .sd { stroke-dasharray: 1; pathLength: 1; stroke-dashoffset: 1;
              animation: svgDraw 1.8s cubic-bezier(0.4,0,0.2,1) forwards; }
        .sp { opacity: 0; animation: svgPop 0.35s ease-out forwards; }
        .d0{animation-delay:0.4s} .d1{animation-delay:0.6s} .d2{animation-delay:0.8s}
        .d3{animation-delay:1.0s} .d4{animation-delay:1.2s} .d5{animation-delay:1.4s}
        .d6{animation-delay:0.5s} .d7{animation-delay:0.7s} .d8{animation-delay:0.9s}
        .d9{animation-delay:1.1s} .da{animation-delay:1.6s} .db{animation-delay:1.7s}
        .dc{animation-delay:1.8s} .dd{animation-delay:1.9s} .de{animation-delay:2.0s}
      `}</style>

      <circle className="sd d0" cx="150" cy="190" r="118" stroke="#c4503a" strokeWidth="0.8" pathLength="1" />
      <circle className="sd d1" cx="150" cy="190" r="82" stroke="#8fa882" strokeWidth="0.5" strokeDasharray="4 6" pathLength="1" />

      <line className="sd d1" x1="150" y1="72" x2="150" y2="308" stroke="#2c2416" strokeWidth="1" pathLength="1" />
      <line className="sd d1" x1="32" y1="190" x2="268" y2="190" stroke="#2c2416" strokeWidth="1" pathLength="1" />

      <path className="sd d3" d="M150 72 C135 105 120 128 150 148 C180 128 165 105 150 72Z" fill="#8fa882" fillOpacity="0.55" stroke="#8fa882" strokeWidth="0.3" pathLength="1" />
      <path className="sd d4" d="M150 308 C135 275 120 252 150 232 C180 252 165 275 150 308Z" fill="#8fa882" fillOpacity="0.55" stroke="#8fa882" strokeWidth="0.3" pathLength="1" />
      <path className="sd d5" d="M32 190 C65 175 88 160 108 190 C88 220 65 205 32 190Z" fill="#c4503a" fillOpacity="0.42" stroke="#c4503a" strokeWidth="0.3" pathLength="1" />
      <path className="sd d5" d="M268 190 C235 175 212 160 192 190 C212 220 235 205 268 190Z" fill="#c4503a" fillOpacity="0.42" stroke="#c4503a" strokeWidth="0.3" pathLength="1" />

      <path className="sd d6" d="M83 122 C105 138 120 158 150 168" stroke="#8fa882" strokeWidth="0.9" fill="none" pathLength="1" />
      <path className="sd d6" d="M83 122 C90 108 96 98 108 92" stroke="#8fa882" strokeWidth="0.9" fill="none" pathLength="1" />
      <path className="sd d6" d="M83 122 C70 110 66 98 74 88" stroke="#8fa882" strokeWidth="0.9" fill="none" pathLength="1" />

      <path className="sd d7" d="M217 122 C195 138 180 158 150 168" stroke="#c4503a" strokeWidth="0.9" fill="none" strokeOpacity="0.7" pathLength="1" />
      <path className="sd d7" d="M217 122 C210 108 204 98 192 92" stroke="#c4503a" strokeWidth="0.9" fill="none" strokeOpacity="0.7" pathLength="1" />
      <path className="sd d7" d="M217 122 C230 110 234 98 226 88" stroke="#c4503a" strokeWidth="0.9" fill="none" strokeOpacity="0.7" pathLength="1" />

      <path className="sd d8" d="M83 258 C105 242 120 222 150 212" stroke="#8fa882" strokeWidth="0.9" fill="none" pathLength="1" />
      <path className="sd d8" d="M83 258 C70 268 64 280 72 290" stroke="#8fa882" strokeWidth="0.9" fill="none" pathLength="1" />
      <path className="sd d9" d="M217 258 C195 242 180 222 150 212" stroke="#c4503a" strokeWidth="0.9" fill="none" strokeOpacity="0.7" pathLength="1" />
      <path className="sd d9" d="M217 258 C230 268 236 280 228 290" stroke="#c4503a" strokeWidth="0.9" fill="none" strokeOpacity="0.7" pathLength="1" />

      <circle className="sp da" cx="150" cy="190" r="5.5" fill="#2c2416" />
      <circle className="sp db" cx="150" cy="72" r="3.5" fill="#c4503a" />
      <circle className="sp db" cx="150" cy="308" r="3.5" fill="#c4503a" />
      <circle className="sp dc" cx="32" cy="190" r="3.5" fill="#8fa882" />
      <circle className="sp dc" cx="268" cy="190" r="3.5" fill="#8fa882" />
      <circle className="sp dd" cx="108" cy="140" r="2.8" fill="#c4503a" fillOpacity="0.7" />
      <circle className="sp dd" cx="192" cy="140" r="2.8" fill="#c4503a" fillOpacity="0.7" />
      <circle className="sp de" cx="108" cy="240" r="2.8" fill="#8fa882" fillOpacity="0.7" />
      <circle className="sp de" cx="192" cy="240" r="2.8" fill="#8fa882" fillOpacity="0.7" />
      <circle className="sp dd" cx="218" cy="95" r="2" fill="#2c2416" fillOpacity="0.35" />
      <circle className="sp dd" cx="82" cy="95" r="2" fill="#2c2416" fillOpacity="0.35" />
      <circle className="sp de" cx="218" cy="285" r="2" fill="#2c2416" fillOpacity="0.35" />
      <circle className="sp de" cx="82" cy="285" r="2" fill="#2c2416" fillOpacity="0.35" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Home Page
───────────────────────────────────────────── */
export default function Home() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { background: #f9f5ef; color: #2c2416; font-family: 'DM Sans', sans-serif; height: 100%; }

        @keyframes homeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes homeFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .anim-1 { animation: homeUp 0.75s 0.25s both; }
        .anim-2 { animation: homeUp 0.75s 0.45s both; }
        .anim-3 { animation: homeUp 0.75s 0.65s both; }
        .anim-4 { animation: homeUp 0.75s 0.85s both; }
        .anim-illus { animation: homeFade 0.9s 0.35s both; }

        .home-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.8rem 1.9rem;
          background: #2c2416;
          color: #f9f5ef;
          font-family: 'Fraunces', serif;
          font-size: 1rem;
          font-weight: 300;
          font-style: italic;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: background 0.22s ease, gap 0.22s ease;
        }
        .home-cta:hover  { background: #c4503a; gap: 1rem; }
        .home-cta:active { transform: scale(0.98); }

        /* Responsive */
        @media (max-width: 680px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .illus-wrap { display: none !important; }
        }
      `}</style>

      <div style={{ background: "#f9f5ef", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Top bar */}
        <Header />

        {/* Hero */}
        <main
          className="hero-grid"
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "3rem",
            padding: "2rem 2.8rem 3rem",
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Text side */}
          <div>
            {/* Terracotta rule */}
            <div className="anim-1" style={{ width: 48, height: 1.5, background: "#c4503a", marginBottom: "1.4rem" }} />

            <p className="anim-1" style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "#c4503a", marginBottom: "1.2rem" }}>
              A Technology Journal
            </p>

            <h1
              className="anim-2"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                lineHeight: 1.06,
                fontWeight: 700,
                color: "#2c2416",
                marginBottom: "1.3rem",
                letterSpacing: "-0.01em",
              }}
            >
              Thoughts, stories
              <br />
              &amp;{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "#c4503a" }}>
                quiet observations
              </em>
            </h1>

            <p
              className="anim-3"
              style={{ fontSize: "1rem", lineHeight: 1.8, color: "#6b5d50", fontWeight: 300, maxWidth: 380, marginBottom: "2.4rem" }}
            >
              A place where ideas unfold slowly — essays on design,
              technology, creativity, and the beauty of noticing things.
            </p>

            <div className="anim-4">
              <button className="home-cta" onClick={() => router.push("/blogs")}>
                Read the blog
                <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>→</span>
              </button>
            </div>
          </div>

          {/* Illustration side */}
          <div className="anim-illus illus-wrap" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <BotanicalIllustration />
          </div>
        </main>

        {/* Footer strip */}
        <footer style={{ padding: "1.2rem 2.8rem", borderTop: "0.5px solid #e2d8cc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.72rem", color: "#9b8b79", letterSpacing: "0.06em" }}>Design · Technology · Life</span>
          <span style={{ fontSize: "0.72rem", color: "#9b8b79", letterSpacing: "0.08em", textTransform: "uppercase" }}>Essays &amp; Reflections</span>
        </footer>

      </div>
    </>
  );
}