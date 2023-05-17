import React, { useState, useMemo } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import "./Map.css";
import Loader from "../../../UI/LOADER/Loader";
import Tooltip from "./Tooltip";
import {
  formatNumberWithCommas,
  formatCountryName,
  getFlagEmoji,
  aggregateWorldData,
} from "../helperFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import DetailPanel from "./DetailPanel";

const geoUrl = process.env.PUBLIC_URL + "/features.json";

// Create a linear color scale
const colorScale = scaleLinear()
  .domain([1, 115.5, 231])
  .range(["#00394e", "#008fc3", "#cce9f3"]);

const Map = ({ covidStats }) => {
  const worldData = useMemo(() => aggregateWorldData(covidStats), [covidStats]);
  const [selectedMetric, setSelectedMetric] = useState("population");
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleReset = () => {
    setSelectedCountry(null);
  };
  
  // Preprocess the data to assign ranks to each country for each statistic
  const statsWithRanks = useMemo(() => {
    const sortedStats = [...covidStats].sort(
      (a, b) => b[selectedMetric] - a[selectedMetric]
    );
    return covidStats.map((stat) => {
      const rank =
        sortedStats.findIndex(
          (sortedStat) => sortedStat.country === stat.country
        ) + 1;
      return { ...stat, [`${selectedMetric}Rank`]: rank };
    });
  }, [covidStats, selectedMetric]);

  const handleChange = (e) => {
    setSelectedMetric(e.target.value);
  };

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  if (!covidStats) {
    return <Loader />;
  }

  return (
    <div id="covid-map">
      <div className="one-column lg-two-columns">
        <div>
          <div className="control-panel">
            <h3>Covid Map</h3>
            <select onChange={handleChange} value={selectedMetric}>
              <option value="population">Population</option>
              <option value="tests">Total Tests</option>
              <option value="cases">Total Cases</option>
              <option value="active">Active Cases</option>
              <option value="deaths">Total Deaths</option>
              <option value="recovered">Total Recovered</option>
            </select>
          </div>
          <div id="map-container">
            {" "}
            <ComposableMap
              projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 150,
                center: [10, 10],
              }}
              width={800}
              height={400}
            >
              <ZoomableGroup zoom={position.zoom} onMoveEnd={handleMoveEnd}>
                {statsWithRanks && (
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const d = statsWithRanks.find(
                          (stat) => stat.countryInfo.iso3 === geo.id
                        );
                        const rank = d ? d[`${selectedMetric}Rank`] : 0;
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={rank ? colorScale(rank) : "#F5F4F6"}
                            strokeWidth={0.25}
                            stroke="white"
                            onClick={() => {
                              setSelectedCountry(d);
                            }}
                            onMouseEnter={(e) => {
                              // Show the tooltip when the mouse enters the element
                              setTooltipContent(
                                d ? (
                                  <div className="tooltip-content">
                                    <label className="tooltip-label">
                                      <h5>{getFlagEmoji(d.country)}</h5>&nbsp;
                                      {formatCountryName(d.country)}:
                                    </label>{" "}
                                    <data>
                                      {formatNumberWithCommas(
                                        d[selectedMetric]
                                      )}
                                    </data>
                                  </div>
                                ) : (
                                  "No data"
                                )
                              );
                              setTooltipPosition({
                                x: e.clientX,
                                y: e.clientY,
                              });
                            }}
                            onMouseMove={(e) => {
                              // Update the position of the tooltip as the mouse moves
                              setTooltipPosition({
                                x: e.clientX,
                                y: e.clientY,
                              });
                            }}
                            onMouseLeave={() => {
                              // Hide the tooltip when the mouse leaves the element
                              setTooltipContent("");
                            }}
                            onMouseDown={() => {
                              setTooltipContent("");
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                )}
              </ZoomableGroup>
            </ComposableMap>
            <div className="map-legend">
              <label>Legend</label>
              <div className="labels">
                <small>Least</small>
                <small>Most</small>
              </div>

              <div className="gradient"></div>
            </div>
            <div className="zoom-controls">
              {/* reset details panel to initial state */}
              <button className="btn3" onClick={handleReset}>
                <h4>
                  <FontAwesomeIcon icon={solid("earth")} />
                </h4>
              </button>
              <button className="btn3" onClick={handleZoomIn}>
                <h4>
                  <FontAwesomeIcon icon={solid("plus")} />
                </h4>
              </button>
              <button className="btn3" onClick={handleZoomOut}>
                <h4>
                  <FontAwesomeIcon icon={solid("minus")} />
                </h4>
              </button>
            </div>
          </div>
        </div>

        {tooltipContent && (
          <Tooltip content={tooltipContent} position={tooltipPosition} />
        )}
        <DetailPanel country={selectedCountry} worldData={worldData} />
      </div>
    </div>
  );
};

export default Map;
