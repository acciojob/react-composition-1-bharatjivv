
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

function App() {
  const tabsData = [
    {
      title: "Home",
      content: <p>Welcome to Home tab</p>,
    },
    {
      title: "Profile",
      content: <p>This is your profile</p>,
    },
    {
      title: "Settings",
      content: <p>Change your settings here</p>,
    },
  ];

  return <Tabs tabs={tabsData} />;
}

export default App;
