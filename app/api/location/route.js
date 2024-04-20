import { getLocationInfo } from "@/lib/get-location";

export async function GET() {
  const locationInfo = await getLocationInfo();
  return Response.json(locationInfo);
}
