import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer as Map, TileLayer, Marker } from "react-leaflet";
import MapData from "./Data.json";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import MarkerClusterGroup from "./Cluster";
import Modal from "@mui/material/Modal";
function Mapa() {
  const center = [52.237049, 21.017532];
  const groupRef = useRef(null);
  const mapRefs = useRef(null);
  const mapRef = useRef();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [date, setData] = React.useState();

  const handleDashboard = () => {
    navigate("/");
  };

  const CurrentLocation = new L.Icon({
    iconUrl:
      "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png",
    iconAnchor: [20, 40],
    iconSize: [40, 40],
  });

  //filter MapData only of here is lat and lng
  const filteredData = MapData.slice(0, 260);
  const filterData1 = MapData.slice(290, 420);

  const filterData2 = MapData.slice(450, 760);

  const finalDatas = [...filteredData, ...filterData1, ...filterData2];

  const centerMapView = (e) => {
    const { leafletElement } = mapRefs.current;

    if (e) {
      leafletElement.setView(e.popup._latlng);
      const point = leafletElement.project(e.target._popup._latlng);
      leafletElement.panTo(leafletElement.unproject(point), { animate: true });
    }
  };

  React.useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map?.on("fullscreenchange", handleOnToggleFullscreen);

    let mapInst = mapRef?.current?.leafletElement;
    const group = groupRef?.current?.leafletElement; //get native featureGroup instance
    mapInst?.fitBounds(group?.getBounds());
  }, []);

  function handleOnToggleFullscreen() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    console.log(`Fullscreen: ${map.isFullscreen() ? "yes" : "no"}`);
  }

  // function that handles the closing of the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Function that handles the click event on the map
  const handleOpen = (datas) => {
    setOpen(true);
    setData(datas);
    window.scrollTo(0, 0);
  };

  console.log("finalDatas", date);

  return (
    <div className="px-10 mt-5">
      <Modal
        open={open}
        onClose={handleClose}
        className="modal_container"
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 0,
          invisible: true,
        }}
      >
        <div className="popup_modle pl-3 ">
          <button
            onClick={handleClose}
            className="text-md absolute  right-3   text-lightDarkGreen  font-bold top-1"
            id="myModal"
          >
            X <button />
          </button>
          <div className="relative top-4">
            <div className="pb-4 ">
              <p className="text-white text-sm opacity-80">Name</p>
              <p className="text-white font-bold text-4xl relative top-2">
                {date?.["Regon placówki"]}
              </p>
            </div>
            <div className="border-t border-deepDark relative pt-3 ">
              <p className="text-white text-2xl relative  opacity-80">
                Country
              </p>
              <p className="text-white text-lg font-bold relative top-2 ">
                {date?.["Skrót nazwy placówki"]}
              </p>
            </div>

            <div className="mt-4 text-white">ddd</div>
          </div>
          <br />
        </div>
      </Modal>
      <div>
        <h1 className="text-4xl font-bold">Map</h1>
      </div>
      <div className="mt-1">
        <button
          onClick={handleDashboard}
          className="bg-mainColor text-xl text-white px-10 py-2 rounded shadow"
        >
          Go to Dashboard
        </button>
      </div>
      <div>
        <Map
          ref={mapRefs}
          center={center}
          zoom={6}
          fullscreenControl={true}
          onPopupopen={centerMapView}
          maxZoom={19}
          position={center}
          bounceAtZoomLimits={true}
          maxBoundsViscosity={0.95}
          scrollWheelZoom={false}
          zoomAnimation={true}
          maxBounds={[
            [-180, -90],
            [180, 90],
          ]}
          zoomSnap={0.5}
          style={{ width: "100%", height: "85vh" }} //zIndex: -10
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup ref={groupRef}>
            {finalDatas?.slice(0, 900)?.map((place, i) => (
              <Marker
                position={[place.lat, place.lon]}
                key={i}
                icon={CurrentLocation}
                eventHandlers={{ click: () => handleOpen(place) }}
              ></Marker>
            ))}
          </MarkerClusterGroup>
        </Map>
      </div>
    </div>
  );
}

export default Mapa;
