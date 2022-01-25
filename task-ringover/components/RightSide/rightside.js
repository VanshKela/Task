import React from 'react'
import styles from '../../styles/Home.module.scss'
function RightSide() {
    return (
        <div className={styles.rightSide}>
            <div className={styles.actions}>Top</div>
            <div className={styles.pannel}>Bottom</div>
        </div>
    )
}

export default RightSide