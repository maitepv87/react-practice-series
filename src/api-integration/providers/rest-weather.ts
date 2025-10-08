const WEATHER_API_URL = "https://api.weatherapi.com/v1/current.json";
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (city: string): Promise<string> => {
  const url = `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${encodeURIComponent(
    city
  )}&lang=es`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    const temp = data.current?.temp_c;
    const condition = data.current?.condition?.text;
    const location = data.location?.name;

    if (!temp || !condition || !location) {
      throw new Error("Incomplete data in the response.");
    }

    return `At ${location} there is ${temp}°C and there is ${condition.toLowerCase()}.`;
  } catch (error) {
    return `Could not get weather for "${city}".`;
  }
};
