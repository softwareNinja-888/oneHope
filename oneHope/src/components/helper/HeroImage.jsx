import React from "react";

export function HeroImage({img}) {

  return (
    
    <div className="relative w-64 h-72 md:w-92 md:h-92 rounded-full overflow-hidden border-4 border-yellow-600 shadow-xl shadow-gray-600">
      <img
        src={img}
        alt="Worship Gathering"
        className="w-full h-full object-cover"
      />
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full border-[6px] border-transparent border-r-yellow-600 border-t-yellow-600 rounded-full"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 bg-yellow-600 rounded-full"></div>
    </div>
  );
};
