import React from "react";

export default function Footer() {
  return (
    <footer style={{position:"relative"}} className=" bg-black text-white py-16 overflow-hidden">
      {/* Background with vertical stripes pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] via-[#1a2332] to-black">
          {/* Vertical stripe pattern overlay */}
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-y-0 bg-gradient-to-t from-gray-400/20 via-gray-500/10 to-transparent"
                style={{
                  left: `${i * 3.33}%`,
                  width: '2%',
                }}
              />
            ))}
          </div>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-black" />
          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed italic">
Dr. Lotfi Benyahia is a dentist, business owner, & a marketing consultant, helping local businesses and dentists grow faster through effective marketing.            </p>
            <p className="text-sm text-blue-500 font-semibold">- L.BENYAHIA</p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="space-y-2">
            <p className="text-gray-400 text-sm">
              © 2025 Lotfi Benyahia. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Strategy, mindset, and clarity for those who want to win.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}