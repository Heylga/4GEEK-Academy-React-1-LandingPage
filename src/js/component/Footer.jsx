import React from "react";
import * as PropTypes from "prop-types";

//import icon
import facebookIcon from "../../img/facebookIcon.png";
import instagramIcon from "../../img/instagramIcon.png";
import linkedinIcon from "../../img/linkedinIcon.png";

import "../../styles/Footer.css";

const Footer = (props) => {
	return (
		<>
			<div class="container">
				<div className="iconsContainer">
					<a title="link facebook" href="https://es-es.facebook.com/">
						<img src={facebookIcon} alt="facebook icon"></img>
					</a>
					<a title="link instagram" href="https://www.instagram.com/">
						<img src={instagramIcon} alt="instagram icon"></img>
					</a>
					<a title="link linkedin" href="https://es.linkedin.com/">
						<img src={linkedinIcon} alt="Linkedin icon"></img>
					</a>
				</div>
				<div className="textContainer">
					<p class="developedBy">{props.developedBy}</p>
				</div>
			</div>
		</>
	);
};

Footer.PropTypes = {
	developedBy: PropTypes.string,
	// colorBackgorund: PropTypes.string,
};

export default Footer;
