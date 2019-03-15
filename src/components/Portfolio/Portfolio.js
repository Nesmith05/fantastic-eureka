import React from "react";
import "./Portfolio.css";

const Portfolio = props => (
    <div className="wrapper">
        <section className="section">
        <h1 className="title">Portfolio</h1>
            <div className="container portfolio-container">

                <div className="wrapper" id="columns">
                    <div id="industry">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent is-4">
                                <article className="tile is-child is-4 box" id="memory">
                                </article>
                                <span className="app-title">
                                    <span><a className="code-links" href="https://github.com/Nesmith05/Memory-React" target="_blank"  rel="noopener noreferrer">Code</a>
                                    {/* <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br> */}
                                    </span>
                                    <span><a className="project-links" href="https://warm-harbor-37433.herokuapp.com/" target="_blank"  rel="noopener noreferrer">Sailor Senshi Memory Game</a></span>
                                </span>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="daytrippin">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/Daytrippin" target="_blank"  rel="noopener noreferrer">Code</a>
                                    <a className="project-links" href="https://nesmith05.github.io/Daytrippin/" target="_blank"  rel="noopener noreferrer">Daytrippin'</a>
                                </span>
                                
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="biteTracker">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/BiteTracker" target="_blank"  rel="noopener noreferrer">Code</a>
                                    <a className="project-links" href="https://nesmith05.github.io/BiteTracker/" target="_blank"  rel="noopener noreferrer">BiteTracker</a>
                                </span>
                                
                            </div>

                        </div>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="guessing">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/worlds-greatest" target="_blank"  rel="noopener noreferrer">Code</a>
                                    <a className="project-links" href="https://nesmith05.github.io/worlds-greatest/" target="_blank"  rel="noopener noreferrer">World's Greatest!</a>
                                </span>
                                
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="schedule">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/TrainScheduler" target="_blank"  rel="noopener noreferrer">Code</a>
                                    <a className="project-links" href="https://nesmith05.github.io/worlds-greatest/" target="_blank"  rel="noopener noreferrer">TrainScheduler</a>
                                </span>
                                
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="crystal">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/unit-4-game" target="_blank"  rel="noopener noreferrer">Code</a>
                                    <a className="project-links" href="https://nesmith05.github.io/unit-4-game/" target="_blank"  rel="noopener noreferrer">Crystal Collector</a>
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Portfolio;