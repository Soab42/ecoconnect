import Weather from "@/components/Weather";
import { getLocationResolved } from "@/lib/get-location";
import { getAllParams } from "@/utils/getNextDefaultParams";
import React from "react";

export default async function WeatherSection(params) {
  const { lat, lon, location } = getAllParams(params);
  const data = await getLocationResolved(location, lat, lon);

  return <Weather lat={data.lat} lon={data.lon} />;
}
