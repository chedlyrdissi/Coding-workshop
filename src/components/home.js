import React, { Component } from 'react';

class Home extends Component {

	state = {
		loading: true,
		list: []
	}

	constructor(props) {
		super();
		this.getTodos();
	}

	componentDidMount() {}

	async getTodos() {
        const requestOptions = {
	        method: 'GET'
    	};
        fetch('http://localhost:4000/home',requestOptions)
        .then(response => response.json())
        .then((data) => {
        	console.log(data);
        	this.setState({loading: false, list: data});
        });
    }

	render() {
		if ( this.state.loading ) {
			return <h3>Loading</h3>
		} else {
			return (
				<div className="container">
					<div className="row">
						I work
					</div>
					
					<div className="row">
						
					</div>
				</div>
			);
		}

	}
}

export default Home;