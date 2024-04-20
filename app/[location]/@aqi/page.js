import AirPollution from "@/components/AirPollution";
import { getLocationResolved } from "@/lib/get-location";
import { getAllParams } from "@/utils/getNextDefaultParams";

export default async function WeatherSection(param) {
  const { lat, lon, location } = getAllParams(param);

  const data = await getLocationResolved(location, lat, lon);
  return <AirPollution lat={data.lat} lon={data.lon} />;
}
