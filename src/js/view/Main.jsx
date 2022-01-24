import React from "react";
import ButtonOwn from "../component/ButtonOwn.jsx";
import "../../styles/Main.css";

const Main = () => {
	const signIn = (ev) => {};

	const signUp = (ev) => {};

	return (
		<>
			<ButtonOwn title="Iniciar sesion" handleClick={signIn}></ButtonOwn>
			<ButtonOwn title="Registrate" handleClick={signUp}></ButtonOwn>
		</>
	);
};

export default Main;
