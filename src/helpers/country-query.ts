export const countryQueryParamCoder = (countryId: string): string => {
  return countryId.trim().replaceAll(' ', '-').toLocaleLowerCase();
};

export const countryQueryParamDecoder = (countryQuery: string): string => {
  return countryQuery.trim().replace('-', ' ');
};
