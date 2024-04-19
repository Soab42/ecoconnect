import React from "react";
import Card from "./Card";

export default function AirPollution() {
  return (
    <Card>
      <h6 class="feature-name">Air Pollution & Quality</h6>
      {/* <!-- info items --> */}
      <div class="mt-3 space-y-2 lg:space-y-3">
        {/* <!-- item --> */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <img
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Air Quality Index
          </div>
          <span class="text-right text-sm text-white lg:text-base">Good</span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <img
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Carbon Monoxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            201.94 µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <img
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Nitric Oxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            0.01877 ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <img
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Nitrogen Dioxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            0.7711 ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <img
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Ozone
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            68.664 µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <img
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Sulfur Dioxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            0.6407 ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <img
              class="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            PM2.5
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            0.5 µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
      </div>
      {/* <!-- info items ends --> */}
    </Card>
  );
}
