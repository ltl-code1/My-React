import React from 'react';
import './index.scss';
import axios from 'axios'
import { Carousel, Grid, Flex } from 'antd-mobile';



// 导航菜单数据
const navs = [
    {
        id: 1,
        icon: 'icon-thin-_home_house',
        title: '整租',
        path: '/home/list'
    },
    {
        id: 2,
        icon: 'icon-hezu',
        title: '合租',
        path: '/home/list'
    },
    {
        id: 3,
        icon: 'icon-dingwei',
        title: '地图找房',
        path: '/home/list'
    },
    {
        id: 4,
        icon: 'icon-chuzuwu',
        title: '去出租',
        path: '/home/list'
    }
]

class Index extends React.Component {
    state = {
        //轮播图状态
        swipers: [],
        isSwipers: false,
        //租房小组状态
        groups: []
    }

    //轮播图数据请求
    async getSwipers(){
        const res = await axios.get('http://localhost:8080/home/swiper');
        this.setState({
            swipers: res.data.body,
            isSwipers: true
        })
    }

    //租房小组数据请求
    async getGroups(){
        const res = await axios.get('http://localhost:8080/home/groups?area=AREA%7C88cff55c-aaa4-e2e0');
        this.setState({groups: res.data.body});
    }



    //渲染轮播图结构
    renderSwipers(){
        return (
            this.state.swipers.map(item => (
                <a
                    key={item.id}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%' }}
                >
                    <img
                        src={`http://localhost:8080${item.imgSrc}`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                </a>
            ))
        );
    }

    //渲染导航菜单
    renderNavigation() {
        return (
            navs.map(item => <Flex.Item key={item.id} onClick={()=>this.props.history.push(item.path)}>
                <i className={`iconfont ${item.icon}`} />
                <h4 className="title">{item.title}</h4>
            </Flex.Item>)
        )
    }

    componentDidMount() {
        this.getSwipers();
        this.getGroups();
    }

    render() {
        return (
            <div className="index">

                {/********************* 轮播图模块 *********************/}
                <div className="carousel">
                    {
                        // 为解决轮播图不播放和高度不够的问题，isSwipers为true时再进行渲染
                        this.state.isSwipers ? 
                        <Carousel autoplay infinite>
                            {this.renderSwipers()}
                        </Carousel> :''
                    }
                    {/* 搜索部分 */}
                    <Flex className="search-container">
                        <Flex className="search">
                            <div className="location" onClick={()=>this.props.history.push('/cityList')}>
                                <span className="city">上海</span>
                                <i className={`iconfont icon-xiangxia`} />
                            </div>
                            <div className="search-content">
                                <i className={`iconfont icon-fangdajing`} />
                                <span className="propmt">请输入小区或地址</span>
                            </div>
                        </Flex>
                        <i className={`iconfont icon-ditudingwei`} onClick={()=>this.props.history.push('/map')} />
                    </Flex>
                </div>

                {/********************* 导航菜单部分 *********************/}
                <div className="navigation">
                    <Flex>
                        {this.renderNavigation()}
                    </Flex>
                </div>

                {/********************* 租房小组 *********************/}
                <div className="groups">
                    <div className="group-header">
                        <h3 className="title">租房小组</h3>
                        <span className="more">更多</span>
                    </div>
                    <Grid data={this.state.groups} activeStyle hasLine={false} square={false} columnNum={2} renderItem={(item)=>
                        <Flex justify="around" align="center" key={item.id}>
                            <div className="left">
                                <h4 className="group-title">{item.title}</h4>
                                <span>{item.desc}</span>
                            </div>
                            <img className="item-img" src={`http://localhost:8080${item.imgSrc}`} alt=""></img>
                        </Flex>
                    } />
                </div>
                
            </div>
        )
    }
}

export default Index;
