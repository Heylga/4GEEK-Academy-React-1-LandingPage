import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/Card.css";

import "../../img/results.jpg";
import "../../img/optimization.jpg";
import "../../img/teamworking.jpg";

const Card = (props) => {
	return (
		<>
			<div className="row Container Card">
				<div className="card carduno col-md-4">
					<div class="card-body">
						<img class="imgCard" src="results.jpg" />
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
				</div>

				<div className="card carddos col-md-4">
					<div class="card-body">
						<img class="imgCard" src="optimization.jpg" />
						<h5 class="card-title">
							<strong>OPTIMIZATION</strong>
						</h5>
						<p class="card-text">
							Optimized solutions <br /> & <br /> continuos
							improvement
						</p>
					</div>
				</div>

				<div class="card cardtres col-md-4">
					<div class="card-body">
						<img class="imgCard" src="teamworking.jpg" />
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
		</>
	);
};

Card.PropTypes = {};
export default Card;
