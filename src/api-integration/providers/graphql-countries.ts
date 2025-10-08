const GRAPHQL_API_URL = "https://countries.trevorblades.com/";

export const fetchCountries = async (code: string): Promise<string> => {
  const query = `
    query GetCountry($code: ID!) {
      country(code: $code) {
        name
        code
        emoji
        continent {
          name
        }
      }
    }
  `;

  const variables = { code: code.toUpperCase() };

  try {
    const response = await fetch(GRAPHQL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const { data } = await response.json();

    if (!data?.country) {
      return `No information found for code "${code}".`;
    }

    const { name, emoji, continent } = data.country;

    return `${emoji} ${name} is on the continent ${continent.name}.`;
  } catch (error) {
    console.log(error);
    return `Could not get information for country "${code}".`;
  }
};
