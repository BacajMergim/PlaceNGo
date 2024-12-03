import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const center: [number, number] = [48.2082, 16.3738]; // Example coordinates
  const zoom = 16;
  const openGoogleMaps = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const googleMapsUrl = isMobile
      ? `geo:${center[0]},${center[1]}`
      : `https://www.google.com/maps?q=${center[0]},${center[1]}`;
    window.open(googleMapsUrl, "_blank");
  };
  return (
    <div
      onClick={openGoogleMaps}
      style={{ height: "400px", width: "100%", zIndex: "1" }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>Vienna, Austria</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
