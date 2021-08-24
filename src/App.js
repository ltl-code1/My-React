import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component{

	render(){
		return(
			<Router>
				<Link to="/home"></Link>
				<Route path="/home" component={Home} />
			</Router>
		)
	}
}

export default App;
