import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './index.scss';
import Index from '../Index';
import HouseList from '../HouseList';
import News from '../News';
import Profile from '../Profile';


class App extends React.Component{

	state = {
		selectedTab: this.props.location.pathname
	};

	render(){
		return(
			<div className="Home">
				<Route path="/home/index" component={Index} />
				<Route path="/home/list" component={HouseList} />
				<Route path="/home/news" component={News} />
				<Route path="/home/profile" component={Profile} />


				<TabBar
				tintColor="#33A3F4"
				barTintColor="white"
				noRenderContent={true}
				>
				<TabBar.Item
					title="首页"
					key="Life"
					icon={<i className="iconfont icon-shouye" />}
					selectedIcon={<i className="iconfont icon-shouye" />}
					selected={this.state.selectedTab === '/home/index'}
					onPress={() => {
					this.setState({
						selectedTab: '/home/index',
					});
					this.props.history.push('/home/index');
					}}
					data-seed="logId"
				>
					
				</TabBar.Item>
				<TabBar.Item
					icon={<i className="iconfont icon-fangdajing" />}
					selectedIcon={<i className="iconfont icon-fangdajing" />}
					title="找房"
					key="Koubei"
					selected={this.state.selectedTab === '/home/list'}
					onPress={() => {
					this.setState({
						selectedTab: '/home/list',
					});
					this.props.history.push('/home/list');
					}}
					data-seed="logId1"
				>
					
				</TabBar.Item>
				<TabBar.Item
					icon={<i className="iconfont icon-zixun" />}
					selectedIcon={<i className="iconfont icon-zixun" />}
					title="咨询"
					key="Friend"
					selected={this.state.selectedTab === '/home/news'}
					onPress={() => {
					this.setState({
						selectedTab: '/home/news',
					});
					this.props.history.push('/home/news');
					}}
				>
					
				</TabBar.Item>
				<TabBar.Item
					icon={<i className="iconfont icon-ziyuan" />}
					selectedIcon={<i className="iconfont icon-ziyuan" />}
					title="我的"
					key="my"
					selected={this.state.selectedTab === '/home/profile'}
					onPress={() => {
					this.setState({
						selectedTab: '/home/profile',
					});
					this.props.history.push('/home/profile');
					}}
				>
					
				</TabBar.Item>
				</TabBar>
			</div>
		)
	}
}

export default App;
