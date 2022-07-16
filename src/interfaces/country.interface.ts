export interface Country {
  name?:         Name;
  tld?:          string[];
  cca2?:         string;
  ccn3?:         string;
  cca3?:         string;
  cioc?:         string;
  independent?:  boolean;
  status?:       string;
  unMember?:     boolean;
  currencies?:   Currencies;
  idd?:          Idd;
  capital?:      string[];
  altSpellings?: string[];
  region?:       string;
  subregion?:    string;
  languages?:    { [id: string] : string };
  translations?: { [key: string]: Translation };
  latlng?:       number[];
  landlocked?:   boolean;
  borders?:      string[];
  area?:         number;
  demonyms?:     Demonyms;
  flag?:         string;
  maps?:         Maps;
  population?:   number;
  gini?:         Gini;
  fifa?:         string;
  car?:          Car;
  timezones?:    string[];
  continents?:   string[];
  flags?:        Flags;
  coatOfArms?:   Flags;
  startOfWeek?:  string;
  capitalInfo?:  CapitalInfo;
  postalCode?:   PostalCode;
}

interface Name {
  common?:     string;
  official?:   string;
  nativeName?: NativeName;
}

interface NativeName {
  [id: string]: Translation;
}

interface Translation {
  official?: string;
  common?:   string;
}

interface Currencies {
  [id: string] : Currency;
}

interface Currency {
  name?:   string;
  symbol?: string;
}

interface Idd {
  root?:     string;
  suffixes?: string[];
}

interface Demonyms {
  [id: string] : Demony;
}

 interface Demony {
  f?: string;
  m?: string;
}

interface Maps {
  googleMaps?:     string;
  openStreetMaps?: string;
}

interface Gini {
  [id: string] : number;
}

interface Car {
  signs?: string[];
  side?:  string;
}

interface Flags {
  png?: string;
  svg?: string;
}

interface CapitalInfo {
  latlng?: number[];
}

interface PostalCode {
  format?: string;
  regex?:  string;
}
