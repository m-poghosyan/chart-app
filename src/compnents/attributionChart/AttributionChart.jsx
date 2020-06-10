import React from "react";
import { Bar } from "react-chartjs-2";

const AttributionChart = () => {
  const data = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "Data 1",
        backgroundColor: "#999999",
        borderWidth: 1,
        data: [40, 40, 40, 40],
      },
      {
        label: "Data 2",
        backgroundColor: "#E887BD",
        borderWidth: 1,
        data: [80, 80, 80, 80],
      },
      {
        label: "Data 3",
        backgroundColor: "#9B5A34",
        borderWidth: 1,
        data: [30, 40, 60, 90],
      },
    ],
  };
  return (
    <div className="attribution">
      <div>
        <h2 className="title">ATTRIBUTION</h2>
        <Bar data={data} width={300} height={50} />
      </div>
    </div>
  );
};

export default AttributionChart;
