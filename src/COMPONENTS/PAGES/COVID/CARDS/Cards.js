import React from "react";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading...";
  }
  const shortenString = function(value) {
    var newValue = value;
    if (value >= 1000) {
      var suffixes = ["", "k", "m", "b", "t"];
      var suffixNum = Math.floor(("" + value).length / 4);
      var shortValue = "";
      for (var precision = 5; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum !== 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );
        var dotLessShortValue = (shortValue + "").replace(
          /[^a-zA-Z 0-9]+/g,
          ""
        );
        if (dotLessShortValue.length <= 5) {
          break;
        }
      }
      if (shortValue % 1 !== 10) shortValue = shortValue.toFixed(2);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  };

  return (
    <div className="flex-wrap sm-two-columns gap3">
      <div className="flex-center-x">
        <div className="flex-vertical">
          <label>all time infected:</label>
          <data className="bold h3 text-green0">{shortenString(confirmed.value)}</data>
          <data>{new Date(lastUpdate).toDateString()}</data>
          <small>Last Update</small>
        </div>
      </div>
      <div className="flex-center-x">
        <div className="flex-vertical">
          <label>all time dead:</label>
          <data className="bold h3 text-red0">{shortenString(deaths.value)}</data>
          <data>{new Date(lastUpdate).toDateString()}</data>
          <small>Last Update</small>
        </div>
      </div>
    </div>
  );
};

export default Cards;
