import React, { Component } from 'react';
// import './addrecipe.css';


class AddChef extends Component {

	state = {}

	constructor(props) {
		super();
	}

	createChef = (event) => {
		event.preventDefault();
		// console.log(event.target.label);
		console.log(event.target);
		console.log(event.target.chefname.value);

		const options = {
	        method: 'POST',
	      	headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: event.target.chefname.value
			})
    	};

		fetch('http://localhost:4000/chefs', options)
        .then(response => response.json())
        .then((data) => {
        	console.log(data);
        	// this.props.parent.setList(data);
        	// this.props.parent.toggleAdd();
        })
        .catch(error => console.log('An error occured ', error));
		return false;
	}

	render() {
		return (
			<form method="POST" onSubmit={(event)=>{this.createChef(event)}}>
				<div className="container">
					<div className="row">
						<span>New Chef</span>
					</div>
					<div className="row">
						<input name="chefname" type="text"/>
					</div>
					<div className="row">
						<button className="btn btn-outline-info">Create</button>
					</div>
				</div>
			</form>
		);
	}
}

export default AddChef;
