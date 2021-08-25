import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component{

	render(){
		return(
			<Router>
				<Link to="/home"></Link>
				<Route path="/home" component={Home} />
				{/* 路由从定向 */}
				<Route path="/" render={()=><Redirect to="/home" />} />
			</Router>
		)
	}
}

export default App;
