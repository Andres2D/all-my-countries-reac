const baseUrl = 'https://restcountries.com/v3.1';

export const countryEndpoint = (country?: string): string => {
  return `${baseUrl}/name/${country?.replace('-', ' ')}?fullText=true`;
}
