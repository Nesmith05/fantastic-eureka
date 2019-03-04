import React from "react";
import "./Experience.css";

const Expereince = props => (
    <section className="section">
        <div className="container skul-exp">
            <h1 className="title">Education</h1>
            <div className="columns">
                <div className="column is-12">
                    <ul>
                        <li>
                            <div className="date">
                                <span>Graduated December 2018</span>
                            </div>
                            <div className="degree">
                                <h2>Certification</h2>
                            </div>
                            <div className="school">
                                <h3>UNC Coding Bootcamp</h3>
                            </div>
                            <div className="location">
                                <h3>Charlotte, NC</h3>
                            </div>
                        </li>
                        <br></br>
                        <li>
                            <div className="date">
                                <span>Graduated May 2015</span>
                            </div>
                            <div className="degree">
                                <h2>Bachelor's Degree</h2>
                            </div>
                            <div className="school">
                                <h3>University of Georgia</h3>
                            </div>
                            <div className="location">
                                <h3>Athens, GA</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="columns is-7">
                <ul>
                    <li>
                        <div className="date">
                            <h4>Oct 2018 - Present</h4>
                        </div>
                        <div className="work-title">
                            <h3>Processing Specialist</h3>
                            <h3>Deluxe - Charlotte, NC</h3>
                        </div>
                        <div className="work-desc"></div>
                    </li>
                    <li>
                        <div className="date">
                            <h4>Sept 2016 - Oct 2018</h4>
                        </div>
                        <div className="work-title">
                            <h3>Processing Specialist </h3>
                            <h3>First Data - Charlotte, NC</h3>
                        </div>
                        <div className="work-desc"></div>
                    </li>
                </ul>
            </div> */}
        </div>
    </section>

);

export default Expereince;