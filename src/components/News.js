import React from "react";
import "../App.css";
import Fade from "react-reveal/Fade";

function News() {
	return (
		<section className="mt-5">
			<div className="container">
				<div className="row mb-5">
					<div className="col-12 d-flex justify-content-center news">
						News & Events
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<Fade bottom>
						<div className="col-lg-4 col-sm-12 mb-2 d-flex align-self-stretch">
							<div className="card shadow">
								<img
									src={"/assets/news events/Rectangle-1.png"}
									alt="Lady in dark"
									className="img-fluid rounded"
								/>
								<p className="news-title p-2">
									Career Coffee Discussion
								</p>
								<p className="news-content p-2">
									Discussion on Introduction to IBDP,
									Importance of Phy. & Maths in K-12
									Education, After IB & Introduction to IB
									Experts 7on7 Pvt. Ltd.
								</p>
							</div>
						</div>
					</Fade>
					<Fade bottom>
						<div className="col-lg-4 col-sm-12 d-flex align-self-stretch">
							<div className="card shadow">
								<img
									src={
										"/assets/news events/Rectangle 2316.png"
									}
									alt="Bag"
									className="img-fluid rounded"
								/>
								<p className="news-title p-2">
									Summer Crash Course Program
								</p>
								<p className="news-content p-2">
									Student will be explained and guided for the
									journey of pursuing International
									Baccalaureate Diploma
								</p>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</section>
	);
}

export default News;
