import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

interface Props {
  position: LatLngTuple;
  containerClasses?: string;
}

export default function Map({ position, containerClasses }: Props) {
  return (
    <MapContainer
      style={{ height: "400px", width: "100%" }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className={containerClasses}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
