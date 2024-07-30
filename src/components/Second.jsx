import React from 'react'
import igo from "../images/icon/golangT.webp"
import idb from "../images/icon/db.webp"
import ilinux from "../images/icon/linux.webp"
import icpp from "../images/icon/cpp.png"
import './css/second.css'


function Second() {

	let aboutMe = "Hello! I'm Uday Yadav, currently an intern at NetApp as a Member of Technical Staff (MTS)."
	let aboutMe2 = "I hold a Master's degree in Computer Science and Engineering from MIT Manipal, and a Bachelor's degree in the same field from Guru Gobind Singh Indraprastha University (GGSIPU)."
	let aboutMe3 = "Before, I interned at the NatWest Group, where I gained valuable experience in the financial technology sector. Additionally, I had the privilege of volunteering as a GitHub Campus Expert, helping students and developers collaborate on projects."
	let aboutMe4 = "I also served as the Web Team Lead at Google Developer Student Clubs (GDSC), where I led initiatives to enhance web development skills among students. As a quick learner, I'm passionate about diving deep into various aspects of technology."
	let aboutMe5 = " My interests include backend development, operating systems, database management, and cloud computing. I enjoy tackling challenging problems and continuously expanding my knowledge in these areas."
	let A = "SQL | Mongo | Redis"
	let B = "C/C++"
	let C = "Golang"
	let D = "Linux"

	return (
		<div>
			<div className="light-grey">
				<br />
				<div className="container">
					<div className="container mt-3">
						<h2>About Myself</h2>
						<ul class="">
							<li class="">{aboutMe}</li>
							<li class="">{aboutMe2}</li>
							<li class="">{aboutMe3}</li>
							<li class="">{aboutMe4}</li>
							<li class="">{aboutMe5}</li>
						</ul>
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
										src={icpp}
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
										src={ilinux}
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
