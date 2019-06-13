import React from "react"
import CompanywiseExperice from "../components/CompanyList"
import gitIcon from "../../static/git.png";
import linkedIdIcon from "../../static/linkedIn.png"
import stackoverflowIcon from "../../static/stackoverflow.png"

export default () => 
<div>
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
                    experience. Willing to leverage my expertise and 
                    improvise them on a day to day basis. Willing to
                    be a part of team who wants to build applications
                    using cutting edge technologies.
                    </p>
                </div>
            </div>
        </div>
 </div>
 <CompanywiseExperice />
 <div className="communication_channel_styles">
     <a href="https://github.com/chsrinu" target="_blank"><img className="l_img" src={gitIcon} alt="gitUrl" /></a>
     <a href="https://stackoverflow.com/users/5142300/srinivas" target="_blank"><img className="l_img" src={stackoverflowIcon} alt="gitUrl" /></a>
     
     <a href="https://www.linkedin.com/in/srinivas-cheerla-22370a91/" target="_blank"><img className="l_img" src={linkedIdIcon} alt="linkedIn_profile" /></a> 
 </div>
 </div>

