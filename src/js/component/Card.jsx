import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/Card.css";

import "../../img/results.jpg";
import "../../img/optimization.jpg";
import "../../img/teamworking.jpg";

const Card = (props) => {
	return (
		<>
			<div className="Container Card">
				<div className="row">
					<div className="col-md-12">
						<div className="carduno col-md-4">
							<img src="results.jpg" />
							<h5 class="card-title">
								<strong>
									ELEGANT <br />
									RESULTS
								</strong>
							</h5>
							<p class="card-text">
								We provide you with <br /> successful & elegant
								<br /> results
							</p>
						</div>

						<div className="carddos col-md-4">
							<img src="optimization.jpg" />
							<h5 class="card-title">
								<strong>OPTIMIZATION</strong>
							</h5>
							<p class="card-text">
								Optimized solutions <br /> & <br /> continuos
								improvement
							</p>
						</div>

						<div className="cardtres col-md-4">
							<img src="teamworking.jpg" />
							<h5 class="card-title">
								<strong>
									COMMITED TO WIN <br /> TOGETHER
								</strong>
							</h5>
							<p class="card-text">
								Staying together is progress, <br /> Working
								together is success
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Card.PropTypes = {};
export default Card;
