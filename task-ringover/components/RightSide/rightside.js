import React, {useState} from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import stop from "../../images/stop.png";
import pause from "../../images/pause.png";
import upload from "../../images/upload.png";
function RightSide() {
    const [component, setComponent] = useState(<Activity/>);
    function changeComponent(component){
        setComponent(component);
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
          <button onClick={()=>changeComponent(<Activity/>)} className={styles.button}>Activity</button>
          <button onClick={()=>changeComponent(<Tasks/>)} className={styles.button}>Tasks</button>
          <button onClick={()=>changeComponent(<Progress/>)} className={styles.button}>Progress</button>
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
