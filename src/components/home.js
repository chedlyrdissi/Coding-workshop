import React, { Component } from 'react';
import './home.css';


class Home extends Component {

	state = {
		list: []
	}

	constructor(props) {
		super();
		// this.state.setState()
		this.getList();
	}

	componentDidMount() {}

	async getList() {
        const requestOptions = {
	        method: 'GET',
	      	headers: { 'Content-Type': 'application/json' }
    	};
        fetch('http://localhost:4000/home',requestOptions)
        .then(response => response.json())
        .then((data) => {
        	console.log(data);
        	this.setState({list: data});
        });
    }

    fun = (event) => {
    	console.log(event);
    }

    remove = (event) => {
    	console.log(event)
    }

    handleClick(i) {
    	const newlist = this.state.list.filter((elem, index) => {
	    		return index !== i
	    	})
		const requestOptions = {
	        method: 'POST',
	      	headers: { 'Content-Type': 'application/json' },
			param: newlist
    	};
		fetch('http://localhost:4000/home/'+i,requestOptions)
        .then(response => response.json())
        .then((data) => {
        	console.log(data);
        	this.setState({list: data});
        });	
	}

	getRow() {
		return this.state.list.map((s, i)=>{
			return (<div className="col" key={i}>
				{s} <input className="ml-5 my-2 btn btn-outline-primary" type="button" name={i} onClick={() => this.handleClick(i)}/>
			</div>)
		})
	}

	render() {
		return (
			<div className="container">
				{this.getRow()}
			</div>
		);

	}
}

export default Home;