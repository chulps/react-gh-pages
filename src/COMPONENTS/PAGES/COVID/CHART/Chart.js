import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../../../COVID-API";

const shortenString = function(value) {
  var newValue = value;
  if (value >= 1000) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 4);
    var shortValue = "";
    for (var precision = 5; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 5) {
        break;
      }
    }
    if (shortValue % 1 != 10) shortValue = shortValue.toFixed(2);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  const [chartWidth, setChartWidth] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
      setChartWidth(
        document.getElementById("line-chart-container").clientWidth
      );
    };

    fetchAPI();
  }, []);

  const confirmedArr = [];
  const deathsArr = [];
  const dataDay = chartWidth / dailyData.length;

  for (let day of dailyData) {
    confirmedArr.push(`${day.confirmed}`);
    deathsArr.push(`${day.deaths}`);
  }

  const maxDeaths = Math.max(...deathsArr);
  const maxConfirmed = Math.max(...confirmedArr);

  const lineChart = dailyData.length ? (
    <React.Fragment>
      <svg
        className="svg-line-chart"
        width="100%"
        height="256"
        overflow="visible"
      >
        <defs>
          <circle id="dot" cx="0" cy="0" r="1" stroke="transparent" />
          <line id="bg-line" stroke="var(--transBlueC-10)" />
        </defs>
        <rect width="100%" height="100%" fill="var(--transBlueC-05)" />
        <line
          id="y-axis"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="var(--transBlueC-10)"
        />
        <line
          id="x-axis"
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="var(--transBlueC-10)"
        />
        <line
          id="x-axis-max"
          x1="100%"
          y1="100%"
          x2="100%"
          y2="calc(100% + 0.4rem)"
          stroke="var(--transBlueC-10)"
        />
        <line
          id="x-axis-zero"
          x1="0"
          y1="100%"
          x2="0"
          y2="calc(100% + 0.4rem)"
          stroke="var(--transBlueC-10)"
        />
        <line
          id="y-axis-zero"
          x1="0"
          y1="100%"
          x2="-0.4rem"
          y2="100%"
          stroke="var(--transBlueC-10)"
        />
        <line
          id="y-axis-max"
          x1="0"
          y1="0"
          x2="-0.4rem"
          y2="0"
          stroke="var(--transBlueC-10)"
        />
        <polyline
          strokeWidth="2"
          fill="transparent"
          stroke=""
          points="
        0, 10
        10, 20
        20, 45"
        />

        {dailyData.map((day, index) => (
          <React.Fragment>
            <use
              href="#dot"
              x={dataDay * index}
              y={(-256 / maxConfirmed) * day.confirmed + 256}
              fill="var(--green0)"
            />
            <use
              href="#dot"
              x={dataDay * index}
              y={(-256 / maxConfirmed) * day.deaths + 256}
              fill="var(--red0)"
            />
          </React.Fragment>
        ))}
      </svg>
      <small
        className=" flex-vertical "
        style={{
          position: "absolute",
          bottom: "100%",
          right: "100%",
          lineHeight: 1,
          transform: "translate(-0.8rem, 50%)",
          textAlign: "right"
        }}
      >
        <data style={{ lineHeight: 1 }}>{shortenString(maxConfirmed)}</data>
        <small>Infected</small>
      </small>

      <small
        className=" flex-vertical "
        style={{
          position: "absolute",
          top: "100%",
          right: "100%",
          lineHeight: 1,
          transform: "translate(-0.8rem, -75%)",
          textAlign: "right"
        }}
      >
        <data style={{ lineHeight: 1 }}>
          {shortenString(dailyData[0].confirmed)}
        </data>
        <small>Infected</small>
      </small>

      <small
        style={{
          position: "absolute",
          top: "100%",
          left: "0",
          lineHeight: 1,
          textAlign: "left"
        }}
      >
        <data>{dailyData[0].date}</data>
      </small>

      <small
        style={{
          position: "absolute",
          top: "100%",
          right: "0",
          lineHeight: 1,
          textAlign: "right"
        }}
      >
        <data>{shortenString(dailyData[dailyData.length - 1].date)}</data>
      </small>
    </React.Fragment>
  ) : null;

  return (
    <div
      id="line-chart-container"
      className="relative mt3 half sm-two-thirds md-three-fourths xl-whole m-auto"
      style={{
        boxShadow: "inset 0 6px 12px var(--transBlueC-10)",
        overflow: "visible",
        height: 256,
        border: "1px solid var(--transBlueC-10)",
        borderTopColor: "var(--transBlueC-25)",
        borderBottomColor: "white"
      }}
    >
      {lineChart}
      <div>
        <div className="mt2">
          <small className="text-green0">Infected</small>
          <br />
          <small className="text-red0">Dead</small>
        </div>
      </div>
    </div>
  );
};

export default Chart;
