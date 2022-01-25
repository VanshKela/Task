import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import record from "../../images/record_voice_over.png";
import note from "../../images/note.png";
import Image from "next/image";
import noWork from "../../images/noWork.png";
import cross from "../../images/cross.png";
function Workspace({ tabs, removeTab }) {
  console.log(tabs);
  return (
    <div className={styles.workspace}>
      <div className={styles.heading}>
        <h1 style={{ textAlign: "left", color: "#08464B" }}>Workspace</h1>
        <div className={styles.actions}>
          <Image src={record} alt="record" />
          <Image src={note} alt="note" />
        </div>
      </div>
      {tabs.length === 0 ? (
        <div className={styles.main}>
          <Image src={noWork} alt="No-Work" />
          <h3>Your workspace is empty!</h3>
          <p>To add a tab, click on any option on your bottom left</p>
        </div>
      ) : (
        <WorkEnvironment tabs={tabs} removeTab={removeTab}/>
      )}
    </div>
  );
}

function WorkEnvironment({ tabs, removeTab }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.workEnvironment}>
      <div className={styles.tabContainer}>
        {tabs.map((text, index) => {
          return (
            <Tab
              key={index}
              index={index}
              selectedIndex={selectedIndex}
              text={tabs[index]}
              removeTab={removeTab}
              setSelectedIndex={setSelectedIndex}
            />
          );
        })}
      </div>
      <div className={styles.space}>{selectedIndex}</div>
    </div>
  );
}

function Tab({ index, selectedIndex, text, setSelectedIndex, removeTab }) {
  return (
    <button onClick={()=>setSelectedIndex(index)} className={index === selectedIndex ? styles.activeTab : styles.tab}>
      <div className={styles.container}>
        <h3>{text}</h3>
        <button onClick={()=>{
          if (selectedIndex === index){
            setSelectedIndex(0);
          }
          removeTab(index);
        }} className={styles.cross}><Image src={cross} alt="chat" /></button>
      </div>
    </button>
  );
}

export default Workspace;
