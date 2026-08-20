"use client";

import React from "react";

// Types
export interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}

export interface DockIcon {
  src: string;
  alt: string;
  onClick?: () => void;
}

// Glass Effect Wrapper Component - Noticeable Shiny Apple Liquid Glass
export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle: React.CSSProperties = {
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(255, 255, 255, 0.3)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden transition-all duration-500 ${className}`}
      style={glassStyle}
    >
      {/* Background Refraction & Distortion Layer */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit"
        style={{
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />

      {/* Glass Tint Layer */}
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.25) 100%)",
        }}
      />

      {/* Glass Specular Edge Highlight Layer */}
      <div
        className="absolute inset-0 z-20 rounded-inherit overflow-hidden pointer-events-none border border-white/40"
        style={{
          boxShadow:
            "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.7), inset -1.5px -1.5px 2px 0 rgba(255, 255, 255, 0.4)",
        }}
      />

      {/* Crisp Content */}
      <div className="relative z-30 w-full flex items-center justify-between">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

// Dock Component
export const GlassDock: React.FC<{ icons: DockIcon[]; href?: string }> = ({
  icons,
  href,
}) => (
  <GlassEffect
    href={href}
    className="rounded-3xl p-3 hover:p-4 hover:rounded-4xl"
  >
    <div className="flex items-center justify-center gap-2 rounded-3xl p-3 py-0 px-0.5 overflow-hidden">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="w-16 h-16 transition-all duration-700 hover:scale-110 cursor-pointer"
          style={{
            transformOrigin: "center center",
            transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
          }}
          onClick={icon.onClick}
        />
      ))}
    </div>
  </GlassEffect>
);

// Button Component
export const GlassButton: React.FC<{ children: React.ReactNode; href?: string }> = ({
  children,
  href,
}) => (
  <GlassEffect
    href={href}
    className="rounded-3xl px-10 py-6 hover:px-11 hover:py-7 hover:rounded-4xl overflow-hidden"
  >
    <div
      className="transition-all duration-700 hover:scale-95"
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
      }}
    >
      {children}
    </div>
  </GlassEffect>
);

// High-Visibility SVG Liquid Glass Refraction Filter
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none", position: "absolute", width: 0, height: 0 }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.015 0.03"
        numOctaves="2"
        seed="5"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1.2" exponent="8" offset="0.4" />
        <feFuncG type="gamma" amplitude="0.8" exponent="1" offset="0.1" />
        <feFuncB type="gamma" amplitude="1" exponent="4" offset="0.3" />
      </feComponentTransfer>
      <feGaussianBlur in="mapped" stdDeviation="2" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="6"
        specularConstant="1.4"
        specularExponent="40"
        lightingColor="#ffffff"
        result="specLight"
      >
        <fePointLight x="-150" y="-150" z="250" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      {/* Moderate Scale 35 for Noticeable Fluid Glass Refraction */}
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="35"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

export const Component = () => {
  const dockIcons: DockIcon[] = [
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a13d1acfd046f503f987c1c95af582c8_low_res_Claude.png",
      alt: "Claude",
    },
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9e80c50a5802d3b0a7ec66f3fe4ce348_low_res_Finder.png",
      alt: "Finder",
    },
  ];

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full">
      <GlassFilter />
      <GlassDock icons={dockIcons} />
    </div>
  );
};
