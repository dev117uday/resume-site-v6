import React from 'react'
import iryan from "../images/icon/ryan.jpg"
import iggsipu from "../images/icon/ggsipu.webp"
import imit from "../images/icon/mit.jpg"
import './css/Third.css'

function Third() {
	return (
		<div>
			<div>
				<br /><br />
				<center>
					<h2 className="non">Education</h2>
					<br />
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<p id="high-school" className="non">High School</p>
								<img
									decode="async"
									className="ins"
									src={iryan}
									alt="Ryan International School"
								/>
								<p className="non">
									10
									<sup>th</sup> Grade & 12
									<sup>th</sup> Grade
								</p>
								<p>Ryan International School, Mayur Vihar</p>
							</div>
							<div className="col-lg-4">
								<p id="high-school" className="non">Graduation</p>
								<img
									decode="async"
									id="ggsipu"
									src={iggsipu}
									alt="Btech degree"
								/>
								<p className="non">B.tech Computer Science Engineering</p>
								<p>GGSIPU</p>
							</div>
							<div className="col-lg-4">
								<p id="high-school" className="non">Post Graduation</p>
								<img
									decode="async"
									id="mit"
									src={imit}
									alt="MIT Manipal"
								/>
								<p className="non">M.tech Computer Science Engineering</p>
								<p>MIT Manipal</p>
							</div>
						</div>
					</div>
				</center>
			</div>
		</div>
	)
}

export default Third
