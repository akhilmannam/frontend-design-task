import React from "react";
import "../App.css";

function Reasons() {
	return (
		<section className="mt-5">
			<div className="container">
				<div className="row mb-5">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<img
							src={"/assets/illustrations/Group467.png"}
							alt="Girl with Laptop"
							className="img-fluid"
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
						<p className="title">Why IBDP?</p>
						<p className="heading">
							The IBDP superior to other 16-19 curricula
						</p>
						<p className="content">
							IBDP Students find it easier to cope with the
							demanding workloads & time management, therefore
							better meeting the expectations placed on them
						</p>
						<button className="button-2">READ MORE</button>
					</div>
				</div>
				<div className="row d-flex flex-lg-row flex-md-row flex-sm-column-reverse">
					<div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
						<p className="title">Resources for students</p>
						<p className="heading">
							We offer a vast collection of resources
						</p>
						<p className="content">
							To further supplement the learning of the students.
							These range from gaining access to past exam papers
							from the Knowledge Bank, use of the best equipment
							within the Classroom and even joining a network of
							internationally placed students.
						</p>
						<button className="button-2">READ MORE</button>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<img
							src={"/assets/illustrations/Group6136.png"}
							alt="Girl with Book"
							className="img-fluid"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Reasons;
