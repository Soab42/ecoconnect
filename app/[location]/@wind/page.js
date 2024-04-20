import Wind from "@/components/Wind";
import { getLocationResolved } from "@/lib/get-location";
import { getAllParams } from "@/utils/getNextDefaultParams";

export default async function WindSection(params) {
  const { lat, lon, location } = getAllParams(params);
  const data = await getLocationResolved(location, lat, lon);

  return <Wind lat={data.lat} lon={data.lon} />;
}
