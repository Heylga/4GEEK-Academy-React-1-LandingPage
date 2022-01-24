//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/ButtonOwn.css";
import "../styles/Card.css";
import "../styles/Footer.css";
import "../styles/Form.css";
import "../styles/Navbar.css";
import "../styles/ProfileCard.css";
import "../styles/TextContainer.css";


//import your own components
import Home from "./component/home.jsx";
import ButtonOwn from "./component/ButtonOwn.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx";
import Form from "./component/Form.jsx";
import Navbar from "./component/Navbar.jsx";
import ProfileCard from "./component/ProfileCard.jsx";
import TextContainer from "./component/TextContainer.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));




