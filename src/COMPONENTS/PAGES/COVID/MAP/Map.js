// Map.js

import React, { useState, useMemo, useEffect } from "react";
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
import DetailPanel from "./DetailPanel";
import {
  handleChange,
  handleZoomIn,
  handleZoomOut,
  handleMoveEnd,
  handleReset,
  handleResetMap,
} from "./eventHandlers";
import MapLegend from "./MapLegend";
import ZoomControls from "./ZoomControls";

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
  const isCountrySelected = !!selectedCountry; // Convert selectedCountry to a boolean value
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  // Toggle fullscreen mode
  const handleToggleFullscreen = () => {
    if (document.fullscreenEnabled) {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  // Event listener for fullscreen change
  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  // Attach fullscreen change listener on component mount
  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // get the height and width of the window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // update the height and width of the window
  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  // attach event listener to update window dimensions on resize
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  // console log the height and width of the window
  useEffect(() => {
    console.log(`window width: ${windowWidth}, window height: ${windowHeight}`);
  }, [windowWidth, windowHeight]);

  // update the width and height props in the ComposableMap component when it is in fullscreen mode
  useEffect(() => {
    if (isFullscreen) {
      setPosition((pos) => ({ ...pos, zoom: 1 }));
    }
  }, [isFullscreen]);


  if (!covidStats) {
    return <Loader />;
  }

  return (
    <div id="covid-map">
      <div className="one-column lg-two-columns">
        <div>
          <div className="control-panel">
            <h3>Covid Map</h3>
          </div>
          <div
            id="map-container"
            style={
              isFullscreen
                ? {
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }
                : {}
            }
          >
            <ComposableMap
              projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 180,
                center: [10, 10],
              }}
              width={isFullscreen ? windowWidth / 2 : 800}
              height={isFullscreen ? windowHeight / 2 + 63.39 / 2: 500}
            >
              <ZoomableGroup
                zoom={position.zoom}
                onMoveEnd={() => handleMoveEnd(position, setPosition)}
                center={[10, 10]}
              >
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
                            onClick={() => setSelectedCountry(d)}
                            onMouseEnter={(e) => {
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
                              setTooltipPosition({
                                x: e.clientX,
                                y: e.clientY,
                              });
                            }}
                            onMouseLeave={() => {
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
            <MapLegend isFullscreen={isFullscreen}/>
            <ZoomControls
              handleReset={() => handleReset(setSelectedCountry)}
              handleZoomIn={() => handleZoomIn(position, setPosition)}
              handleZoomOut={() => handleZoomOut(position, setPosition)}
              handleResetMap={() => handleResetMap(setPosition)}
              isCountrySelected={isCountrySelected}
              handleToggleFullscreen={handleToggleFullscreen}
              isFullscreen={isFullscreen}
              style={{marginBottom: isFullscreen ? "var(--unit4)" : 0}}
            />
            <select
              className={`map-filter ${isFullscreen ? "isFullscreen" : ""}`}
              onChange={(e) => handleChange(e, setSelectedMetric)}
              value={selectedMetric}
            >
              <label>filter</label>
              <option value="population">Population</option>
              <option value="tests">Total Tests</option>
              <option value="cases">Total Cases</option>
              <option value="active">Active Cases</option>
              <option value="deaths">Total Deaths</option>
              <option value="recovered">Total Recovered</option>
            </select>
          </div>
        </div>

        {tooltipContent && (
          <Tooltip content={tooltipContent} position={tooltipPosition} />
        )}
        <DetailPanel isFullscreen={isFullscreen} country={selectedCountry} worldData={worldData} />
      </div>
    </div>
  );
};

export default Map;
