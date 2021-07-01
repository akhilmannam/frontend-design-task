import React from "react";
import "../App.css";

function Steps() {
	return (
		<section className="mt-5">
			<div className="container">
				<div className="row mb-3">
					<div className="offset-lg-3 col-lg-9 col-sm-12 steps">
						Steps Taken Towards Knowledge with Experts
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-lg-4 col-sm-12 mr-2 d-flex justify-content-center">
						<img
							src={"/assets/illustrations/Group483.png"}
							alt="Standing boy"
							className="img-fluid"
						/>
					</div>
					<div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center">
						<p className="title-1">IGCSE / MYP</p>
						<p className="content">
							To further supplement the learning of the students.
							These range from gaining access to past exam papers
							from the Knowledge Bank, use of the best equipment
							within the Classroom and even joining a network of
							internationally placed students.
						</p>
						<button className="button-3">KNOW MORE</button>
					</div>
				</div>
				<div className="row mb-3">
					<div className="offset-lg-8 col-lg-4 col-sm-12">
						<img
							src={"/assets/illustrations/Group5774.png"}
							alt="Sitting girl"
							className="img-fluid"
						/>
						<p className="title-1">Pre-IB Summer Crash Course</p>
						<p className="content">
							IB MYP / IGCSE Mentoring: This program is specially
							for the exceptionally motivated students (Grade 9
							onwards) who would like to get a head start in their
							pursuit of the IBDP Program.
						</p>
						<button className="button-3">KNOW MORE</button>
					</div>
				</div>
				<div className="row mb-3">
					<div className="offset-lg-3 col-lg-4 col-sm-12 d-flex justify-content-center">
						<img
							src={"/assets/illustrations/Group 5100.png"}
							alt="Sitting boy"
							className="img-fluid"
						/>
					</div>
					<div className="col-lg-5 col-sm-12">
						<p className="title-1">IBDP</p>
						<p className="content">
							IBDP (International Baccalaureate Diploma Programme)
							is an assessed program to develop students who have
							excellent breadth & depth of knowledge and challenge
							them intellectually and ethically, as well as,
							emotionally & physically.
						</p>
						<button className="button-3">KNOW MORE</button>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-sm-12 d-flex justify-content-center">
						<img
							src={"/assets/illustrations/Group5774.png"}
							alt="Palace"
							className="img-fluid"
						/>
					</div>
					<div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center">
						<p className="title-1">
							Studies in International Universities
						</p>
						<p className="content">
							the IB Diploma Programme are likely to enroll at top
							universities
						</p>
						<button className="button-3">KNOW MORE</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Steps;
