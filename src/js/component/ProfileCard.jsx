import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/ProfileCard.css";

const ProfileCard = (props) => {
	const typeStyle = props.typeStyle;
	//CASE typeStyle= "1": image float LEFT 
	//CASE typeStyle= "0": image float RIGHT 
	return (
		<>
			<div class="container">
				<h1>{props.name}</h1>
				<p>{props.descriptionText}</p>
				<img src={props.urlImage} alt={props.altImage} 
				class={
					(this.typeStyle === 1) ? 'floatLeft' : 'floatRight'
				}></img>
			</div>
		</>
	);
};

ProfileCard.PropTypes = {
	typeStyle: PropTypes.string,
	name: PropTypes.string,
	descriptionText: PropTypes.string,
	urlImage: PropTypes.string,
	altImage: PropTypes.string,
};

export default ProfileCard;
