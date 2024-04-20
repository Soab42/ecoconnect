import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getWindData } from "@/lib/get-weather";
export default async function Wind({ lat, lon }) {
  const { speed, deg } = await getWindData(lat, lon);
  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          width={100}
          height={100}
          className="max-w-20"
          src="/assets/icons/icon_wind.png"
          alt="rain icon"
        />
        <h3 className="feature-title">{speed}</h3>
        <span className="feature-name">{deg}</span>
      </div>
    </Card>
  );
}
