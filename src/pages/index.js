import React from "react"
import CompanywiseExperice from "../components/CompanyList"
import gitIcon from "../../static/git.png";
import linkedIdIcon from "../../static/linkedIn.png"
import stackoverflowIcon from "../../static/stackoverflow.png"
import ScrollDownAnchor from "../components/ScrollDownAnchor"
import upArrowIcon from "../../static/uparrow.png"
import dollar from "../../static/dollar.png"
import resume from "../../static/Srinivas Cheerla.pdf"
import styles from "./index.module.css"
import { Helmet } from "react-helmet"

function scrollToExperiencePage(){
    document.querySelector('#anchorOneTarget').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function scrollToCommunicationChannelPage() {
    document.querySelector('#anchorTwoTarget').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

export default () => 
<div>
<Helmet>
    <meta charSet="utf-8" />
    <title>Srinivas Cheerla</title>
    <meta name="description" content="Personal profile of Srinivas Cheerla" />
    <meta name="keywords" content="Job, looking for Job change, java developer,
    full stack developer" />
    <link rel="shortcut icon" type="image/jpg" href={dollar} sizes="16x16" />
</Helmet>
<div className="introContainer">
        <div style={{ "display": "flex", "flexDirection": "column" }}>
            <div className="nameContainer">
                I<span>'</span>M <br /> SRINIVAS <br /> CHEERLA<span>.</span>
            </div>
            <div className="workTitle"><span>{"{"}Full-Stack Developer{"}"}</span></div>
        </div>
        <div className="dpContainer">
            <div className="card">
                <div className="front">
                    <img className="imageProps" src="./dp.jpg" alt="dp" />
                </div>
                <div className="back">
                    <div className="s">Aims and Aspirations</div>
                    <p className="xs">Have build myself consistently 
                    with good programming tech stack in 4+ years of 
                    experience. Love to leverage my expertise and 
                    improvise them on a day to day basis. Willing to
                    be a part of team who wants to build applications
                    using cutting edge technologies.
                    </p>
                </div>
            </div>
            <a href={resume} download>
            <img className={`xs_img ${styles.resumeLink}`} src={upArrowIcon} title="download resume" alt="resumeLink" />
            </a>
            <div className="xxs" style={{"color":"white"}}><i>Click me</i></div>
            
        </div>
 </div>
 <ScrollDownAnchor onClick={scrollToExperiencePage} caption="My experiences"/>
 <CompanywiseExperice id="anchorOneTarget"/>
 <ScrollDownAnchor onClick={scrollToCommunicationChannelPage} caption="Communication channels"/>
 <div id="anchorTwoTarget" className="communication_channel_styles">
     <a rel="noopener noreferrer" href="https://github.com/chsrinu" target="_blank"><img className="l_img" src={gitIcon} alt="gitUrl" /></a>
     <a rel="noopener noreferrer" href="https://stackoverflow.com/users/5142300/srinivas" target="_blank"><img className="l_img" src={stackoverflowIcon} alt="gitUrl" /></a>
     <a rel="noopener noreferrer" href="https://www.linkedin.com/in/srinivas-cheerla-22370a91/" target="_blank"><img className="l_img" src={linkedIdIcon} alt="linkedIn_profile" /></a> 
 </div>

 </div>

