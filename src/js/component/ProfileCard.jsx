import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/ProfileCard.css";

const ProfileCard = (props) => {

	return (
		<>
            <div class="container">
                <h1>{props.name}</h1>
                <p>
                    {props.descriptionText}
                </p>
                <img src={props.urlImage} alt={props.altImage}></img>
            </div>
		</>
	);
};

ProfileCard.PropTypes = {
	name: PropTypes.string,
    descriptionText: PropTypes.string,
	headerTitle: PropTypes.string,
};

export default ProfileCard;
