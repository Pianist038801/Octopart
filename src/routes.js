import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Intro from './App';
import Main from './App_main';
const BasicExample = () => (
	<MuiThemeProvider>
		<Router>
			<Switch>
				<Route exact path="/" component={Intro} />
				<Route path="/main" component={Main} />
			</Switch>
		</Router>
	</MuiThemeProvider>
);
export default BasicExample;
