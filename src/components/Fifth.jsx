import React from 'react'

import ieyantra from "../images/icon/eyantra1.webp"
import idsc from "../images/icon/dsc-logo.webp"
import igcp from "../images/icon/gcp.webp"
import igit from "../images/icon/github.svg"
import iazure from "../images/icon/azure.webp"
// import idq from "../images/icon/no_circuit_dark_blue.webp"

function Fifth() {
    let eyantra = "https://drive.google.com/file/d/1Vra-qJ8HcGi_wR6qCMf1Sc-gdqXGUoqw/view?usp=sharing";
    let azureDev = "https://dev.to/devteam/microsoft-azure-trial-hackathon-winners-announced-1kkm#:~:text=powerfuldevs%20%23azure%20%23beginners-,Java%20Jackpot,-%3A%20%40dev117uday"

    return (
        <div>
            <div>
                <div className='container'>
                    <center>
                        <br />
                        <h2 className="non">Achievements</h2>
                        <br />
                        <br />
                        <div className="container bv-example-row">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img
                                        decode="async"
                                        src={ieyantra}
                                        alt="eyntra"
                                        style={{ width: "200px", height: "200px" }}
                                        className="ach"
                                    />
                                </div>
                                <div className="col-sm-8 text-start">
                                    <h4 className="ach-title">
                                        National Finalist : E-Yantra Robotics
                                        Competition
                                    </h4>
                                    <h6>
                                        Organized By : IIT Bombay : &nbsp;
                                        <a href="https://www.e-yantra.org/">here</a>
                                    </h6>
                                    <p className="text-muted">Sept 2019 - July 2020</p>
                                    <ul>
                                        <li>
                                            Ranked 5th finalists out of 1049 teams in
                                            the Biped Patrol theme
                                        </li>
                                        <li>
                                            Developed a self-balancing bot using
                                            gyroscope, accelerometer and a 8-bit Arduino
                                            microcontroller.
                                        </li>
                                        <li>
                                            Contributed in mathematical modelling,
                                            simulation of model in Octave, construction,
                                            and tunning of parameters.
                                        </li>
                                    </ul>

                                    <a target="_blank" href={eyantra} rel="noreferrer">
                                        <button className="btn btn-outline-primary">
                                            View Certificate
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="container bv-example-row">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img
                                        decode="async"
                                        src={iazure}
                                        alt="eyntra"
                                        style={{ width: "200px", height: "200px" }}
                                        className="ach"
                                    />
                                </div>
                                <div className="col-sm-8 text-start">
                                    <h4 className="ach-title">
                                        Grand Prize winner : Azure dev Hackathon
                                    </h4>
                                    <h6>
                                        Organized By : dev.to : &nbsp;
                                        <a target='_blank' href="https://dev.to/devteam/hack-the-microsoft-azure-trial-on-dev-2ne5">here</a>
                                    </h6>
                                    <p className="text-muted">Feb 2022 - March 2022</p>
                                    <ul>
                                        <li>
                                            Developed A multi module spring boot micro-service de-
                                            ployed on Azure spring cloud using Azure devops
                                        </li>
                                        <li>
                                            Implemented cloud gateway with circuit-
                                            breaking, eureka service registry and azure
                                            service binding, with logging and tracing.
                                        </li>
                                        <li>
                                            Implemented data modelling with spring data
                                            JPA on MySQL
                                        </li>
                                    </ul>

                                    <a target="_blank" href={azureDev} rel="noreferrer">
                                        <button className="btn btn-outline-primary">
                                            View Post
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br />
                    </center>
                </div>
                <br />
                <div className="light-grey">
                    <center>
                        <br />
                        <h3 className="non">Volunteering Experience</h3>
                        <p>( In College communities )</p>
                        <div className="container fluid">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div>
                                        <img
                                            decode="async"
                                            src={igit}
                                            style={{ width: "150px", height: "150px" }}
                                            alt="DSC"
                                            className="ach"
                                        />
                                    </div>
                                    <h4 className="ach-title">Github Campus Expert</h4>

                                    <h5>ADGITM</h5>

                                    <p>Oct '21 - Present</p>
                                    <p>
                                        Building and supporting communities, hosting events, workshops and trainings
                                    </p>
                                </div>

                                <div className="col-sm-4">
                                    <div>
                                        <img
                                            decode="async"
                                            src={igcp}
                                            style={{ width: "150px", height: "150px" }}
                                            alt="DSC"
                                            className="ach"
                                        />
                                    </div>
                                    <h4 className="ach-title">Cloud Facilitator</h4>

                                    <h5>GDSC ADGITM</h5>

                                    <p>Oct '21 - Nov '21</p>
                                    <p>
                                        Managed and Organized 30 days of Google Cloud Platform for ADGITM
                                    </p>
                                </div>
                                <div className="col-sm-4">
                                    <div>
                                        <img
                                            decode="async"
                                            src={idsc}
                                            style={{ width: "150px", height: "150px" }}
                                            alt="DSC"
                                            className="ach"
                                        />
                                    </div>
                                    <h4 className="ach-title">Web Lead & Core Team</h4>

                                    <h5>GDSC ADGITM</h5>

                                    <p>Sept '20 - Preset</p>
                                    <p>
                                        Responsibility to manage web operations at
                                        Google Developer Student Clubs ADGITM
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Fifth
