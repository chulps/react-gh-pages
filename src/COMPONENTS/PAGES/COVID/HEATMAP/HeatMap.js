import React, { useEffect, useState } from "react";
import { fetchCovidStats } from "../api";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { lookup } from "country-code-lookup";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
console.log(geoUrl)
const Heatmap = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchCovidStats();
      setStats(data);
    };

    fetchData();
  }, []);

  const getCountryStats = (geo) => {
    const countryIso2 = geo.properties.ISO_A2;
    const countryStats = stats.find((item) => item.countryInfo.iso2 === countryIso2);
    if (!countryStats) return null;

    const iso3 = lookup(countryIso2)?.iso3;
    return { ...countryStats, countryIso3: iso3 };
  };

  const geoStyles = (geo) => {
    const countryStats = getCountryStats(geo);
    if (!countryStats) return { fill: "#EEE" };

    const casesPer100k = countryStats.casesPerOneMillion / 10;
    const color = interpolateColor([255, 255, 255], [255, 0, 0], casesPer100k);

    return { fill: `rgb(${color[0]}, ${color[1]}, ${color[2]})` };
  };

  const interpolateColor = (color1, color2, factor) => {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  };

  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            if (stats.length === 0) return null;

            return (
              <Geography key={geo.rsmKey} geography={geo} style={{ default: geoStyles(geo) }} />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Heatmap;
