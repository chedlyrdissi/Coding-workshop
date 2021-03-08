import React, { Component } from 'react';
import './addrecipe.css';


class AddRecipe extends Component {

	state = {}

	constructor(props) {
		super();
	}

	craeteRecipe = (event) => {
		event.preventDefault();
		console.log(event.target.label);
		console.log(event.target.image);
		const options = {
	        method: 'POST',
	      	headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				label: event.target.label.value,
				image: event.target.image.value
			})
    	};

		fetch('http://localhost:4000/recipes', options)
        .then(response => response.json())
        .then((data) => {
        	console.log(data);
        	this.props.parent.setList(data);
        	this.props.parent.toggleAdd();
        })
        .catch(error => console.log('An error occured ', error));
		return false;
	}

	changeHandler = (event) => {
		// console.log(event.currentTarget);
		console.log(event.currentTarget.value);
		// event.currentTarget.value += "+";
	}

	render() {
		return (
			<form method="POST" onSubmit={(event)=>{this.craeteRecipe(event)}}>
				<div className="container">
					<span>New recipe</span>
					<table className="table mt-2">
						<tbody>
							<tr>
								<td>Recipe Picture</td>
								<td><input name="image" type="text"/></td>
							</tr>
							<tr>
								<td>Recipe Name</td>
								<td><input name="label" type="text" onChange={(event)=>{this.changeHandler(event)}}/></td>
							</tr>
						</tbody>
					</table>
					<button className="btn btn-outline-primary">Create</button>
				</div>
			</form>
		);
	}
}

export default AddRecipe;
