export async function getAqiData(lat, lon) {
  try {
    const response = await fetch(
      `${process.env.NEXT_AIR_POLLUTION_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_WEATHER_API_KEY}&&units=metric`
    );
    const data = await response.json();
    return data.list[0];
  } catch (error) {
    console.error(error.message);
  }
}
export async function getWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `${process.env.NEXT_WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_WEATHER_API_KEY}&&units=metric`
    );
    const data = await response.json();
    return data?.weather[0];
  } catch (error) {
    console.error(error.message);
  }
}
export async function getWindData(lat, lon) {
  try {
    const response = await fetch(
      `${process.env.NEXT_WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_WEATHER_API_KEY}&&units=metric`
    );
    const data = await response.json();
    return data.wind;
  } catch (error) {
    console.error(error.message);
  }
}
export async function getTempData(lat, lon) {
  try {
    const response = await fetch(
      `${process.env.NEXT_WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_WEATHER_API_KEY}&units=metric&`
    );
    const data = await response.json();
    return data.main;
  } catch (error) {
    console.error(error.message);
  }
}
