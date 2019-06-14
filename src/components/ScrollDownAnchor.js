import React from 'react'
import styles from './scrollDown.module.css'
import scrollDownIcon from "../../static/scrolldown.png"

export default ({onClick, caption}) => 
    <div>
        <div className={styles.scrollDownContainer}>
            <img className="m_img" onClick={onClick} src={scrollDownIcon} alt="scrollDownbtn" />
        </div>
        <div className={`xs ${styles.scrollDownText}`}>{caption}</div>
    </div>