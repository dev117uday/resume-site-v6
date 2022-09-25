import React from 'react'
import igo from "../images/icon/golangT.webp"
import idb from "../images/icon/db.webp"
import ijava from "../images/icon/java.webp"
import iweb from "../images/icon/web_symbol.svg"
import './css/second.css'


function Second() {

	let aboutMe = "Final year student pursuing Computer Science Engineering from ADGITM | GGSIPU. Currently interning at Royal Bank of Scotland (now NatWest Group) and serving as a GitHub Campus Expert India.  Previously, facilitated 30 days of Google Cloud and held Web Team Lead for Google Developer Student Clubs ADGITM and was selected as a Fellow for Ethereum India Foundation. I am a Quick Learner with an interest in Backend Development and Database Engineering."
	let A = "SQL | Mongo | Redis"
	let B = "Js | React"
	let C = "Golang"
	let D = "Java | Spring"

	return (
		<div>
			<div className="light-grey">
				<br />
				<div className="container">
					<div className="container mt-3">
						<h2>About Myself</h2>
						<p>{aboutMe}</p>
					</div>
				</div>
				<br />
				<div className="container">
					<center>
						<h5>Areas of Interest :</h5>
						<div className="row">
							<div className="col-6 ">
								<div id="one" style={{ backgroundColor: "#11100f" }}>
									<img
										decode="async"
										src={iweb}
										alt="web"
										className="symbols"
									/>
									<p className="short-dis-c non">{B}</p>
								</div>
							</div>
							<div className="col-6 ">
								<div id="two" style={{ backgroundColor: "white" }}>
									<img
										decode="async"
										src={idb}
										alt="golang"
										className="symbols"
									/>
									<p className="short-dis-d non">{A}</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-6 ">
								<div id="four" style={{ backgroundColor: "white" }}>
									<img
										decode="async"
										src={ijava}
										alt="csharp"
										className="symbols"
									/>
									<p className="short-dis-d non">{D}</p>
								</div>
							</div>
							<div className="col-6 ">
								<div id="three" style={{ backgroundColor: "#11100f" }}>
									<img
										decode="async"
										src={igo}
										alt="binary"
										className="symbols"
									/>
									<p className="short-dis-c non">{C}</p>
								</div>
							</div>
						</div>
					</center>
				</div>
			</div>
		</div>
	)
}

export default Second
