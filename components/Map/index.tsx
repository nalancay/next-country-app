import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IMapProps } from "./Map.types";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map = ({ countries }: IMapProps) => {
  const [zoom, setZoom] = useState(2);
  const [height, setHeight] = useState("h-96");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setZoom(1);
        setHeight("h-128");
      } else {
        setZoom(2);
        setHeight("h-96");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={zoom} className={`w-full ${height}`}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country) => (
        <Marker key={country.code} position={country.latlng}>
          <Popup>
            {country.name} ({country.code})
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
