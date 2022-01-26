import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/Card.css";

import "../../img/results.jpg";
import "../../img/optimization.jpg";
import "../../img/teamwork.jpg";

const Card = (props) => {
	return (
		<>
			<div className="Container Card">
				<div className="row">
					<div className="col-md-12">
						<div className="carduno col-md-4">
							<img src="results.jpg" />
							<h5 class="card-title"> Power </h5>
							<p class="card-text"> Hello hello hello </p>
						</div>

						<div className="carddos col-md-4">
							<img src="optimization.jpg" />
							<h5 class="card-title"> Power 2 </h5>
							<p class="card-text"> Hello hello hello </p>
						</div>

						<div className="cardtres col-md-4">
							<img src="teamwork.jpg" />
							<h5 class="card-title"> Power 3 </h5>
							<p class="card-text"> Hello hello hello </p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Card.PropTypes = {};
export default Card;
