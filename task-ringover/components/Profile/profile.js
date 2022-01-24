import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import cloud from "../../images/cloud.png";
import linkedin from "../../images/linkedin.png";
import call from "../../images/call.png";
import mail from "../../images/mail.png";
import callWhite from "../../images/call-white.png";
function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.credentials}>
        <h3 className={styles.name}>Jean-Samuel Najnudel</h3>
        <h3>President</h3>
        <span className={styles.span}>
          <h3>Ringover | </h3>
          <Image src={cloud}></Image>
          <h3>101-250</h3>
        </span>
        <h3>http://www.ringover.com</h3>
        <div className={styles.social}>
          <a href="/">
            <Image src={cloud}></Image>
          </a>
          <a href="/">
            <Image src={linkedin}></Image>
          </a>
        </div>
      </div>
      <div className={styles.topics}>
        <h3>Topics</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div className={styles.topicContainer}>
            <h3 style={{ fontSize: "14px", color: "#08464B" }}>Some Topic</h3>
          </div>
          <div className={styles.topicContainer}>
            <h3 style={{ fontSize: "14px", color: "#08464B" }}>
              Some Topic Name
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.contacts}>
        <h3>Contacts</h3>
        <div className={styles.contactContainer}>
          <Image src={mail}></Image>
          <h4>j.najnudel@ringover.com</h4>
        </div>
        <div className={styles.contactContainer}>
          <Image src={call}></Image>
          <h4>+33 07 55 35 23 21</h4>{" "}
          <h4 style={{ color: "red", marginLeft: "10px", fontSize: "12px" }}>
            Primary
          </h4>
        </div>
        <div className={styles.contactContainer}>
          <Image src={call}></Image>
          <h4>+33 07 55 35 23 21</h4>
        </div>
      </div>
      <div className={styles.additional}>
        <h3>Additional</h3>
        <div className={styles.contactContainer}>
          <Image src={mail}></Image>
          <h4>president@ringover.com</h4>
        </div>
        <div className={styles.contactContainer}>
          <Image src={call}></Image>
          <h4>Français</h4>
        </div>
        <div className={styles.contactContainer}>
          <Image src={call}></Image>
          <h4>www.youtube.com/ringover</h4>
        </div>
        <div className={styles.contactContainer}>
          <Image src={call}></Image>
          <h4>Indian Standard (+5:30)</h4>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.call}>
          <Image src={callWhite}></Image>
        </div>
        <div className={styles.actionBar}>
          <Image src={call}></Image>
          <Image src={call}></Image>
          <Image src={call}></Image>
          <Image src={call}></Image>
        </div>
      </div>
    </div>
  );
}

export default Profile;
