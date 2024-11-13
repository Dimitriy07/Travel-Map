/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate(); // this will return a function navigate which let us to move to any url
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Postion: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
