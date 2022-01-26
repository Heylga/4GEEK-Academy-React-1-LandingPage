import React from "react";
//import Navbar from "../component/Navbar.jsx";

// include styles
import "../../styles/Main.css";
//include images into your bundle
import headerFoto from "../../img/header-foto.png";

//create your first component
const Main = () => {
	return (
		<div>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={headerFoto} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Main;
