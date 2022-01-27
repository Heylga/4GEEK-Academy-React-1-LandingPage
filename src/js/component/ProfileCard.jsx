import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/ProfileCard.css";

const ProfileCard = (props) => {
	return (
		<>
			<div class="container">
				<h1>{props.name}</h1>
				<p class="description_text">{props.descriptionText}</p>
				<img
					src={props.urlImage}
					alt={props.altImage}
					class={props.typeStyle === 1 ? "floatLeft" : "floatRight"}
				/>
			</div>
			<div class="container">
				<img
					src={props.urlImage}
					alt={props.altImage}
					class={props.typeStyle === 1 ? "floatRight" : "floatLeft"}
				/>
				<h1>{props.name}</h1>
				<p class="description_text">{props.descriptionText}</p>
			</div>
		</>
	);
};

ProfileCard.PropTypes = {
	Style: PropTypes.string,
	name: PropTypes.string,
	descriptionText: PropTypes.string,
	urlImage: PropTypes.string,
	altImage: PropTypes.string,
};

export default ProfileCard;
