import React, {useState} from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import stop from "../../images/stop.png";
import pause from "../../images/pause.png";
import upload from "../../images/upload.png";
function RightSide() {
    const [component, setComponent] = useState(<Activity/>);
    const [activityActive, setActivityActive] = useState(true);
    const [tasksActive, setTasksActive] = useState(false);
    const [progressActive, setProgressActive] = useState(false);
    function changeComponent(component){
        setComponent(component);
    }
    function activitySelected(){
        changeComponent(<Activity/>);
        setActivityActive(true);
        setTasksActive(false);
        setProgressActive(false);
    }
    function tasksSelected(){
      changeComponent(<Tasks/>);
      setActivityActive(false);
      setTasksActive(true);
      setProgressActive(false);
  }
  function progressSelected(){
    changeComponent(<Progress/>);
    setActivityActive(false);
    setTasksActive(false);
    setProgressActive(true);
}
  return (
    <div className={styles.rightSide}>
      <div className={styles.actions}>
        <div className={styles.salesforce}>
          <Image src={upload} alt="poc"></Image>
          <h3 style={{ marginLeft: "8px", color: "white" }}>Salesforce</h3>
        </div>
        <div className={styles.actionButton}>
          <Image src={pause} alt="poc"></Image>
          <Image src={stop} alt="poc"></Image>
        </div>
      </div>
      <div className={styles.pannel}>
        <div className={styles.buttonContainer}>
          <button onClick={activitySelected} className={activityActive?styles.activeButton:styles.button}>Activity</button>
          <button onClick={tasksSelected} className={tasksActive?styles.activeButton:styles.button}>Tasks</button>
          <button onClick={progressSelected} className={progressActive?styles.activeButton:styles.button}>Progress</button>
        </div>
        {component}
      </div>
    </div>
  );
}

function Activity(){
    return (
        <div className={styles.pannelDisplay}>Activity</div>
    );
}
function Tasks(){
    return (
        <div className={styles.pannelDisplay}>Tasks</div>
    );
}
function Progress(){
    return (
        <div className={styles.pannelDisplay}>Progress</div>
    );
}

export default RightSide;
