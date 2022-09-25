import React from 'react'
import iryan from "../images/icon/ryan.jpg"
import iggsipu from "../images/icon/ggsipu.webp"
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
							<div className="col-sm-6">
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
							<div className="col-sm-6">
								<p id="high-school" className="non">Graduation</p>
								<img
									decode="async"
									id="ggsipu"
									src={iggsipu}
									alt="Ryan International School"
								/>
								<p className="non">B.tech Computer Science Engineering</p>
								<p>ADGITM affiliated to GGSIPU</p>
							</div>
						</div>
					</div>
				</center>
			</div>
		</div>
	)
}

export default Third
