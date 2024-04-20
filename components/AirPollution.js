import { getAqiData } from "@/lib/get-weather";
import Image from "next/image";
import { getAQIRating } from "@/utils/getAQIRating";
export default async function AirPollution({ lat, lon }) {
  const { main, components } = await getAqiData(lat, lon);
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-6 ">
      <div className="card">
        <div className="2xl:col-span-6"></div>
        <h6 className="feature-name">Air Pollution & Quality</h6>
        {/* <!-- info items --> */}
        <div className="mt-3 space-y-2 lg:space-y-3">
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                width={100}
                height={50}
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
              />
              Air Quality Index
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {getAQIRating(main?.aqi)}
            </span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                width={100}
                height={50}
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
              />
              Carbon Monoxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.co} µg/m³
            </span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                width={100}
                height={50}
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
              />
              Nitric Oxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.no} ppm
            </span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                width={100}
                height={50}
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
              />
              Nitrogen Dioxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.nd} ppm
            </span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                width={100}
                height={50}
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
              />
              Ozone
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.o} µg/m³
            </span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                width={100}
                height={50}
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
              />
              Sulfur Dioxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.sd} ppm
            </span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                width={100}
                height={50}
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
              />
              PM2.5
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.co} µg/m³
            </span>
          </div>
          {/* <!-- item ends --> */}
        </div>
        {/* <!-- info items ends --> */}
      </div>
    </div>
  );
}
