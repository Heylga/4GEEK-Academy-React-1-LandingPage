import React from "react";
import * as PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../../styles/Form.css";
//npm install react-bootstrap bootstrap@5.1.3

const IForm = (props) => {
	return (
		<>
			<div class="container-fluid bg-light m-3 mr-3">
				<Form>
					<Form.Group className="mb-3 ml-3 ">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>
					<Form.Group className="mb-3 ml-3 ">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3 ml-3 ">
						<Form.Label>Phone number</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter phone number"
						/>
					</Form.Group>
					<Form.Group className="mb-3 ml-3">
						<Form.Check
							type="checkbox"
							label="Aceptar las condiciones de uso"
						/>
					</Form.Group>
					{/* <input
					onChange={(e) => this.setState({ value: e.target.value })}
					value={this.state.value}
				/>
				<button disabled={!this.value} /> */}
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		</>
	);
};

IForm.PropTypes = {
	// developedBy: PropTypes.string,
};

export default IForm;
