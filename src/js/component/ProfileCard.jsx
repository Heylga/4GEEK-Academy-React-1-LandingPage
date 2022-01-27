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
					<div class="col-12 -elements">
						<div>
							<h4 class="description_text">
								{props.descriptionText}
							</h4>
						</div>
						<img
							src={props.urlImage}
							alt={props.altImage}
							class={
								props.typeStyle === "1"
									? "floatLeft"
									: "floatRight"
							}
						/>
					</div>
				</div>
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
