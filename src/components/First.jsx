import React from 'react'
import './css/First.css'
// importing images
import ime from '../images/img/me.jpg'
import igithub from '../images/icon/github.svg'
import ilinkedin from '../images/icon/linkedin.svg'
import idev from '../images/icon/devto.webp'
import itwitter from '../images/icon/twitter.webp'
import igce from '../images/icon/gce.webp'
import igmail from '../images/icon/Gmail.webp'

function TopNavBar() {

	let name = "Uday Yadav"
	let title = "MTS Intern @NetApp"
	let title1 = "Mtech CSE MIT Manipal"
	let title2 = ""
	let github = "https://github.com/dev117uday"
	let linkedin = "https://www.linkedin.com/in/uday-yadav-cs/"
	let twitter = "https://twitter.com/yadav117uday"
	let gce = "https://githubcampus.expert/dev117uday/"
	let medium = "https://dev.to/dev117uday"
	let outlook = "mailto:yadav117uday@gmail.com"
	let resume = "https://drive.google.com/drive/folders/1W1WOAu09_qRq8D07T6yvHMDp234dyhu0?usp=share_link"

	return (
		<div className="container mt-4">
			<center>
				<img
					decode="async"
					src={ime}
					alt="my face"
					id="profile-image"
					className="align-middle"
				/>
				<h1 id="name" className="mt-2">{name}</h1>
				<h5>{title}</h5>
				<h6>{title1}</h6>
				<h6>{title2}</h6>
			</center>
			<br />
			<div className="container mt-3">
				<div className="row">
					<div className="col-4 text-end">
						<a target="_blank" rel="noreferrer" href={github} >
							<img
								decode="async"
								src={igithub}
								className="logo"
								alt="github"
							/>
						</a>
					</div>
					<div className="col-4 text-center">
						<a target="_blank" rel="noreferrer" href={linkedin} >
							<img
								decode="async"
								src={ilinkedin}
								className="logo"
								alt="linkedin"
							/>
						</a>
					</div>
					<div className="col-4 text-start">
						<a target="_blank" rel="noreferrer" href={outlook} >
							<img
								decode="async"
								src={igmail}
								className="fat"
								alt="twitter"
							/>
						</a>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4 text-end">
						<a target="_blank" rel="noreferrer" href={medium} >
							<img
								decode="async"
								src={idev}
								className="logo"
								alt="medium"
							/>
						</a>
					</div>
					<div className="col-4 text-center">
						<a target="_blank" rel="noreferrer" href={twitter}>
							<img
								decode="async"
								src={itwitter}
								className="fat"
								alt="twitter"
							/>
						</a>
					</div>
					<div className="col-4 text-start">
						<a target="_blank" rel="noreferrer" href={gce} >
							<img
								decode="async"
								src={igce}
								className="logo"
								alt=" stack"
							/>
						</a>
					</div>
				</div>
			</div>
			<center>
				<a target="_blank" rel="noreferrer" href={resume} >
					<button className="btn btn-outline-primary mt-3" id="resume-button">
						Resume PDF
					</button>
				</a>
			</center>
			<br />
			<br />
		</div>
	)
}

export default TopNavBar
