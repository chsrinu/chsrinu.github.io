import React from "react"
import data from "../../companyWiseResponsibilities.json"
//import Modal from "./Mymodal"
import styles from "./companyList.module.css"

// function handleClose(id) {
//     document.getElementById(id).style.display="none"
// }

// function showDescriptions_onClick(id) {
//     document.getElementById(id).style.display="block"
// }

export default ({id}) => (

<div id={id} className={styles.container}>
    {data.map((elem)=>(
        <div className={styles.hoverEffect}>
        <img className="l_img" title={elem.title} src={require("../../static/" + elem.src)} alt={elem.src} />
        <p className="xs">{elem.role}</p>
        </div>
    ))}
</div>
)

