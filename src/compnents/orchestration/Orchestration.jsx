import React from "react";
import { tableData, rowColors } from "../../utils/tableData";
import Table from "../table/Table";
import DashboardChart from "../dashboardChart/DashboardChart";
import AttributionChart from "../attributionChart/AttributionChart";

const OrchestrationTab = () => {
  return (
    <div>
      <Table tableData={tableData} rowColors={rowColors} />
      <DashboardChart height="50" title="REACHABILITY" />
      <AttributionChart />
    </div>
  );
};

export default OrchestrationTab;
