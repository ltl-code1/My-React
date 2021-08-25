import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './index.scss';
import Index from '../Index';
import HouseList from '../HouseList';
import News from '../News';
import Profile from '../Profile';


//TabBar数据
const tabItems = [
	{
		title: '首页',
		icon: 'icon-shouye',
		path: '/home/index'
	},
	{
		title: '找房',
		icon: 'icon-fangdajing',
		path: '/home/list'
	},
	{
		title: '咨询',
		icon: 'icon-zixun',
		path: '/home/news'
	},
	{
		title: '我的',
		icon: 'icon-ziyuan',
		path: '/home/profile'
	}
]

class App extends React.Component{

	state = {
		selectedTab: this.props.location.pathname
	};

	renderTabBarItem(){
		return tabItems.map(item => <TabBar.Item
			title={item.title}
			key={item.title}
			icon={<i className={`iconfont ${item.icon}`} />}
			selectedIcon={<i className={`iconfont ${item.icon}`} />}
			selected={this.state.selectedTab === item.path}
			onPress={() => {
			this.setState({
				selectedTab: item.path,
			});
			this.props.history.push(item.path);
			}}
		/>)
	}

	render(){
		return(
			<div className="Home">
				<Route path="/home/index" component={Index} />
				<Route path="/home/list" component={HouseList} />
				<Route path="/home/news" component={News} />
				<Route path="/home/profile" component={Profile} />


				<TabBar
					tintColor="#33A3F4"
					noRenderContent={true}
				>
					{this.renderTabBarItem()}
				</TabBar>
			</div>
		)
	}
}

export default App;
