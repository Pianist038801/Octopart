import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Intro from './App';
import Main from './App_main';
const BasicExample = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Intro} />
			<Route path="/main" component={Main} />
		</Switch>
	</Router>
);
export default BasicExample;
