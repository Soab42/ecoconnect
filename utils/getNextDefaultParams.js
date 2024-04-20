export function getAllParams(params) {
  const {
    params: { location },
    searchParams: { lon, lat },
  } = params;
  return { location, lat, lon };
}
