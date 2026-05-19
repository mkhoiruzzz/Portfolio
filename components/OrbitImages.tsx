// components/OrbitImages.tsx
"use client";
import { useState, useEffect } from "react";

export default function OrbitImages({ images, itemSize = 80 }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-[400px] w-full">
      <div className="relative w-[500px] h-[200px]">
        {/* Garis orbit */}
        <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full"></div>
        
        {/* Gambar */}
        {images.map((src, idx) => {
          const angle = (idx * 60 + rotation) * Math.PI / 180;
          const x = Math.cos(angle) * 200;
          const y = Math.sin(angle) * 70;
          
          return (
            <div
              key={idx}
              className="absolute"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                width: itemSize,
                height: itemSize,
                marginLeft: -itemSize / 2,
                marginTop: -itemSize / 2,
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg shadow-purple-500/50 border-2 border-purple-500/30 bg-gray-800 flex items-center justify-center">
                {/* Pakai img biasa dulu, bukan next/image */}
                <img
                  src={src}
                  alt="orbit"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150/FF5733/FFFFFF?text=Image";
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}