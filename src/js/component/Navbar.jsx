import React from "react";
import * as PropTypes from "prop-types";
import ButtonOwn from "./ButtonOwn.jsx";
import "../../styles/Navbar.css";
import propTypes from "prop-types";

import headerFoto from "../../img/header-foto.png";

const Navbar = (props) => {
	return (
		<>
			<div className="Container">
				<div className="row">
					<h1 className="header">PoWer-Up Stunning ∜ </h1>
				</div>

				<div className="row buttons">
					<ButtonOwn
						class="headerButtom"
						title="Services"></ButtonOwn>
					<ButtonOwn
						className="headerButtom"
						title="About Us"></ButtonOwn>
					<ButtonOwn
						className="headerButtom"
						title="Contact"></ButtonOwn>
				</div>

				<div className="row align-items-center">
					<h1 class="motivation">Revolutions never go backward</h1>
				</div>
				<div className="row align-items-center">
					<h1 class="footer">
						Focus on the solution and the quality of our service.
						Great teamwork brings us to great results given to our
						customers. We assure you a personal high assistance!
					</h1>
				</div>
			</div>
		</>
	);
};
Navbar.PropTypes = {};
export default Navbar;
