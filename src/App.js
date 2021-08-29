import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import CityList from './pages/CityList';



class App extends React.Component{

	render(){
		return(
			<Router>
				<Link to="/home"></Link>
				<Route path="/home" component={Home} />
				<Route path="/map" component={Map} />
				<Route path="/cityList" component={CityList} />
				{/* 路由重定向 */}
				<Route path="/" render={()=><Redirect to="/home" />} />
			</Router>
		)
	}
}

export default App;
