import React from "react";
import styles from "../../styles/Home.module.scss";
import record from "../../images/record_voice_over.png";
import note from "../../images/note.png";
import Image from "next/image";
import noWork from "../../images/noWork.png";
function Workspace() {
  return (
    <div className={styles.workspace}>
      <div className={styles.heading}>
          <h1 style={{textAlign:"left"}}>Workspace</h1>
          <div className={styles.actions}>
              <Image src={record} alt="record" />
              <Image src={note} alt="note" />
          </div>
      </div>
      <div className={styles.main}>
        <Image src={noWork} alt="No-Work" />
        <h3>Your workspace is empty!</h3>
        <p>To add a tab, click on any option on your bottom left</p>
      </div>
    </div>
  );
}

export default Workspace;
