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
                                    <a className="code-links" href="https://github.com/Nesmith05/Memory-React" target="_blank">Sailor Senshi Memory Game</a>
                                    <a className="project-links" href="#" target="_blank">Project</a>
                                </span>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="daytrippin">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/Daytrippin" target="_blank">Daytrippin'</a>
                                    <a className="project-links" href="#" target="_blank">Project</a>
                                </span>
                                
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="biteTracker">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/BiteTracker" target="_blank">BiteTracker</a>
                                    <a className="project-links" href="#" target="_blank">Project</a>
                                </span>
                                
                            </div>

                        </div>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="guessing">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/worlds-greatest" target="_blank">World's Greatest!</a>
                                    <a className="project-links" href="#" target="_blank">Project</a>
                                </span>
                                
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="schedule">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/TrainScheduler" target="_blank">TrainScheduler</a>
                                    <a className="project-links" href="#" target="_blank">Project</a>
                                </span>
                                
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box is-4" id="crystal">
                                </article>
                                <span className="app-title">
                                    <a className="code-links" href="https://github.com/Nesmith05/unit-4-game" target="_blank">Crystal Collector</a>
                                    <a className="project-links" href="#" target="_blank">Project</a>
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