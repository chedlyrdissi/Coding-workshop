import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
    	<Switch>
      	<Route exact path="/" component={Home}/>
      	<Route path='*' exact={true}>
        	<Redirect from='*' to='/' />
      	</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
