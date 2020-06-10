import React from "react";
import FunnelChart from "../funnel/FunnelChart";
import "./segments.scss";
import Table from "../table/Table";
import AlertAndProductChart from "../alertAndProductChart/AlertAndProductChart";
import { tableData } from "../../utils/tableData";

const SegmentsTab = () => {
  return (
    <div className="segmentsContainer">
      <div className="chartsContent">
        <FunnelChart />
        <AlertAndProductChart title="ALERTS" />
      </div>
      <div>
        <Table optionsButton tableData={tableData} />
      </div>
    </div>
  );
};

export default SegmentsTab;
