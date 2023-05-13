import React from "react";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const geoUrl = process.env.PUBLIC_URL + "/features.json";

const colorScale = scaleLinear()
  .domain([500, 1500000000])
  .range(["#ff6060", "#ffdfdf"]);
const Map = ({ covidStats }) => {

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {covidStats && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo, index) => {
              const d = covidStats[index].population;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d) : "#F5F4F6"}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
    // <div>Map</div>
  );
};

export default Map;
