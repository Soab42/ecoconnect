import Temperature from "@/components/Temperature";
import { getLocationResolved } from "@/lib/get-location";
import { getAllParams } from "@/utils/getNextDefaultParams";

export default async function TemperatureSection(params) {
  const { lat, lon, location } = getAllParams(params);
  const data = await getLocationResolved(location, lat, lon);

  return <Temperature lat={data.lat} lon={data.lon} />;
}
