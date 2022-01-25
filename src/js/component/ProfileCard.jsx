import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/ProfileCard.css";

const ProfileCard = (props) => {
	const typeStyle = this.props.typeStyle;
	//CASE typeStyle= left: image float LEFT 
	//CASE typeStyle= right: image float RIGHT 
	return (
		<>
			<div class="container">
				<h1>{props.name}</h1>
				<p>{props.descriptionText}</p>
				<img src={props.urlImage} alt={props.altImage} 
				></img>
			</div>
		</>
	);
};

ProfileCard.PropTypes = {
	typeStyle: PropTypes.string,
	name: PropTypes.string,
	descriptionText: PropTypes.string,
	urlImage: PropTypes.string,
	altImage: PropTypes,
};

export default ProfileCard;
