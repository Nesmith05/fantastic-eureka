import React from "react";
import "./Contact.css";

const Contact = props => (

    <section className="section contact">
        <div className="container">
            <h1 className="title">Contact Me</h1>
            {/* <div className="columns contact-column"> */}
                <div className="level is-mobile">
                    <div className="level-item" >
                        <span className="contact-icons">
                            <i class="fas fa-envelope  gradient-icon"></i>
                        </span>
                        <div id="email"> 
                            <span>Tasha.1004@gmail.com</span>
                        </div>
                    </div>
                    <div className="level-item">
                        <span className="contact-icons">
                            <i class="fab fa-github gradient-icon"></i>
                        </span>
                        <div> 
                            <a href="https://github.com/Nesmith05"  target="_blank"  rel="noopener noreferrer">GitHub</a>
                        </div> 
                    </div>
                    <div className="level-item">
                        <span className="contact-icons">
                            <i class="fab fa-linkedin gradient-icon"></i>
                        </span>
                        <div> 
                            <a href="https://www.linkedin.com/in/natasha-smith-834a44156/"  target="_blank"  rel="noopener noreferrer">LinkedIn</a>
                        </div> 
                    </div>
                </div>
            {/* </div> */}
        </div>
    </section>
);

export default Contact;