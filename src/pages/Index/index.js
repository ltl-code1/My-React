import React from 'react';
import './index.scss';

import { Carousel } from 'antd-mobile';

class Index extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
        this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
        }, 100);
    }
    render() {
        return (
        <div className="carousel">
            <Carousel
                autoplay
                infinite
            >
            {this.state.data.map(val => (
                <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                </a>
            ))}
            </Carousel>
        </div>
        );
    }
}

export default Index;
