import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import stop from "../../images/stop.png";
import pause from "../../images/pause.png";
import upload from "../../images/upload.png";
function RightSide() {
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
          <button className={styles.button}>Activity</button>
          <button className={styles.button}>Tasks</button>
          <button className={styles.button}>Progress</button>
        </div>
        <div className={styles.pannelDisplay}>Hi</div>
      </div>
    </div>
  );
}

export default RightSide;
