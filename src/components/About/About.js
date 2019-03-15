import React from "react";
import "./About.css";

const About = props => (
    <section className="section" id="about">
        <div className="container is-7 is-offset-2 ">            
        <h1 className="title-1">About Me</h1>
        <div className="columns">
            <div className="column level-item is-vcentered">
                <p>
                    Natasha Smith is an aspiring Front-End Web Developer now based in Charlotte, NC. After obtaining a Bacherlor's degree in English Language and Literature in 2015, she relocated to North Carolina, where she purused an interest in web development and design. This resulted in obtaining a certification in web development with the UNC Charlotte Boot Camp in 2018.
                </p>
            </div>
        </div>

        </div>
        
        <div className="download-button level-item">
            <a className="button is-primary is-inverted is-outlined" href="../images/Natasha-Smith_resume.doc" download>
                <i class="fa fa-download"></i> 
                Download Resume
            </a>
        </div>
    </section>
);

export default About;