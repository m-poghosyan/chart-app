import React, { useState } from "react";
import Tabs from "./compnents/tabs/Tabs";
import TabsController from "./compnents/tabsController/TabsController";
import "./App.scss";

const App = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div className="appContainer">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TabsController currentTab={currentTab} />
    </div>
  );
};

export default App;
