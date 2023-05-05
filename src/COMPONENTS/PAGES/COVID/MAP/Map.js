import React, { useEffect, useState } from "react";
import "./Map.css";
import { fetchCovidStats } from "../api";

const Map = () => {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          const { data, error } = await fetchCovidStats();
          setStats(data);
          setError(error);
        };
    
        fetchData();
      }, []);

  return (
    <div style={{height: "50vh"}} id="map" className="Map">
map
    </div>
  );
};

export default Map;
