export interface IMergedCountry {
  code: string;
  name: string;
  latlng: [number, number];
}

export interface IMapProps {
  countries: IMergedCountry[];
}
