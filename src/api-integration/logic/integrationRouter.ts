import {
  fetchWeather,
  fetchNews,
  fetchCountries,
  //   connectEcho,
} from "../providers";

export const integrationRouter = async (
  provider: string,
  prompt: string
): Promise<string> => {
  switch (provider) {
    case "weather":
      return await fetchWeather(prompt);
    case "news":
      return await fetchNews(prompt);
    case "countries":
      return await fetchCountries(prompt);
    // case "echo":
    //   return await connectEcho(prompt);
    default:
      throw new Error(`Provider not supported: ${provider}`);
  }
};
