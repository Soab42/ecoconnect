import { getLocationInfo, getLocationLatLong } from "@/lib/get-location";
import Image from "next/image";
import LocationSwitcher from "./LocationSwitcher";
export default async function Location({ lat, lon, location }) {
  const { continent, countryName, locality, city } = await getLocationInfo(
    lat,
    lon
  );
  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {continent}
          </h2>
          <LocationSwitcher lat={lat} lon={lon} location={location} />
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {countryName} | {city} ( {locality} )
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{" "}
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
}
