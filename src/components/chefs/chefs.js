import React, { Component } from 'react';
import './chefs.css';


class Chefs extends Component {

	state = {
		list: []
	}

	constructor(props) {
		super();
		this.getList();
	}

	componentDidMount() {}

	async getList() {
        const requestOptions = {
	        method: 'GET',
	      	headers: { 'Content-Type': 'application/json' }
    	};
        fetch('http://localhost:4000/chefs',requestOptions)
        .then(response => response.json())
        .then((data) => {
        	// console.log(data);
        	this.setState({list: data});
        });
    }

	render() {
		let row = []
		for(let item of this.state.list) {
			row.push(
				<tr key={item.id}>
					<td>{item.id}</td>
					<td><a href={"/chef/"+item.id}>{item.name}</a></td>
				</tr>
			);
		}
		return (
			<div className="container">
				<h1>Chefs</h1>
				<div className="container mt-5">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Id</th>
								<th scope="col">Name</th>
							</tr>
						</thead>
						<tbody>
							{row}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Chefs;
