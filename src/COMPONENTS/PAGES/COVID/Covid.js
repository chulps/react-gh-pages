import React, { useState } from "react";
import Table from "./TABLE/Table";
import Map from "./MAP/Map";
import Charts from "./CHARTS/Charts";
import { Helmet } from "react-helmet";
import TabNavigation from "../../UI/TABNAVIGATION/TabNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Covid = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={solid("table")} />,
      title: "Table",
      content: <Table />,
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={solid("map")} />,
      title: "Map",
      content: <Map />,
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={solid("chart-simple")} />,
      title: "Charts",
      content: <Charts />,
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="covid" className="py3">
      <Helmet>
        <title>🦠 Covid-19 Dashboard</title>
      </Helmet>
      <div className="mb3" style={{ maxWidth: "45ch" }}>
        <div>
          <label>Project:</label>
          <h1>
            🦠 Covid-19
            <br />
            Dashboard
          </h1>

          <p>
            This dashboard is built with React,{" "}
            <a href="/projects/nucleotide/">Nucleotide</a>, and this cool little
            API{" "}
            <a href="https://rapidapi.com/api-sports/api/covid-193/">here.</a>{" "}
            The point of this project is just to practice connecting to an API
            and demonstrate my ability to visualize data using what I know.
          </p>
        </div>
      </div>
      <div>
        <TabNavigation
          tabs={tabs}
          initialActiveTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div>
          {tabs.map((tab) => (
            <div key={tab.id} hidden={tab.id !== activeTab}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Covid;
