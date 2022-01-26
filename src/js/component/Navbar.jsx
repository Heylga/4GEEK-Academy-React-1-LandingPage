import React from "react";
import * as PropTypes from "prop-types";
import ButtonOwn from "./ButtonOwn.jsx";
import "../../styles/Navbar.css";

const Navbar = (props) => {
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
Navbar.PropTypes = {
	title: PropTypes.string,
	handleClick: PropTypes.func,
	headerTitle: PropTypes.string,
};
export default Navbar;
