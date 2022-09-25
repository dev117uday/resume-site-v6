import React from 'react'
import './css/Seventh.css'
import './css/Eight.css'
import igo from "../images/icon/golangT.webp"
import ijava from "../images/icon/java.webp"
import ireact from "../images/icon/react.webp"
import isb from "../images/icon/spring.webp"
import ipg from "../images/icon/postgres.webp"
import imon from "../images/icon/mongo.jpg"
import ilinux from "../images/icon/linux.webp"
import igcp from "../images/icon/gcp.webp"



function Seventh() {
    return (
        <div>
            <div>
                <br />
                <h2 className="non text-center">Skills</h2>
                <br />
                <center>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="col-sm-6">
                                    <center>
                                        <h4 className="text-center">
                                            Languages
                                        </h4>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={igo}
                                                    alt="go"
                                                    className="prog-icon"
                                                />
                                                <br /><button className='btn btn-outline-primary mt-1' data-bs-toggle="modal" data-bs-target="#golang">Golang </button>
                                                <div className="modal fade" id="golang" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="golangLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="golangLabel">Learning Golang</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> Getting Started With GO : <a target='_blank' href="https://www.coursera.org/account/accomplishments/certificate/K8GJP29VXTUJ"> View Here </a> </h5>
                                                                </div>
                                                                <div className="row">
                                                                    <h5> Golang Notes : <a target='_blank' href="https://dev117uday.gitbook.io/notes-md/golang"> View Here </a> </h5>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={ijava}
                                                    alt="java"
                                                    className="prog-icon"
                                                />
                                                <br /><button className='btn btn-outline-primary mt-1' data-bs-toggle="modal" data-bs-target="#java">Java </button>
                                                <div className="modal fade" id="java" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="javaLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="javaLabel">Learning Java</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> Java Notes : <a target='_blank' href="https://dev117uday.gitbook.io/notes-md/java"> View Here </a> </h5>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <br />
                                <br />
                            </div>

                            <div className="col-6">
                                <div className="col-sm-6">
                                    <center>
                                        <h4 className="text-center">
                                            Frameworks
                                        </h4>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={ireact}
                                                    alt="react"
                                                    className="prog-icon"
                                                />
                                                <br /><button className='btn btn-outline-primary mt-2' data-bs-toggle="modal" data-bs-target="#react">React</button>
                                                <div className="modal fade" id="react" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="reactLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="reactLabel">React.js</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> React : Zero to Hero - <a target='_blank' href="https://dev.to/dev117uday/everything-you-need-in-react-js-1akj">View Here </a> </h5>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={isb}
                                                    alt="asp"
                                                    className="prog-icon mt-1"
                                                />
                                                <br /><button className='btn btn-outline-primary mt-1' data-bs-toggle="modal" data-bs-target="#springboot">Spring Boot</button>
                                                <div className="modal fade" id="springboot" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="springbootLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="springbootLabel">Backend Development with Spring Boot</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> API and Microservices : <a target='_blank' href="https://www.freecodecamp.org/certification/fcc0cda39bf-ae38-4f67-b60e-61d916c647aa/apis-and-microservices"> View Here </a> </h5>
                                                                </div>

                                                                <div className="row">
                                                                    <h5> Spring Boot Notes : <a target='_blank' href="https://dev117uday.gitbook.io/notes-md/spring-boot"> View Here </a> </h5>
                                                                </div>
                                                            </div>

                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="col-sm-6">
                                    <h4 className="text-center">Databases</h4>
                                    <br />
                                    <center>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={ipg}
                                                    alt="psql"
                                                    className="prog-icon"
                                                />
                                                <br />  <button className='btn btn-outline-primary mt-1' data-bs-toggle="modal" data-bs-target="#postgres">PostgreSQL</button>
                                                <div className="modal fade" id="postgres" tabIndex="-1" aria-labelledby="postgresLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="postgresLabel">Learning PostgreSQL</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> Notes : <a target='_blank' href="https://dev117uday.gitbook.io/databases/sql/getting-started"> View Here </a> </h5>
                                                                </div>
                                                                <div className="row">
                                                                    <h5> PostgreSQL BootCamp : <a target='_blank' href="https://www.udemy.com/certificate/UC-bd195c02-cb1a-4a8c-a812-74d650772768/"> View Here </a> </h5>
                                                                </div>
                                                                <div className="row">
                                                                    <h5> SQL for Data Science : <a target='_blank' href="https://www.coursera.org/account/accomplishments/certificate/QSZYQYTZBMXU"> View Here </a> </h5>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={imon}
                                                    alt="mongo"
                                                    className="prog-icon"
                                                />
                                                <br /><button className='btn btn-outline-primary mt-1' data-bs-toggle="modal" data-bs-target="#mongodb">MongoDB</button>
                                                <div className="modal fade" id="mongodb" tabIndex="-1" aria-labelledby="mongodbLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="mongodbLabel">Certificates from MongoDB University</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> M001: MongoDB Basics : <a target='_blank' href="https://university.mongodb.com/course_completion/46d2fb39-22a0-40b8-97ca-5357b67f70ef"> View Here </a> </h5>
                                                                </div>
                                                                <div className="row">
                                                                    <h5> M103: Basic Cluster Administration : <a target='_blank' href="https://university.mongodb.com/course_completion/81f9fdb2-c707-4895-b9d7-c2da54f930be"> View Here </a> </h5>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="col-sm-6">
                                    <h4 className="text-center">Toolkit</h4>
                                    <br />
                                    <center>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={ilinux}
                                                    alt="linux"
                                                    className="prog-icon"
                                                />
                                                <br /><button className='btn btn-outline-primary mt-1' data-bs-toggle="modal" data-bs-target="#linux">Linux</button>
                                                <div className="modal fade" id="linux" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="linuxLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title danger" id="linuxLabel">windows not found</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> Shell Programming : <a target='_blank' href="https://dev117uday.gitbook.io/notes-md/tools/shell"> View Here </a> </h5>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img
                                                    decode="async"
                                                    src={igcp}
                                                    alt="cloud"
                                                    className="prog-icon"
                                                />
                                                <br /><button className='btn btn-outline-primary mt-1' data-bs-toggle="modal" data-bs-target="#gcp">GCP</button>
                                                <div className="modal fade" id="gcp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="gcpLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title danger" id="gcpLabel">windows not found</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="row">
                                                                    <h5> Google Cloud Skill Badges : <a target='_blank' href="https://www.qwiklabs.com/public_profiles/3f9407dd-4900-4257-8571-71f8be1774e1"> View Here </a> </h5>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
                <br />

                <br />
            </div>
        </div>
    )
}

export default Seventh
