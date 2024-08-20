import dynamic from "next/dynamic";
import SearchBar from "@/components/SearchBar";
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";
import { useHomeLogic } from "@/hooks/useHomeLogic";

const Map = dynamic(() => import("../components/Map/index"), { ssr: false });

const Home = () => {
  const { loading, error, handleSearch, filteredCountries } = useHomeLogic();

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">World Countries</h1>
      <SearchBar onSearch={handleSearch} />
      <Map countries={filteredCountries} />
    </div>
  );
};

export default Home;
