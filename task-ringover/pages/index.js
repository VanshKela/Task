import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Profile from "../components/Profile/profile";
import Navbar from "../components/Navbar/navbar";
import Workspace from "../components/Workspace/workspace";
import RightSide from "../components/RightSide/rightside";

export default function Home() {
  const [tabs, setTabs] = useState([]);
  const addTab = (text) => {
    if (tabs.length < 4) {
      setTabs([...tabs, text]);
    }
  };
  const removeTab = (index) => {
    setTabs(tabs.filter((_, i) => i !== index));
  };
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  function toggle () {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar />
      <div className={styles.dashboardContainer}>
        <Profile addTab={addTab}/>
        <Workspace tabs={tabs} removeTab={removeTab} toggle={toggle} />
        <RightSide isOpen={isOpen}/>
      </div>
    </>
  );
}
