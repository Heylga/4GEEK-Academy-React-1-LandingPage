import React from "react";
import ProfileCard from "../component/ProfileCard.jsx";

import "../../styles/Main.css";


const Main = () => {
	const signIn = (ev) => {};

	const signUp = (ev) => {};

	return (
		<>
			<ProfileCard title="Iniciar sesion" handleClick={signIn}></ProfileCard>
		</>
	);
};

export default Main;