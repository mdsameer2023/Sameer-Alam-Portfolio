import React, { useRef } from "react";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";

function ScrollRevealText({ children, style }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 45%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const reveal = useTransform(progress, [0, 1], [-10, 110]);
  const backgroundImage = useMotionTemplate`linear-gradient(to bottom, ${style.color} 0%, ${style.color} ${reveal}%, rgba(100, 94, 75, 0.28) ${reveal}%, rgba(100, 94, 75, 0.28) 100%)`;

  return (
    <motion.p ref={ref} style={reducedMotion ? style : { ...style, backgroundImage, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent" }}>
      {children}
    </motion.p>
  );
}
export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="01" title="About" em="me" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 64,
            position: "relative",
            zIndex: 10,
          }}
          className="kk-grid-collapse">
          {/* Left Column: Elegant Typography */}
          <Reveal
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              justifyContent: "center",
            }}>
            <ScrollRevealText
              style={{
                margin: 0,
                fontSize: 24,
                lineHeight: 1.5,
                color: c.ink,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}>
              I'm a Full-Stack Developer and Integrated MCA student at Manipal
              University, passionate about building modern web applications and
              AI-powered solutions.
            </ScrollRevealText>
            <ScrollRevealText
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.7,
                color: c.inkSoft,
              }}>
              I specialize in{" "}
              <strong>
                React.js, Next.js, Node.js, Express.js, and MongoDB
              </strong>
              , developing responsive, scalable, and user-friendly applications
              that solve real-world problems.
            </ScrollRevealText>
            <ScrollRevealText
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.7,
                color: c.inkSoft,
              }}>
              With{" "}
              <strong>
                one year of Web Development Internship experience at Pixel Flame
                Software Pvt. Ltd.
              </strong>
              , I've gained hands-on experience in frontend development, backend
              APIs, database management, and building practical web solutions.
            </ScrollRevealText>
            <ScrollRevealText
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.7,
                color: c.inkSoft,
              }}>
              Currently pursuing my{" "}
              <strong>
                Integrated MCA (1st Semester) at Manipal University
              </strong>
              , I'm strengthening my knowledge of software engineering, modern
              technologies, and application development.
            </ScrollRevealText>
            <ScrollRevealText
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.7,
                color: c.inkSoft,
              }}>
              Beyond traditional web development, I'm exploring{" "}
              <strong>
                Generative AI, LangChain, RAG, and LLM integrations
              </strong>{" "}
              to create intelligent applications that combine modern web
              technologies with artificial intelligence.
            </ScrollRevealText>
            <ScrollRevealText
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.7,
                color: c.inkSoft,
              }}>
              I enjoy transforming creative ideas into functional products,
              continuously learning new technologies, and solving challenging
              development problems.
            </ScrollRevealText>
          </Reveal>

          {/* Right Column: Premium Bento Grid */}
          <Reveal
            delay={0.1}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              alignContent: "start",
            }}>
            {/* Bento 1: Large Creator Card */}
            <div
              className="about-hover-card"
              style={{
                gridColumn: "1 / -1",
                background: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${c.line}`,
                borderRadius: 24,
                padding: 32,
                position: "relative",
                overflow: "hidden",
              }}>
              <div style={{ position: "relative", zIndex: 2 }}>
                <span
                  style={{
                    ...mono,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: c.mossDeep,
                    fontWeight: 600,
                  }}>
                  Creator Impact
                </span>
                <h4
                  style={{
                    ...serif,
                    fontSize: 48,
                    fontWeight: 600,
                    color: c.ink,
                    margin: "8px 0 4px 0",
                    letterSpacing: "-0.02em",
                  }}>
                  100K+
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                    marginTop: 4,
                  }}>
                  <p
                    style={{
                      color: c.inkSoft,
                      fontSize: 14,
                      margin: 0,
                      maxWidth: 220,
                    }}>
                    Community members learning tech and engineering together.
                  </p>

                  <a
                    href="https://www.instagram.com/tech_sameer.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: c.ink,
                      color: c.paper,
                      padding: "10px 20px",
                      borderRadius: 30,
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.background = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.background = c.ink;
                    }}>
                    Visit Channel
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Decorative accent */}
              <div
                style={{
                  position: "absolute",
                  right: -20,
                  bottom: -40,
                  fontSize: 120,
                  opacity: 0.03,
                  ...serif,
                  fontWeight: 800,
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                YT
              </div>
            </div>

            {/* Bento 2: Academic */}
            <div
              className="about-hover-card"
              style={{
                background: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${c.line}`,
                borderRadius: 24,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <div>
                <span
                  style={{
                    ...mono,
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: c.gold,
                    fontWeight: 600,
                  }}>
                  Education
                </span>
                <h4
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: c.ink,
                    margin: "12px 0 4px 0",
                    letterSpacing: "-0.01em",
                  }}>
                  Integrated MCA
                </h4>
                <p
                  style={{
                    color: c.inkSoft,
                    fontSize: 13,
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                  1th Semester <br />
                  Manipal University (2026-2029)
                </p>
              </div>
            </div>

            {/* Bento 3: Focus */}
            <div
              className="about-hover-card"
              style={{
                background: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${c.line}`,
                borderRadius: 24,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <div>
                <span
                  style={{
                    ...mono,
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: c.clay,
                    fontWeight: 600,
                  }}>
                  Core Focus
                </span>
                <h4
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: c.ink,
                    margin: "12px 0 4px 0",
                    letterSpacing: "-0.01em",
                  }}>
                  Full-Stack & AI
                </h4>
                <p
                  style={{
                    color: c.inkSoft,
                    fontSize: 13,
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                  React • Next.js • Node.js MongoDB • Generative AI
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (hover: hover) {
          .about-hover-card {
            transition: transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease;
          }
          .about-hover-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 14px 30px rgba(42, 39, 30, 0.12);
            border-color: rgba(60, 68, 50, 0.3) !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-hover-card { transition: none; }
        }
      `}</style>

      {/* Dynamic pulse CSS for dashboard widgets */}
      <style>{`
        @keyframes kk-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0.2); }
          70% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(42,39,30,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0); }
        }
      `}</style>
    </section>
  );
}
