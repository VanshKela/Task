import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import Profile from "../components/Profile/profile";
import Navbar from "../components/Navbar/navbar";
import Workspace from "../components/Workspace/workspace";
import RightSide from "../components/RightSide/rightside";

export default function Home() {
  const [tabs, setTabs] = useState([]);
  const addTab = (text) => {
    if(tabs.length < 4){
      setTabs([...tabs, text]);
    }
  }
  const removeTab = (index) => {
    setTabs(tabs.filter((_, i) => i !== index));
  }
  return (
    <>
      <Navbar />
      <div className={styles.dashboardContainer}>
        <Profile addTab={addTab}/>
        <Workspace tabs={tabs} removeTab={removeTab}/>
        <RightSide />
      </div>
    </>
  );
}
