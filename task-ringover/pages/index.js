import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import Profile from "../components/Profile/profile";
import Navbar from "../components/Navbar/navbar";
import Workspace from "../components/Workspace/workspace";
import RightSide from "../components/RightSide/rightside";

export default function Home() {
  const [tabs, setTabs] = useState([]);
  function addTab (text){
    if(tabs.length < 10){
      setTabs([...tabs, text], console.log(tabs));
    }
  }
  return (
    <>
      <Navbar />
      <div className={styles.dashboardContainer}>
        <Profile onClick={addTab}/>
        <Workspace />
        <RightSide />
      </div>
    </>
  );
}
