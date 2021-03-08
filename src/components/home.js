import React, { Component } from 'react';
import Recipe from './recipe/recipe.js';
import AddRecipe from './addrecipe/addrecipe';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './home.css';


class Home extends Component {

	state = {
		list: [],
		addView: false,
		show: false
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
        fetch('http://localhost:4000/home',requestOptions)
        .then(response => response.json())
        .then((data) => {
        	// console.log(data);
        	this.setList(data)
        	// this.setState({list: data});
        });
    }

    setList = (list) => {
    	this.setState({list: list});
    }

    handleClick = async (event) => {
    	// console.log(event.target);
    	const i = event.target.attributes['index'].value;
    	// console.log(i);

    	// const newlist = this.state.list.filter((elem, index) => {
	    // 		return index != i;
	    // 	});

	    const newlist = this.state.list;
	    newlist.splice(i, 1);

    	console.log(newlist);

    	const options = {
	        method: 'POST',
	      	headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({data :newlist})
    	};

		fetch('http://localhost:4000/home', options)
        .then(response => response.json())
        .then((data) => {
        	console.log(data);
        	this.setState({list: data});
        })
        .catch(error => console.log('An error occured ', error));	
	};

	handleHover = (event) => {
		console.log('hovering');
		// alert('hovering');
	}

	handleHoverExit = (event) => {
		console.log('exit hovering');
		// alert('exit hovering');
	}

	toggleAdd = (event) => {
		this.setState({addView: !this.state.addView});
		console.log('toggle');
	};

  	handleClose = () => {
  		this.setState({show: false});
  	};
  	
  	handleShow = () => {
  		this.setState({show: true});
  	};


	render() {
		let row = []
		for(let i in this.state.list) {
			row.push(
				<div key={i} 
					className="d-inline-flex w-100 my-2 border border-dark p-2">
						<Recipe className="recipe" image={this.state.list[i].image} label={this.state.list[i].label}/>
						<button className="btn btn-outline-danger btn-close text-right m-2" index={i} onClick={(event)=>{this.handleClick(event)}}>X</button>
				</div>
				);
		}
		return (
			<div className="container">
				<div className="row my-2">
					<div className="col-11 text-left">
						<h1
							onMouseEnter={(event)=>{this.handleHover(event)}}
							onMouseLeave={(event)=>{this.handleHoverExit(event)}}
						>Recipes</h1>
					</div>
					<div className="col-1">
						<button className=" btn btn-outline-success" onClick={(event)=>{this.toggleAdd(event)}}>+</button>
					</div>
					<Button variant="primary" onClick={this.handleShow}>
				        Launch static backdrop modal
				    </Button>
				</div>
				<div className={`row my-2 ${this.state.addView? "" : "hidden"}`}>
					<AddRecipe parent={this}/>
				</div>


		    <Modal
		        show={this.state.show}
		        onHide={this.handleClose}
		        backdrop="static"
		        keyboard={false}
		      >
		        <Modal.Header closeButton>
		          <Modal.Title>Modal title</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		          <AddRecipe parent={this}/>
		        </Modal.Body>
		      </Modal>
				<div className="container mt-3">
					{row}
				</div>
			</div>
		);
	}
}

export default Home;

// <a className="text-right del m-2" href="#" onClick={()=>{this.handleClick(i)}}>X</a>
