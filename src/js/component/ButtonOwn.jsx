import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/ButtonOwn.css";

const ButtonOwn = (props) => {
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
				<h2>{props.title}</h2>
				
			</button>
		</>
	);
};

ButtonOwn.PropTypes = {
	title: PropTypes.string,
	handleClick: PropTypes.func,
	headerTitle: PropTypes.string,
};

export default ButtonOwn;
