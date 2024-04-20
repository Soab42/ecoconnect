import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getWeatherData } from "@/lib/get-weather";
export default async function Weather({ lat, lon }) {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          height={100}
          width={100}
          src="/assets/icons/icon_rain.png"
          alt="rain icon"
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
}
