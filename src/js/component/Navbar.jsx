import React from "react";
import * as PropTypes from "prop-types";
import ButtonOwn from "./ButtonOwn.jsx";
import "../../styles/Navbar.css";
import propTypes from "prop-types";

const Navbar = (props) => {
	return (
		<>
			<ButtonOwn title="Services"></ButtonOwn>
			<ButtonOwn title="About Us"></ButtonOwn>
			<ButtonOwn title="Contact"></ButtonOwn>
		</>
	);
};
Navbar.PropTypes = {
	title: PropTypes.string,
	handleClick: PropTypes.func,
};
export default Navbar;
