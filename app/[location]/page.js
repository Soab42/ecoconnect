import Location from "@/components/Location";
import { getLocationResolved } from "@/lib/get-location";
import { getAllParams } from "@/utils/getNextDefaultParams";
import { notFound } from "next/navigation";

export default async function DashBoard(params) {
  const { location, lon, lat } = getAllParams(params);
  const data = await getLocationResolved(location, lat, lon);
  if (!data.lat) {
    notFound();
  }
  return <Location lat={data.lat} lon={data.lon} />;
}
