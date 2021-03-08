import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom';

import Home from './components/home';
import Chefs from './components/chefs/chefs';
import Chef from './components/chef/chef';
import AddRecipe from './components/addrecipe/addrecipe';
import Temp from './components/temp/temp';
import AddChef from './components/addchef/addchef';

function App() {
  return (
    <BrowserRouter>
      <header className="container">
        <a className="navbar-brand header-font p-3" href="/">Recipe App</a>
      </header>
      <nav className="container navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand p-1 navlink" activeClassName='is-active' to='/'>Home</NavLink>
        <NavLink className="navbar-brand p-1 navlink" activeClassName='is-active' to='/chefs'>Chefs</NavLink>
      </nav>
    	<Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/chefs" component={Chefs}/>
        <Route exact path="/chef/:id" component={Chef}/>
        <Route exact path="/addrecipe" component={AddRecipe}/>
        <Route exact path="/addchef" component={AddChef}/>
      	<Route exact path="/temp" component={Temp}/>
      	<Route path='*' exact={true}>
        	<Redirect from='*' to='/' />
      	</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
