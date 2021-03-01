import React, { Component } from 'react';
import './recipe.css';

class Recipe extends Component {

	render() {
		return (
			<div className="d-inline-flex w-100">
				<div className="">
					<img src={this.props.image} alt={this.props.label}/>
				</div>
				<div className="m-2 text-left label-div">
					<label>{this.props.label}</label>
				</div>
			</div>
		);

	}
}

export default Recipe;