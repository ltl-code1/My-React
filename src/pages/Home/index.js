import React from 'react';
import { TabBar } from 'antd-mobile';
import './index.scss';

class App extends React.Component{

	state = {
		selectedTab: 'blueTab',
	};

	render(){
		return(
			<div className="Home">
				<TabBar
				tintColor="#33A3F4"
				barTintColor="white"
				noRenderContent="true"
				>
				<TabBar.Item
					title="首页"
					key="Life"
					icon={<i className="iconfont icon-shouye" />}
					selectedIcon={<i className="iconfont icon-shouye" />}
					selected={this.state.selectedTab === 'blueTab'}
					onPress={() => {
					this.setState({
						selectedTab: 'blueTab',
					});
					}}
					data-seed="logId"
				>
					
				</TabBar.Item>
				<TabBar.Item
					icon={<i className="iconfont icon-fangdajing" />}
					selectedIcon={<i className="iconfont icon-fangdajing" />}
					title="找房"
					key="Koubei"
					selected={this.state.selectedTab === 'redTab'}
					onPress={() => {
					this.setState({
						selectedTab: 'redTab',
					});
					}}
					data-seed="logId1"
				>
					
				</TabBar.Item>
				<TabBar.Item
					icon={<i className="iconfont icon-zixun" />}
					selectedIcon={<i className="iconfont icon-zixun" />}
					title="咨询"
					key="Friend"
					selected={this.state.selectedTab === 'greenTab'}
					onPress={() => {
					this.setState({
						selectedTab: 'greenTab',
					});
					}}
				>
					
				</TabBar.Item>
				<TabBar.Item
					icon={<i className="iconfont icon-ziyuan" />}
					selectedIcon={<i className="iconfont icon-ziyuan" />}
					title="我的"
					key="my"
					selected={this.state.selectedTab === 'yellowTab'}
					onPress={() => {
					this.setState({
						selectedTab: 'yellowTab',
					});
					}}
				>
					
				</TabBar.Item>
				</TabBar>
			</div>
		)
	}
}

export default App;
