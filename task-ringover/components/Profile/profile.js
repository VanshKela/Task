import React from "react";
import styles from "../../styles/Home.module.scss";
function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.credentials}>
          <h3 className={styles.name}>Jean-Samuel Najnudel</h3>
      </div>
      <div className={styles.topics}>
          <h3>Topics</h3>
      </div>
      <div className={styles.contact}>
          <h3>Contacts</h3>
      </div>
      <div className={styles.additional}>
          <h3>Additional</h3>
      </div>
    </div>
  );
}

export default Profile;
