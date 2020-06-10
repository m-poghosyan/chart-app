import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const DashboardChart = ({ title, height }) => {
  const dataHorBar = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Data 1",
        backgroundColor: "#999999",
        borderWidth: 1,
        data: [20, 40, 70, 40, 10],
      },
      {
        label: "Data 2",
        backgroundColor: "#9B5A34",
        borderWidth: 1,
        data: [60, 120, 60, 140, 60],
      },
      {
        label: "Data 3",
        backgroundColor: "#E887BD",
        borderWidth: 1,
        data: [80, 120, 40, 150, 0],
      },
      {
        label: "Data 4",
        backgroundColor: "#3676C5",
        borderWidth: 1,
        data: [80, 120, 40, 150, 0],
      },
    ],
  };
  return (
    <div>
      <h2 className="title">{title}</h2>
      <HorizontalBar data={dataHorBar} height={height} />
    </div>
  );
};

export default DashboardChart;
