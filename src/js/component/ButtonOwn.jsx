import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/ButtonOwn.css";

const ButtonOwn = (props) => {
	const handleClick = (ev) => {
		props.handleClick(ev);
	};

	return (
		<>
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
};

export default ButtonOwn;
