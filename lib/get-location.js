export async function getLocationInfo(lat, lon) {
  try {
    const response = await fetch(
      `${process.env.NEXT_LOCATION_API_BASE_URL}?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
export const getLocationLatLong = async (location) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_BASE_URL}?q=${location}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
  );
  const data = await response.json();
  return data.results.map((country) => ({
    country: country.formatted,
    latitude: country.geometry.lat,
    longitude: country.geometry.lng,
  }));
};

export async function getLocationResolved(location, lat, lon) {
  if ((lat, lon)) {
    return { lat, lon };
  }

  const data = await getLocationLatLong(location);

  return { lat: data[0].latitude, lon: data[0].longitude };
}
