// dataProcessing.js

import { formatCountryName } from "../helperFunctions";

const continents = [
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Australia-Oceania",
  "Africa",
];

export const getAggregatedData = (data) => {
  // Aggregate values for each continent
  const aggregatedData = continents.map((continent) => {
    const countryData = data.filter((item) => item.continent === continent);

    const aggregatedValues = countryData.reduce(
      (accumulator, current) => {
        return {
          cases: accumulator.cases + current.cases,
          deaths: accumulator.deaths + current.deaths,
          recovered: accumulator.recovered + current.recovered,
          population: accumulator.population + current.population,
          active: accumulator.active + current.active,
          tests: accumulator.tests + current.tests,
        };
      },
      { population: 0, cases: 0, deaths: 0, recovered: 0, tests: 0, active: 0 }
    );

    return {
      country: continent,
      cases: aggregatedValues.cases,
      deaths: aggregatedValues.deaths,
      active: aggregatedValues.active,
      recovered: aggregatedValues.recovered,
      population: aggregatedValues.population,
      continent: continent,
      tests: aggregatedValues.tests,
      // countryInfo: { flag: null },
      // todayCases: null,
      // todayDeaths: null,
      // todayRecovered: null,
      // active: null,
      // critical: null,
      // casesPerOneMillion: null,
      // deathsPerOneMillion: null,
      // testsPerOneMillion: null,
      // oneCasePerPeople: null,
      // oneDeathPerPeople: null,
      // oneTestPerPeople: null,
      // activePerOneMillion: null,
      // recoveredPerOneMillion: null,
      // criticalPerOneMillion: null,
    };
  });

  return aggregatedData;
};

export const filterData = (data, visibilityfilter, searchTerm) => {
  let filteredData = [...data];

  if (visibilityfilter === "countries/territories") {
    filteredData = filteredData.filter((item) => {
      const countryName = formatCountryName(item.country)
        .toLowerCase()
        .replace(/-/g, " ");

      return countryName.includes(searchTerm.toLowerCase());
    });
  } else if (visibilityfilter === "continents") {
    filteredData = getAggregatedData(filteredData);
    filteredData = filteredData.filter((item) => {
      const continentName = item.continent.toLowerCase();

      return continentName.includes(searchTerm.toLowerCase());
    });
  }

  return filteredData;
};




export const sortedData = (data, sortConfig) => {
  const { key, direction } = sortConfig;
  if (!key) return data;

  // Add logic to check if sorting Continents
  if (key === "continent") {
    // Sort based on continent name
    const sortedData = [...data].sort((a, b) => {
      let aContinent = a.continent;
      let bContinent = b.continent;

      if (direction === "ascending") {
        if (aContinent < bContinent) return -1;
        if (aContinent > bContinent) return 1;
      } else {
        if (aContinent > bContinent) return -1;
        if (aContinent < bContinent) return 1;
      }
      return 0;
    });
    return sortedData;
  }

  const sortedData = [...data].sort((a, b) => {
    let aKey = a[key];
    let bKey = b[key];

    if (typeof aKey === "string") {
      aKey = aKey.toLowerCase();
      bKey = bKey.toLowerCase();
    }

    if (direction === "ascending") {
      if (aKey < bKey) return -1;
      if (aKey > bKey) return 1;
    } else {
      if (aKey > bKey) return -1;
      if (aKey < bKey) return 1;
    }

    return 0;
  });

  return sortedData;
};
