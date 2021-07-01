import React from "react";
import "../App.css";

function Footer() {
	return (
		<section className="mt-5 footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6 d-flex flex-column-reverse align-items-center">
						<p className="footer-content">
							envelope: 
							<a href="mailto:jacob@domain.com">
								jacob@domain.com
							</a>
						</p>
						<p className="footer-content">
							whatsapp +91 7878954123
						</p>
						<p className="footer-content">
							envelope +91 9856777777
						</p>
					</div>
					<div className="col-lg-3 col-sm-6">
						<p className="footer-heading">Useful Links</p>
						<ul>
							<li>About us</li>
							<li>Courses</li>
							<li>Resources</li>
							<li>Results</li>
							<li>Blogs</li>
							<li>Contact</li>
							<li>Enrollment</li>
						</ul>
					</div>
					<div className="col-lg-3 col-sm-6">
						<p className="footer-heading">Courses & Programs</p>
						<ul>
							<li>IBDP Regular Course</li>
							<li>IBDP Summer or Winter program</li>
							<li>Pre IB Summer Crash Course</li>
							<li>Study yourself and Test Yourself</li>
							<li>IGCSE Regular Course</li>
							<li>IGCSE Test Series</li>
							<li>MYP Regular Course</li>
						</ul>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="row">
							<div className="col-12">
								<p className="footer-heading">
									Registered Office
								</p>
								<p className="footer-content">
									Akshya Nagar 1st Block 1st Cross, Rammurthy
									nagar, Bangalore-560016
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<img
									src={"/assets/map.png"}
									alt="Map"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
