import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const DonutChartContainer = styled.div`
  display: flex;
`;

const Chart = styled.svg`
    width: 40%;
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--unit2);
`;

const ColorBox = styled.div`
  width: var(--unit1);
  color: white;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: var(--H4);
  margin-top: 3px;
`;

const LegendItem = styled.div`
    display: flex;
    align-items: start;
    gap: var(--unit0);
`

const LegendItemText = styled.div`
    display: flex;
    flex-direction: column;
`
const LegendItemPercentage = styled.data`
    font-size: var(--H4);
    font-weight: bold;
    line-height: 0.5 !important;
`
const DonutChart = ({ mobile, desktop, index, mobileColor, desktopColor }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const handleDonutChart = () => {
      const svgns = "http://www.w3.org/2000/svg";
      const cxy = 180;
      const r = 150;
      const stroke = 60;
      const total = 100; // Implied total percentage
      const percentages = [
        { label: "Mobile", value: mobile, color: mobileColor },
        { label: "Desktop", value: desktop, color: desktopColor },
      ];

      const donutData = svgRef.current.querySelector(".donut-data");
      const gapMask = svgRef.current.querySelector(
        `#donut-section-gaps-${index}`
      );

      donutData.innerHTML = "";
      gapMask.innerHTML = '<rect width="100%" height="100%" fill="white" />';

      let cumulativeOffset = 0;

      percentages.forEach((segment) => {
        const dashArray = (segment.value / total) * 2 * Math.PI * r;
        const dashOffset = 2 * Math.PI * r - cumulativeOffset;

        // Create the section
        const circle = document.createElementNS(svgns, "circle");
        circle.setAttributeNS(null, "cx", cxy);
        circle.setAttributeNS(null, "cy", cxy);
        circle.setAttributeNS(null, "r", r);
        circle.setAttributeNS(null, "stroke-width", stroke);
        circle.setAttributeNS(
          null,
          "stroke-dasharray",
          `${dashArray} ${2 * Math.PI * r - dashArray}`
        );
        circle.setAttributeNS(null, "stroke-dashoffset", dashOffset);
        circle.setAttributeNS(null, "stroke", segment.color);
        circle.setAttributeNS(null, "fill", "transparent");

        donutData.appendChild(circle);

        // Create the gaps
        const gap1 = document.createElementNS(svgns, "polyline");
        gap1.setAttributeNS(null, "points", "180,180 360,180");
        gap1.setAttributeNS(null, "stroke", "black");
        gap1.setAttributeNS(null, "stroke-width", "5.625");
        gap1.setAttributeNS(null, "transform", `rotate(0 180 180)`); // Start gap

        const gap2 = document.createElementNS(svgns, "polyline");
        gap2.setAttributeNS(null, "points", "180,180 360,180");
        gap2.setAttributeNS(null, "stroke", "black");
        gap2.setAttributeNS(null, "stroke-width", "5.625");

        const rotation = (360 * cumulativeOffset) / (2 * Math.PI * r);
        cumulativeOffset += dashArray;

        gap2.setAttributeNS(null, "transform", `rotate(${rotation} 180 180)`); // Section gap

        gapMask.appendChild(gap1);
        gapMask.appendChild(gap2);
      });
    };

    handleDonutChart();
  }, [mobile, desktop, index, mobileColor, desktopColor]);

  return (
    <DonutChartContainer>
      <Chart
        ref={svgRef}
        style={{ transform: "rotate(-90deg)", margin: '0 auto' }}
        className="donut"
        width="40%"
        viewBox="0 0 360 360"
      >
        <defs>
          <mask id={`donut-section-gaps-${index}`}>
            {/* Gaps will be dynamically inserted here */}
          </mask>
        </defs>
        <circle
          fill="transparent"
          style={{ filter: "drop-shadow(-16px 0 8px var(--transBlueC-05))" }}
          strokeWidth={60}
          cx={180}
          cy={180}
          r={150}
        />
        <g
          className="donut-data"
          mask={`url(#donut-section-gaps-${index})`}
        ></g>
      </Chart>
      <Legend>
        <LegendItem>
          <ColorBox style={{ backgroundColor: mobileColor, color: "white" }}>
          </ColorBox>
          <LegendItemText>
            <label>Mobile</label>
            <LegendItemPercentage>{mobile}%</LegendItemPercentage>
          </LegendItemText>
        </LegendItem>
        <LegendItem>
          <ColorBox style={{ backgroundColor: desktopColor, color: "white" }}>
          </ColorBox>
          <LegendItemText>
            <label>Desktop</label>
            <LegendItemPercentage>{desktop}%</LegendItemPercentage>
          </LegendItemText>
        </LegendItem>
      </Legend>
    </DonutChartContainer>
  );
};

export default DonutChart;
