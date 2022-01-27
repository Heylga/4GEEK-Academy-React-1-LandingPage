import React from "react";
import * as PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "../../styles/Form.css";
//npm install react-bootstrap bootstrap@5.1.3

const IForm = (props) => {
	return (
		<>
			<Row className="justify-content-center">
				<div class="container-fluid col-8 bg-light m-3 mr-3">
					<Form>
						<h2 class="text-center">Solicitar más información</h2>
						<p class="text-justify font-weight-light">
							Dejenos sus datos y contactaremos con usted
						</p>
						<Form.Group className="mb-3 ml-3 mt-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter name"
							/>
						</Form.Group>
						<Form.Group className="mb-3 ml-3 ">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
							/>
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
			</Row>
		</>
	);
};

IForm.PropTypes = {
	// developedBy: PropTypes.string,
};

export default IForm;
