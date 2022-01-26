import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/Card.css";

const Card = (props) => {
	const handleClick = (ev) => {
		props.handleClick(ev);
	};

	return (
		<>
			<h1>{props.headerTitle}</h1>
			<button
				onClick={handleClick}
				type="button"
				role="button"
				className="HeaderButton">
				{props.title}
			</button>
			<img src={props.url} alt="display image" width="500" height="600" />
		</>
	);
};

Card.PropTypes = {
	title: PropTypes.string,
	handleClick: PropTypes.func,
	headerTitle: PropTypes.string,
	url: PropTypes.string,
};

export default Card;
