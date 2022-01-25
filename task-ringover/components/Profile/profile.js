import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import cloud from "../../images/cloud.png";
import linkedin from "../../images/linkedin.png";
import call from "../../images/call.png";
import mail from "../../images/mail.png";
import callWhite from "../../images/call-white.png";
import people from "../../images/people.png";
import link from "../../images/link.png";
import language from "../../images/language.png";
import web from "../../images/web.png";
import video from "../../images/video.png";
import mailBlue from "../../images/mailBlue.png";
import chat from "../../images/chat.png";
import calender from "../../images/calender.png";
import edit from "../../images/edit.png";
import verified from "../../images/verified_user.png";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.credentials}>
        <span className={styles.user}>
          <h3 className={styles.name}>Jean-Samuel Najnudel</h3>
          <div className={styles.icons}>
          <Image src={verified}/>
          <Image src={edit}/></div>
        </span>
        <h3 style={{ color: "#6F8C94", marginBottom: "10px" }}>President</h3>
        <span className={styles.span}>
          <h3>Ringover | </h3>
          <Image src={people}></Image>
          <h3>101-250</h3>
        </span>
        <h3 style={{ color: "#41BCC3", marginBottom: "20px" }}>
          http://www.ringover.com
        </h3>
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
        <h3
          style={{ color: "#08464B", marginBottom: "20px", fontSize: "25px" }}
        >
          Topics
        </h3>
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
        <h3
          style={{ color: "#08464B", marginBottom: "20px", fontSize: "25px" }}
        >
          Contacts
        </h3>
        <div className={styles.contactContainer}>
          <Image src={mail}></Image>
          <h3>j.najnudel@ringover.com</h3>
        </div>
        <div className={styles.contactContainer}>
          <Image src={call}></Image>
          <h3>+33 07 55 35 23 21</h3>
          <h3 style={{ color: "red", marginLeft: "10px", fontSize: "12px" }}>
            Primary
          </h3>
        </div>
        <div className={styles.contactContainer}>
          <Image src={call}></Image>
          <h3>+33 07 55 35 23 21</h3>
        </div>
      </div>
      <div className={styles.additional}>
        <h3
          style={{ color: "#08464B", marginBottom: "20px", fontSize: "25px" }}
        >
          Additional
        </h3>
        <div className={styles.contactContainer}>
          <Image src={mail}></Image>
          <h3>president@ringover.com</h3>
        </div>
        <div className={styles.contactContainer}>
          <Image src={language}></Image>
          <h3>Français</h3>
        </div>
        <div className={styles.contactContainer}>
          <Image src={link}></Image>
          <h3>www.youtube.com/ringover</h3>
        </div>
        <div className={styles.contactContainer}>
          <Image src={web}></Image>
          <h3>Indian Standard (+5:30)</h3>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.call}>
          <Image src={callWhite}></Image>
        </div>
        <div className={styles.actionBar}>
          <Image src={video}></Image>
          <Image src={calender}></Image>
          <Image src={mailBlue}></Image>
          <Image src={chat}></Image>
        </div>
      </div>
    </div>
  );
}

export default Profile;
