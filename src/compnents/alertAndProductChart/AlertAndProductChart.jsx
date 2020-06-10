import React from "react";
import { Bar } from "react-chartjs-2";

const AlertAndProductChart = ({ title }) => {
  const data = {
    datasets: [
      {
        label: "Traffic",
        backgroundColor: "#999999",
        borderWidth: 1,
        padding: 30,
        data: [40, 0, 100],
      },
      {
        label: "Sales of Item X",
        backgroundColor: "#E887BD",
        borderWidth: 1,
        data: [80, 0, 100],
      },
      {
        label: "Reviews",
        backgroundColor: "#9B5A34",
        borderWidth: 1,
        data: [50, 0, 100],
      },
    ],
  };
  return (
    <div>
      <h2 className="title">{title}</h2>
      <Bar data={data} width={30} height={40} />
    </div>
  );
};

export default AlertAndProductChart;
