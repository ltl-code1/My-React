import React from 'react';
import './index.scss';

class Map extends React.Component{

    componentDidMount(){
        // 创建地图实例
        const map = new window.BMap.Map('container');
        //设置中心坐标
        const point = new window.BMap.Point(116.404, 39.915);
        //初始化地图，设置展示级别
        map.centerAndZoom(point, 15)
    }

    render(){
        return(
            <div className="map">
                <div id="container"></div>
            </div>
        )
    }
}

export default Map;
