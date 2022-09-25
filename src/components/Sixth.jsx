import React from 'react'
import './css/Sixth.css'

function Sixth() {
    return (
        <div>
            <div className="light-grey">
                <div>
                    <center>
                        <div className="container">
                            <center>
                                <br />
                                <h3>Find My Writings</h3>
                                <br />
                            </center>
                            <div className="row">
                                <div className="col-sm-4">
                                    <a
                                        target="_blank"
                                        href="https://dev117uday.github.io/codeblog/"
                                        rel="noreferrer"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            id="article-button"
                                        >
                                            Codeblog.md
                                        </button>
                                        <br />
                                        <br />
                                    </a>
                                </div>

                                <div className="col-sm-4">
                                    <a
                                        target="_blank"
                                        href="https://dev117uday.gitbook.io/databases/"
                                        rel="noreferrer"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            id="article-button"
                                        >
                                            Learning Database
                                        </button>
                                        <br />
                                        <br />
                                    </a>
                                </div>

                                <div className="col-sm-4">
                                    <a
                                        target="_blank"
                                        href="https://dev117uday.gitbook.io/notes-md/"
                                        rel="noreferrer"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            id="article-button"
                                        >
                                            Notes.md
                                        </button>
                                        <br />
                                        <br />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <a
                                        target="_blank"
                                        href="https://dev117uday.gitbook.io/data-structure-and-algorithms/"
                                        rel="noreferrer"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            id="article-button"
                                        >
                                            DSA.md
                                        </button>
                                        <br />
                                        <br />
                                    </a>
                                </div>
                                
                                <div className="col-sm-4">
                                    <a
                                        target="_blank"
                                        href="https://github.com/dev117uday/timeline"
                                        rel="noreferrer"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            id="article-button"
                                        >
                                            Things I Tried
                                        </button>
                                        <br />
                                        <br />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </center>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Sixth
