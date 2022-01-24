import React from "react";
import styles from "../../styles/Home.module.scss";
import logo from "../../images/logo.png";
import vector from "../../images/Vector.jpg";
import vector1 from "../../images/Vector-1.jpg";
import photo from "../../images/photo.jpg";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image className={styles.img} src={logo} alt="logo" />
        <h3 className={styles.text}>Sales Machine</h3>
      </div>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.pannel}>
        <Image className={styles.profileImage} src={photo} alt="logo" />
        <Image className={styles.img} src={vector1} alt="logo" />
        <Image className={styles.img} src={vector} alt="logo" />
      </div>
    </div>
  );
}

export default Navbar;
