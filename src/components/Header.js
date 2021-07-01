import React from "react";

function Header() {
	return (
		<section className="py-5 pr-3 header">
			<div className="container">
				<div className="row d-flex justify-content-end">
					<ul className="d-flex flex-row flex-wrap">
						<li className="header-items">About us</li>
						<li className="header-items">Courses</li>
						<li className="header-items">Resources</li>
						<li className="header-items">Results</li>
						<li className="header-items">Why us</li>
						<li className="header-items">Gallery</li>
						<li className="header-items">Contact</li>
						<button className="button-4-header">ENROLL</button>
					</ul>
				</div>
				<div className="row">
					<div className="col-lg-6 col-sm-12">
						<p className="header-title">
							Experts for every curious learner
						</p>
						<p className="header-content">
							A team of passionate educators who believe in <br />
							"Creating the innovators and not the skilled
							workforce"
						</p>
						<button className="button-4">ENROLL NOW</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
