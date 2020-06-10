import React from "react";
import SegmentsTab from "../segments/Segments";
import OrchestrationTab from "../orchestration/Orchestration";
import SandboxTab from "../sandbox/Sandbox";

const TabsController = ({ currentTab }) => {
  if (currentTab === 1) {
    return <SegmentsTab />;
  }
  if (currentTab === 2) {
    return <SandboxTab />;
  }
  return <OrchestrationTab />;
};

export default TabsController;
