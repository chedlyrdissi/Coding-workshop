import React, { Component } from 'react';


class Temp extends Component {

	state = {}

	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="container">
				<span>temp Component</span>
				<div>
					<button className="btn btn-outline-primary">button</button>
				</div>
			</div>
		);
	}
}

export default Temp;
