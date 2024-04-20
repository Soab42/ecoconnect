import Image from "next/image";
import React from "react";

export default function layout({ children, weather, aqi, temperature, wind }) {
  return (
    <div className="wrapper">
      {/* <!-- image background and overlay --> */}
      <Image
        src="/assets/images/background.png"
        className="bg-img"
        alt="bg"
        width={2000}
        height={1200}
      />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
