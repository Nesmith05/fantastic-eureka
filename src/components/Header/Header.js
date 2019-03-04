import React from "react";
import "./Header.css";

const Header = props => (
    <section id="hero" className="hero is-info is-medium">

        <div className="hero-body">
            <div className="container" id="info">
                <h1 className="title-1">
                    Natasha Smith - Front End Developer
                </h1>
                <figure class="image level-item">
                    <img className="is-rounded" src={require("../images/profile-pic1.png")} alt="profile-picture" id="profile"/>
                </figure>
                <div className="level-item" id="objective">
                    <p className="column is-7">
                        Seeking an entry level Front-End Developer position in which I can utilize my skillsets and creativity while developing new skills.
                    </p>                
                </div>
                
            </div>
            </div>
    </section>

        );
        
export default Header;