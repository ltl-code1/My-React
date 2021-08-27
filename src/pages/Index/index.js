import React from 'react';
import './index.scss';
import axios from 'axios'
import { Carousel, Grid, Flex } from 'antd-mobile';



const data = Array.from(new Array(4)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));

class Index extends React.Component {
    state = {
        //轮播图状态
        swipers: [],
        //租房小组状态
        groups: []
    }

    //轮播图数据请求
    async getSwipers(){
        const res = await axios.get('http://localhost:8080/home/swiper');
        this.setState({swipers: res.data.body})
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

    componentDidMount() {
        this.getSwipers();
        this.getGroups();
    }
    render() {
        return (
            <div className="index">
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
                </div>
            </div>
        )
    }
}

export default Index;
