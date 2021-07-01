import React from "react";
import "../App.css";

function Courses() {
	return (
		<section className="mt-5">
			<div className="container">
				<div className="row mb-3">
					<div className="col-lg-6 p-3 col-sm-12 mb-3">
						<div className="row">
							<div className="col-2">
								<img
									src={"/assets/icons/winter-ic.png"}
									alt="winter"
									className="img-fluid"
								/>
							</div>
							<div className="col-8 d-flex justify-content-center">
								Summer/Winter Crash Course & Distant Learning
							</div>
						</div>
						<p className="content">
							This program is organized at Mumbai for outstation
							kids currently pursing their IB program in other
							parts of the country and abroad.
						</p>
						<div className="row d-flex">
							<button className="button-2">KNOW MORE</button>
							<button className="button-3">ENROLL</button>
						</div>
					</div>
					<div className="col-lg-6 p-3 col-sm-12 mb-3">
						<div className="row">
							<div className="col-2">
								<img
									src={"/assets/icons/summer-ic.png"}
									alt="summer"
									className="img-fluid"
								/>
							</div>
							<div className="col-8 d-flex justify-content-center">
								Pre-IB Summer Crash Course
							</div>
						</div>
						<p className="content">
							The program has been designed keeping with the
							challenges in mind that IB is going to throw upon.
							It ensures a smooth transition to the IB.
						</p>
						<div className="row d-flex">
							<button className="button-2">KNOW MORE</button>
							<button className="button-3">ENROLL</button>
						</div>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-lg-6 p-3 col-sm-12 mb-3">
						<div className="row">
							<div className="col-2">
								<img
									src={"/assets/icons/test.png"}
									alt="winter"
									className="img-fluid"
								/>
							</div>
							<div className="col-8 d-flex justify-content-center">
								IB & IGCSE Crash Course Test Series
							</div>
						</div>
						<p className="content">
							A program uniquely designed by us to summarise the
							whole IB & IGCSE knowledge into a crash course and a
							three tier test series
						</p>
						<div className="row d-flex">
							<button className="button-2">KNOW MORE</button>
							<button className="button-3">ENROLL</button>
						</div>
					</div>
					<div className="col-lg-6 p-4 col-sm-12 mb-3 colored">
						<div className="row">
							<div className="col-2">
								<img
									src={"/assets/icons/test.png"}
									alt="winter"
									className="img-fluid"
								/>
							</div>
							<div className="col-8 d-flex justify-content-center">
								Test Yourself
							</div>
						</div>
						<p className="content">
							A program uniquely designed by us to summarise the
							whole IB & IGCSE knowledge into a crash course and a
							three tier test series
						</p>
						<div className="row d-flex">
							<button className="button-4">START NOW</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Courses;
