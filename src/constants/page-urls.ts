const baseUrl = 'https://restcountries.com/v3.1';

export const countryEndpoint = (country?: string): string => {
  return `${baseUrl}/name/${country?.replaceAll('-', ' ')}?fullText=true`;
}

export const regionEndpoint = (region?: string): string => {
  return `${baseUrl}/region/${region?.replaceAll('-', ' ')}`;
}

export const searchEndpoint = (country?: string): string => {
  return `${baseUrl}/name/${country?.replaceAll('-', ' ')}`;
}
