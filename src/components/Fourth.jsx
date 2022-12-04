import React from 'react'
import ieth from "../images/icon/eth-icon.webp"
import inatwest from "../images/icon/natwest.webp"
import igcp from "../images/icon/gcp.webp"
import './css/Fourth.css'

function Fourth() {
    return (
        <div>
            <div>
                <div id="light-grey">
                    <hr />
                    <div className="container" id="fourth-page">
                        <center>
                            <h2 className="non">Experience</h2>
                            <br />
                            <div className="container bv-example-row">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img
                                            decode="async"
                                            src={inatwest}
                                            id="natwest"
                                            alt="natwest"
                                        />
                                    </div>
                                    <div className="col-sm-8 text-start">
                                        <h4>Software Engineering Intern</h4>
                                        <h6>
                                            Natwest Group (erstwhile  Royal Bank of Scotland)
                                        </h6>
                                        <h6 className="text-muted">
                                            18<sup>st</sup> Aug '22 - 23<sup>th</sup> Feb
                                            2023
                                        </h6>
                                        <ul>
                                            <li>Apart of TMS (Treasury Management System) team.</li>
                                            <li>Involved in Reflatforming Infrastructure, Adapting to EU regulations.</li>
                                            <li>Tech Stack : Java, Spring Boot, Apache Camel, Oracle SQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <h2 className="non">Trainings</h2>

                            <br />
                            <div className="container bv-example-row">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img
                                            decode="async"
                                            src={ieth}
                                            id="eth"
                                            alt="eth"
                                        />
                                    </div>
                                    <div className="col-sm-8 text-start">
                                        <h4>Ethereum India Fellowship 2.0</h4>
                                        <h6>
                                            Organized By : Devfolio, Track 1 Fellow : &nbsp;
                                            <a
                                                target="_blank"
                                                href="https://devfolio.co/blog/devfolio-ethereum-india-fellowship-2-0-is-here/"
                                                rel="noreferrer">here</a>
                                        </h6>
                                        <h6 className="text-muted">
                                            1<sup>st</sup> Feb - 11<sup>th</sup> April
                                            2021
                                        </h6>
                                        <ul>
                                            <li>
                                                8-week fellowship to learn and develop
                                                on web3 and ethereum
                                            </li>
                                            <li>
                                                Reconstructed ENS that can be traded as
                                                NFTs
                                            </li>
                                            <li>
                                                Conceptualised and developed Project
                                                Deepchain, establishing the provenance
                                                of media to build trust against deep
                                                fakes and misinformation
                                            </li>
                                            <li>
                                                Proposed the concept of Decentralized Clock
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div><br />
                            <div className="container bv-example-row">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img
                                            decode="async"
                                            src={igcp}
                                            id="gcp"
                                            alt="gcp"
                                        />
                                    </div>
                                    <div className="col-sm-8 text-start">
                                        <h4>Google Cloud Spring Bootcamp</h4>
                                        <h6>
                                            Organized By : Google
                                        </h6>
                                        <h6 className="text-muted">
                                            21<sup>st</sup> June - 16<sup>th</sup> July
                                            2022
                                        </h6>
                                        <ul>
                                            <li>
                                                Month long training to learn about Linux, Cloud and
                                                Networking from Googlers.
                                            </li>
                                            <li>
                                                Successfully completed the challenge of re-architecting twitter on Google Cloud
                                                & dubugging faulty VM in production and applying fixes.
                                            </li>
                                            <li>
                                                Emerged Best Performing Team of the Cohort
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                    <br />
                </div>
                {/* <!-- <div>
            <br />
            <center>
                <h2>Projects</h2>
                Loading....
            </center>
        </div>
        <hr /> --> */}
            </div>
        </div>
    )
}

export default Fourth
