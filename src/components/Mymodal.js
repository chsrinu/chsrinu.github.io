import React from "react"
import styles from "./mymodal.module.css"


export default ({children, onClose}) => {
return (
    <div className={styles.modalContainer}>
                    <div className={styles.modalContent} >
                    <span className={styles.close} onClick={onClose}>&times;</span>
                        {children}
                    </div>
    </div>
)
}