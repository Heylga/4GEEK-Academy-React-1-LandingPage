import React from "react";
import Navbar from "../component/Navbar.jsx";
import ButtonOwn from "../component/ButtonOwn.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";
import IForm from "../component/Form.jsx";

// include styles
import "../../styles/Main.css";

const Main = () => {
	const signIn = (ev) => {};

	const signUp = (ev) => {};

	return (
		<>
			<div>
				<Navbar className="menu"></Navbar>
				<Card></Card>
			</div>
			<Footer developedBy="Design By Heylga &amp; Programisto1011" />
			<IForm />
		</>
	);
};

export default Main;
