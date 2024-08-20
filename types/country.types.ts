interface ICountry {
  code: string;
  name: string;
  continent: {
    name: string;
  };
  capital?: string;
  currency?: string;
  languages: {
    name: string;
  }[];
}

interface ICountryCoordinates {
  Country: string;
  "ISO Code": string;
  Latitude: number;
  Longitude: number;
}

interface IMergedCountry extends ICountry {
  latlng: [number, number];
}
