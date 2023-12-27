
import React, { useState, useEffect } from "react";
import Chart from "./Chart";

function MainContent() {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/energydata/")
      .then((response) => response.json())
      .then((data) => setEnergyData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="main-content">
      {energyData.length > 0 ? (
        <>
          <Chart
            data={energyData}
            xField="country"
            yField="intensity"
            color="steelblue"
            heading="Country and Intensity"
          />
          <Chart
            data={energyData}
            xField="country"
            yField="likelihood"
            color="green"
            heading="Likelihood and Country"
          />
          <Chart
            data={energyData}
            xField="region"
            yField="relevance"
            color="orange"
            heading="Region and Relevance"
          />
          <Chart
            data={energyData}
            xField="topic"
            yField="relevance"
            color="cyan"
            heading="Topic and Relevance"
          />
          <Chart
            data={energyData}
            xField="intensity"
            yField="likelihood"
            color="red"
            heading=" Intensity and Likelihood"
          />
          <Chart
            data={energyData}
            xField="sector"
            yField="relevance"
            color="purple"
            heading="Sector and Relevance"
          />
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MainContent;
