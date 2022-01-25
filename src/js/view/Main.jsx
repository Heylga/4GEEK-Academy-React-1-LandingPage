import React from "react";

import ButtonOwn from "../component/ButtonOwn.jsx";
import Card from "../component/Card.jsx";

import "../../styles/Main.css";

const Main = () => {
	const signIn = (ev) => {};

	const signUp = (ev) => {};

	return (
		<>
			<ButtonOwn title="CLICK" handleClick={signIn} />
		</>
	);
};

export default Main;
