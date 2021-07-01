import React from "react";
import { cardDetails } from "../data/card";
import Fade from "react-reveal/Fade";

import "../App.css";

function Cards() {
	return (
		<section className="mt-5">
			<div className="container">
				<div className="row mb-3">
					{cardDetails.map((cardDetail) => (
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex align-self-stretch mt-2">
							<Fade bottom>
								<div className="card shadow d-flex flex-column">
									<img
										src={cardDetail.cardImage}
										className="mx-auto my-auto p-2"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title text-center">
											{cardDetail.cardTitle}
										</h5>
										<p className="card-text text-center">
											{cardDetail.cardText}
										</p>
									</div>
								</div>
							</Fade>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Cards;
