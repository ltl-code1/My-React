import React from 'react';
import './index.scss';
import axios from 'axios'
<<<<<<< Updated upstream
import { Carousel, Grid, Flex } from 'antd-mobile';



const data = Array.from(new Array(4)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
=======
import { Carousel, Flex } from 'antd-mobile';


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
>>>>>>> Stashed changes

class Index extends React.Component {
    state = {
        //轮播图状态
        swipers: [],
<<<<<<< Updated upstream
        //租房小组状态
        groups: []
=======
        isSwipers: false
>>>>>>> Stashed changes
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
                    style={{ display: 'inline-block', width: '100%', height: 212 }}
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
<<<<<<< Updated upstream
                <div className="carousel">
                    <Carousel
                        autoplay
                        infinite
                    >
                        {this.renderSwipers()}
                    </Carousel>
                </div>
                {/* 租房小组 */}
                <div className="groups">
                    <Grid data={data} activeStyle hasLine={false} square={false} columnNum={2} renderItem={()=>
                        <Flex justify="around" align="center">
                            <div className="left">
                                <h4 className="group-title">title</h4>
                                <span>content</span>
                            </div>
                            <img className="item-img" src="http://localhost:8080/img/groups/1.png" alt=""></img>
                        </Flex>
                    } />
=======
                {/* 轮播图模块 */}
                <div className="carousel">
                    {
                        // 为解决轮播图不播放和高度不够的问题，isSwipers为true时再进行渲染
                        this.state.isSwipers ? 
                        <Carousel autoplay infinite>
                            {this.renderSwipers()}
                        </Carousel> :''
                    }
                </div>

                {/* 导航菜单部分 */}
                <div className="navigation">
                    <Flex>
                        {this.renderNavigation()}
                    </Flex>
>>>>>>> Stashed changes
                </div>
            </div>
        )
    }
}

export default Index;
