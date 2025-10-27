import React from "react";

interface ArrowIconProps {
  variant?: "green" | "red" | "purple";
  className?: string;
  rotation?: -90 | 90 | 0;
}

export default function ArrowIcon({
  variant = "green",
  className = "w-8 h-8",
  rotation = -90,
}: ArrowIconProps) {
  const gradientId = `${variant}_gradient_${rotation}`;

  const gradients = {
    green: { start: "#3BBCAC", end: "#44B549" },
    red: { start: "#CE5B48", end: "#EF1D5C" },
    purple: { start: "#A14CAC", end: "#133BD1" },
  };

  return (
    <svg
      viewBox="0 0 25 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M14.1878 42.0047H11.8361L11.4341 41.3079C11.4341 41.3079 1.23142 23.6002 1.17215 23.4961L0.986328 23.1725V22.7993L0.986328 0.83371L4.4593 0.83371L12.9863 15.4993L21.5134 0.835312L24.9543 0.835312L24.9863 23.3551L14.1878 42.0063V42.0047ZM3.76887 22.4292C4.89342 24.382 10.7965 34.6279 13.0152 38.4789L22.2022 22.6102L22.1782 5.22618L12.9863 21.0356L3.76887 5.18293L3.76887 22.4292Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor={gradients[variant].start} />
          <stop offset="100%" stopColor={gradients[variant].end} />
        </linearGradient>
      </defs>
    </svg>
  );
}
