import React from 'react';
import './index.scss';
import axios from 'axios'
import { Carousel } from 'antd-mobile';

class Index extends React.Component {
    state = {
        //轮播图状态
        swipers: []
    }

    //轮播图数据请求方法
    async getSwipers(){
        const res = await axios.get('http://localhost:8080/home/swiper');
        this.setState({swipers: res.data.body})
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
    }
    render() {
        return (
            <div className="carousel">
                <Carousel
                    autoplay
                    infinite
                >
                    {this.renderSwipers()}
                </Carousel>
            </div>
        )
    }
}

export default Index;
