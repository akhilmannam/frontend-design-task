import React from "react";
import "../App.css";

function Testimonial() {
	return (
		<section className="mt-5">
			<div className="container">
				<div className="row mb-5">
					<div className="col-12 d-flex justify-content-center news">
						What our students and their parents say
					</div>
				</div>
				<div className="row">
					<div className="offset-lg-1 mb-2 col-lg-4 col-sm-12 d-flex justify-content-center">
						<img
							src={"/assets/testimonal.png"}
							alt="Testimonial"
							className="img-fluid"
						/>
					</div>
					<div className="offset-lg-1 col-lg-6 col-sm-12 d-flex flex-column justify-content-around align-items-start">
						<p className="testimonial-content">
							Thank you so much sir, for always believing in us
							and pushing us to achieve our best, I think I can
							speak from all us students behalf and say that your
							constant efforts helped ring out the best and we are
							very grateful
						</p>
						<p className="testimonial-name">
							Priya Shah - IBDP Certified
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
