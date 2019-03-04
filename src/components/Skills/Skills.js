import React from "react";
import "./Skills.css";

const Skills = props => (
    <section className="section">
        <div className="container">
            <h1 className="title">Skills</h1> 
            <h4 className="subtitle">Technical Skills</h4>  
            <div className="columns skills-column">

                <div className="column is-7">
                    <li>HTML</li>
                    <li>CSS</li>    
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>JavaScript/jQuery</li>
                </div>
                <div className="column is-4">
                    {/* <li>jQuery</li> */}
                    <li>MySQL</li>
                    <li>Git</li>
                    <li>React.js</li>
                    <li>APIs/AJAX</li>
                    <li>Node.js</li>
                </div>   
            </div> 
        </div>  
        <div className="container other-skills">
        <h4 className="subtitle">Soft Skills</h4>
            <div className="columns skills-column">
                <div className="column is-7">
                    <ul>
                        <li>Microsoft Office</li>
                        <li>Communcation</li>
                        <li>Critical Thinking</li>
                        <li>Teamwork</li>
                        <li>Active Listening</li>
                    </ul>
                </div>
                <div className="column is-4">
                    <ul>
                        <li>Flexibility</li>
                        <li>Organization</li>
                        <li>Resourcefulness</li>
                        <li>Self-management</li>
                        <li>Writing</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


);

export default Skills;