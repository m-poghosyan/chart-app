import React from "react";
import TabButton from "./../tabButton/TabButton";
import "./tabs.scss";

const Tabs = ({ setCurrentTab, currentTab }) => {
  const chooseActiveTab = (tabIndex, currentTab) => tabIndex === currentTab;
  return (
    <div className="tabPanels">
      <TabButton
        innerText="SEGMENTS"
        isActive={chooseActiveTab(1, currentTab)}
        onClick={() => setCurrentTab(1)}
      >
        SEGMENTS
      </TabButton>
      <TabButton
        innerText="SANDBOX"
        isActive={chooseActiveTab(2, currentTab)}
        onClick={() => setCurrentTab(2)}
      >
        SANDBOX
      </TabButton>
      <TabButton
        innerText="ORCHESTRATION"
        isActive={chooseActiveTab(3, currentTab)}
        onClick={() => setCurrentTab(3)}
      >
        ORCHESTRATION
      </TabButton>
    </div>
  );
};

export default Tabs;
