import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/ProfileCard.css";

const ProfileCard = (props) => {
	return (
		<>
			<div class="container-fluid">
				<div class="row  justify-content-center">
					<div class="col-12">
						<h1 class=" name">{props.name}</h1>
					</div>
				</div>
				<div class="row  justify-content-center">
					<div class="col-12 contElements">
						<div>
							<h4 class="description_text">
								{props.descriptionText}
							</h4>
						</div>
						<img src={props.urlImage} alt={props.altImage} />
					</div>
				</div>
			</div>
		</>
	);
};

ProfileCard.PropTypes = {
	name: PropTypes.string,
	descriptionText: PropTypes.string,
	urlImage: PropTypes.string,
	altImage: PropTypes.string,
};

export default ProfileCard;
