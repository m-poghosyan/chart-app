import React from "react";
import AlertAndProductChart from "../alertAndProductChart/AlertAndProductChart";
import DashboardChart from "../dashboardChart/DashboardChart";
import "./sandbox.scss";
import Table from "../table/Table";
import { tableData, rowColors } from "../../utils/tableData";

const SegmentsTab = () => {
  return (
    <div className="sandboxContainer">
      <div className="chartsContent">
        <DashboardChart title="POWERBI DASHBOARD (PAGE 2)" />
        <AlertAndProductChart title="PRODUCTS" />
      </div>
      <div>
        <h2 className="title">GROUPS WORTH PAYING ATTANTION TO</h2>
        <Table tableData={tableData} rowColors={rowColors} />
      </div>
    </div>
  );
};

export default SegmentsTab;
