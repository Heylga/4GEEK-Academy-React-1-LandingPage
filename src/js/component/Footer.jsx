import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/Footer.css";

const Footer = (props) => {
	return (
		<>
			<div class="container">
				<p class="description_text">{props.descriptionText}</p>
				<img
					src={props.urlImage}
					alt={props.altImage}
					class={props.typeStyle === "1" ? "floatLeft" : "floatRight"}
				/>
			</div>
		</>
	);
};

Footer.PropTypes = {
	name: PropTypes.string,
	descriptionText: PropTypes.string,
	urlImage: PropTypes.string,
	altImage: PropTypes.string,
	typeStyle: PropTypes.string,
};

export default Footer;
