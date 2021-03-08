import React, { Component } from 'react';
import './chef.css';


class Chef extends Component {

	state = {
		id: null,
		name: null,
		image: null
	}

	chefId;

	constructor(props) {
		super();
		// console.log(props);
	}

	componentDidMount() {
		console.log(this.props);
		this.chefId = this.props.match.params.id;
		this.getList();
	}

	getList = async () => {		
        const requestOptions = {
	        method: 'GET',
	      	headers: { 'Content-Type': 'application/json' }
    	};
        fetch(`http://localhost:4000/chef/${this.chefId}`,requestOptions)
        .then(response => response.json())
        .then((data) => {
        	this.setState(data);
        });
    }

	render() {
		let body;
		if(this.state.id !== null) {
			body = (
				<div className="container mt-5">
					<table className="table">
						<thead>
							<tr>
								<th>Picture</th>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src={this.state.image} alt={this.state.name}/></td>
								<td><label>{this.state.name}</label></td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		} else { 
			body = (<h3>Loading</h3>);
		}
		return (
			<div className="container">
				<h1>Chef</h1>
				{body}
			</div>
		);
	}
}

export default Chef;
