import React, { useState, useEffect } from "react";
import Table from "./TABLE/Table";
import Map from "./MAP/Map";
// import Charts from "./CHARTS/Charts";
import { Helmet } from "react-helmet";
import TabNavigation from "../../UI/TABNAVIGATION/TabNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { fetchCovidStats } from "./api";
import Loader from "../../UI/LOADER/Loader";

const Covid = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [covidStats, setCovidStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, error } = await fetchCovidStats();
      setCovidStats(data);
      setError(error);
      setIsLoading(false);
    };
  render() {

    return (
      <section id="covid" className="py3">
        <Helmet>
          <title>🦠 Covid&#8210;19 Dashboard</title>
        </Helmet>   
          <div className="mb3" style={{maxWidth: '45ch'}}>
            <div>
              <label>Project:</label>
              <h1>
                🦠 Covid&#8210;19
                <br />
                Dashboard
              </h1>

              <p>
                This dashboard is built with React, <a href="/projects/nucleotide/">Nucleotide</a>, and this cool little
                API{" "}
                <a href="https://rapidapi.com/api-sports/api/Covid&#8210;193/">
                  here.
                </a>{" "}
                The point of this project is just to practice connecting to an
                API and demonstrate my ability to visualize data using what I
                know.
              </p>
            </div>

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const tabs = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={solid("table")} />,
      title: "Table",
      content: <Table covidStats={covidStats} />,
      className: "",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={solid("map")} />,
      title: "Map",
      content: <Map covidStats={covidStats} />,
      className: "",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={solid("chart-simple")} />,
      title: "Charts",
      content: "<Charts />",
      className: "disabled",
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  if (isLoading) {
    return <Loader />;
  } else {
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
            <div
              key={tab.id}
              hidden={tab.id !== activeTab}
              className={tab.className}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )};
};

export default Covid;
