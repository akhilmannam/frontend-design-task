import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import "../App.css";

function CourseInfo() {
	return (
		<section className="mt-5 py-5 px-2 courseinfo">
			<div className="container">
				<div className="row mb-5">
					<div className="col-lg-4 col-sm-12 d-flex justify-content-center course-main">
						Regular Courses
					</div>
					<div className="col-lg-8 col-sm-12 d-flex justify-content-around align-items-center">
						<div>IBDP Course</div>
						<div>IGCSE Course</div>
						<div>MVP Course</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-sm-12 d-flex justify-content-center">
						<img
							src={"/assets/illustrations/Group 5100.png"}
							alt="Sitting boy"
							className="img-fluid"
						/>
					</div>
					<div className="col-lg-8 col-sm-12">
						<p className="course-heading">IBDP Courses</p>
						<p className="course-content mb-4">
							The IBDP is an assessed program to develop students
							who have excellent breadth & depth of knowledge and
							challenge them intellectually and ethically, as well
							as, emotionally & physically.
						</p>
						<div className="row">
							<div className="col-lg-4 col-sm-12">
								<p>
									<CheckIcon></CheckIcon> Physics HL & SL
								</p>
								<p>
									<CheckIcon></CheckIcon> Mathematics(AA) HL &
									SL
								</p>
								<p>
									<CheckIcon></CheckIcon> Mathematics(AI) HL &
									SL
								</p>
								<p>
									<CheckIcon></CheckIcon> Extended Essay in
									Physics
								</p>
							</div>
							<div className="col-lg-6 col-sm-12">
								<p>
									<CheckIcon></CheckIcon> HL & SL for Computer
									Science
								</p>
								<p>
									<CheckIcon></CheckIcon> ITGS
								</p>
							</div>
						</div>
						<div className="row">
							<button className="button-5">KNOW MORE</button>
							<button className="button-4">ENROLL</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CourseInfo;
