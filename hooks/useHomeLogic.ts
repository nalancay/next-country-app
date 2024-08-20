import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import countryCoordinates from "../public/countries.json";
import { GET_COUNTRIES } from "../queries/getCountries";

export const useHomeLogic = () => {
  const { data, loading, error } = useQuery<{ countries: ICountry[] }>(
    GET_COUNTRIES
  );
  const [countries, setCountries] = useState<IMergedCountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<IMergedCountry[]>(
    []
  );

  useEffect(() => {
    if (data) {
      const mergedCountries: IMergedCountry[] = data.countries.map(
        (country) => {
          const coordinates = (
            countryCoordinates as ICountryCoordinates[]
          ).find((c) => c["ISO Code"] === country.code);
          return {
            ...country,
            latlng: coordinates
              ? [coordinates.Latitude, coordinates.Longitude]
              : [0, 0],
          };
        }
      );
      setCountries(mergedCountries);
      setFilteredCountries(mergedCountries);
    }
  }, [data]);

  const handleSearch = (query: string) => {
    const result = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query.toLowerCase()) ||
        country.code.toLowerCase().includes(query.toLowerCase()) ||
        country.continent.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(result);
  };

  return {
    loading,
    error,
    handleSearch,
    filteredCountries,
  };
};
