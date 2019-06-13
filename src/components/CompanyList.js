import React from "react"
import data from "../../companyWiseResponsibilities.json"
import Modal from "./Mymodal"
import styles from "./companyList.module.css"

function handleClose(id) {
    document.getElementById(id).style.display="none"
}

function showDescriptions_onClick(id) {
    document.getElementById(id).style.display="block"
}

export default () => (
<div className={styles.container}>
    {data.map((elem)=>(
        <div>
            <div id={elem.key} style={{"display":"none"}} >
                    <Modal onClick={() => handleClose(elem.key)}>
                        <img className="s_img" src={require("../../static/" + elem.src)} alt={elem.src} />
                        <div className="l">{elem.description}</div>
                    </Modal>
            </div>
            <img className="l_img" onClick={() => showDescriptions_onClick(elem.key)} src={require("../../static/" + elem.src)} alt={elem.src} />
        </div>
    ))}
</div>
)