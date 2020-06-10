import React, { useEffect } from "react";
import D3Funnel from "d3-funnel";
import "./funnelChart.scss";

const FunnelChart = () => {
  const setData = (label, value, labelColor, backgroundColor) => ({
    label,
    value,
    labelColor,
    backgroundColor,
  });
  const data = [
    setData("Data1", 100, "#BEB7BB", "#BEB7BB"),
    setData("Data2", 300, "#F9A8D3", "#F9A8D3"),
    setData("Data3", 500, "#C18B6F", "#C18B6F"),
    setData("Data4", 800, "#FFFF80", "#FFFF80"),
  ];
  const options = {
    block: {
      dynamicHeight: true,
    },
  };
  useEffect(() => {
    const chart = new D3Funnel("#funnel");
    chart.draw(data, options);
  }, [data, options]);

  return (
    <div>
      <h2>CORE CUSTOMER LOOKALIKE PROFILES</h2>
      <div id="funnel"></div>
      <ul className="legends">
        {data.map((item, index) => (
          <li key={index}>
            <span className="label">{item.label}</span>
            <span
              style={{ backgroundColor: item.backgroundColor }}
              className="legendBox"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunnelChart;
