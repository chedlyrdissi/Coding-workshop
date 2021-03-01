import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom';

import Home from './components/home';
import Chefs from './components/chefs/chefs';
import Chef from './components/chef/chef';

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
      	<Route path='*' exact={true}>
        	<Redirect from='*' to='/' />
      	</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
