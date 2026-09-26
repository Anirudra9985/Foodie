import React, { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const heroFuturisticStyles = `
.hero-futuristic {
  position: relative;
  overflow: hidden;
  background: #090d16;
  font-family: 'Outfit', sans-serif;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.hero-futuristic .hero-overlay-content {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 20;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  text-align: center;
}
.hero-futuristic .fade-in {
  opacity: 0;
  will-change: transform, opacity, filter, text-shadow;
  animation: 0.85s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards fadeInUpBounce,
    1.2s linear 0.7s glitch;
  transform: translateY(60px) scale(0.85) rotate(-4deg);
}
.hero-futuristic .fade-in-subtitle {
  opacity: 0;
  will-change: transform, opacity, filter, text-shadow;
  animation: 1.1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards fadeInUpBounce,
    1.3s linear 1s glitch;
  transform: translateY(40px) scale(0.92);
}
@keyframes fadeInUpBounce {
  0% { opacity: 0; transform: translateY(60px) scale(0.85) rotate(-4deg); }
  40% { opacity: 0.7; transform: translateY(-10px) scale(1.05) rotate(2deg); }
  70% { opacity: 1; transform: translateY(4px) scale(0.98) rotate(-1deg); }
  100% { opacity: 1; transform: translateY(0) scale(1) rotate(0); }
}
@keyframes glitch {
  0% { text-shadow: 2px 0 #ff4b3e, -2px 0 #ff8f00; filter: blur(0.5px); transform: translate(0); }
  10% { text-shadow: -2px 0 #ff4b3e, 2px 0 #ff8f00; filter: blur(1px); transform: translate(-2px); }
  20% { text-shadow: 2px 2px #ff4b3e, -2px -2px #ff8f00; filter: blur(0.5px); transform: translate(2px); }
  30% { text-shadow: -1px 1px #ff4b3e, 1px -1px #ff8f00; filter: blur(1px); transform: translate(-1px); }
  40% { text-shadow: 1px -1px #ff4b3e, -1px 1px #ff8f00; filter: blur(0.5px); transform: translate(1px); }
  50% { text-shadow: 0 0 #ff4b3e, 0 0 #ff8f00; filter: blur(0); transform: translate(0); }
  100% { text-shadow: none; filter: none; transform: none; }
}
.hero-futuristic .explore-btn {
  z-index: 30;
  color: #fff;
  letter-spacing: 0.05em;
  cursor: pointer;
  pointer-events: auto;
  opacity: 0;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255, 75, 62, 0.5);
  border-radius: 9999px;
  outline: none;
  align-items: center;
  gap: 12px;
  padding: 14px 36px;
  font-size: 1.05rem;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1.8s forwards fadeInBtn;
  display: flex;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 4px 25px rgba(255, 75, 62, 0.35);
}
.hero-futuristic .explore-btn:hover {
  background: var(--color-primary-gradient);
  border-color: #ff8f00;
  transform: translate(-50%) translateY(-4px) scale(1.04);
  box-shadow: 0 8px 30px rgba(255, 75, 62, 0.6);
}
@keyframes fadeInBtn {
  0% { opacity: 0; transform: translate(-50%) translateY(30px) scale(0.98); }
  60% { opacity: 0.7; transform: translate(-50%) translateY(-6px) scale(1.03); }
  100% { opacity: 1; transform: translate(-50%) translateY(0) scale(1); }
}
.hero-futuristic .explore-arrow {
  align-items: center;
  display: flex;
}
.hero-futuristic .arrow-svg {
  animation: 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate arrowBounce;
  display: block;
}
@keyframes arrowBounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(8px); }
}
.hero-badge-tag {
  background: rgba(255, 75, 62, 0.15);
  border: 1px solid rgba(255, 75, 62, 0.35);
  color: #ff4b3e;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
`;

// Glowing particle wave background mesh
const AnimatedParticleGrid = () => {
  const meshRef = useRef();
  const count = 1200;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color1 = new THREE.Color("#ff4b3e");
    const color2 = new THREE.Color("#ff8f00");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
      meshRef.current.rotation.x = Math.cos(t * 0.2) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const HeroFuturistic = ({ onExploreClick }) => {
  const titleWords = "TASTE THE CULINARY VIBE".split(" ");
  const subtitle = "Discover & Review Trending Short Food Reels From Local Chefs";
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 400);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 600);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <>
      <style>{heroFuturisticStyles}</style>
      <div className="hero-futuristic">
        {/* Text Overlay */}
        <div className="hero-overlay-content">
          <div className="hero-badge-tag">
            <span>🔥</span> Next-Gen Food Community
          </div>

          <div style={{ fontSize: 'clamp(2rem, 5vw, 4.2rem)', fontWeight: 900, textTransform: 'uppercase' }}>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', color: '#fff' }}>
              {titleWords.map((word, index) => (
                <div
                  key={index}
                  className={index < visibleWords ? "fade-in" : ""}
                  style={{
                    animationDelay: `${index * 0.12 + (delays[index] || 0)}s`,
                    opacity: index < visibleWords ? undefined : 0,
                    background: index >= 2 ? 'var(--color-primary-gradient)' : 'none',
                    WebkitBackgroundClip: index >= 2 ? 'text' : 'none',
                    WebkitTextFillColor: index >= 2 ? 'transparent' : 'initial'
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontSize: 'clamp(0.95rem, 2vw, 1.4rem)', marginTop: '0.75rem', color: '#94a3b8', fontWeight: 600, maxWidth: '750px' }}>
            <div
              className={subtitleVisible ? "fade-in-subtitle" : ""}
              style={{
                animationDelay: `${titleWords.length * 0.12 + 0.2}s`,
                opacity: subtitleVisible ? undefined : 0,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>

        {/* Scroll down button */}
        <button
          className="explore-btn"
          onClick={onExploreClick}
          aria-label="Scroll to explore food reels"
        >
          Scroll to explore reels
          <span className="explore-arrow">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-svg"
            >
              <path
                d="M11 5V17"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M6 12L11 17L16 12"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>

        {/* 3D Canvas Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AnimatedParticleGrid />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default HeroFuturistic;
