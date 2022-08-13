import { 
  Currencies, 
  Demonyms,
  Idd,
  Languages,
  Translations,
  Name
} from '../interfaces/country.interface';

export const countryNameFormat = (name: Name): string => {

  let nameFormatted: string[] = [];

  if(name.common) {
    nameFormatted.push(name.common);
  }
  
  if(name.official && !nameFormatted.includes(name.official)) {
    nameFormatted.push(name.official);
  }

  if(name.nativeName) {
    Object.values(name.nativeName).forEach(nameNative => {
      if(nameNative.common && !nameFormatted.includes(nameNative.common)) {
        nameFormatted.push(nameNative.common);
      }
      
      if(nameNative.official && !nameFormatted.includes(nameNative.official)) {
        nameFormatted.push(nameNative.official);
      }
    });
  }

  return nameFormatted.slice(0, 3).join(' | ');
};

export const currencyFormat = (currencies: Currencies): string => {
  let currencyFormatted: string[] = [];

  Object.values(currencies).forEach(currency => {
    currencyFormatted.push(`${currency.name} (${currency.symbol})`);
  })

  return currencyFormatted.join('|');
};

export const demonymsFormat = (demonyms: Demonyms): string => {
  let demonymsList: string[] = [];
  Object.values(demonyms).forEach(({f, m}) => {
    if(f && !demonymsList.includes(f)) {
      demonymsList.push(f);
    }
    if(m && !demonymsList.includes(m)) {
      demonymsList.push(m);
    }
  });

  return demonymsList.join(' | ');
};

export const phoneCodesFormat = (idd: Idd): string => {
  const { root, suffixes } = idd;

  const suffixesFormatted = suffixes?.map(sub => {
    return `${root}${sub}`;
  });

  return suffixesFormatted ? suffixesFormatted?.join(' | ') : '';
}

export const languagesFormat = (languages: Languages): string => {

  let languagesFormatted: string[] = [];

  Object.values(languages).forEach(language => {
    languagesFormatted.push(language);
  });

  return languagesFormatted.join(' | ');
};

export const translationsFormat = (translations: Translations): string[] => {
  let translationsFormatted: string[] = [];

  Object.values(translations).forEach(({common}) => {
    if(common && !translationsFormatted.includes(common)) {
      translationsFormatted.push(common); 
    }
  })

  return translationsFormatted;
};
