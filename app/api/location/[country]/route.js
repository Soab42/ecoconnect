import { getLocationLatLong } from "@/lib/get-location";

export async function GET(req, { params: { country } }) {
  const data = await getLocationLatLong(country);
  try {
    const response = await fetch(
      `${process.env.NEXT_LOCATION_API_BASE_URL}?latitude=${data[0]?.latitude}&longitude=${data[0]?.longitude}`
    );
    const final = await response.json();
    return Response.json(final);
  } catch (error) {
    console.error(error.message);
  }
}
