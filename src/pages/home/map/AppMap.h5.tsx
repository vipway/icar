import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import appConfig from '../../../config/app'
import './amap.scss'

type PageStateProps = {
  latitude: number // 纬度，范围为 -90~90，负数表示南纬
  longitude: number // 经度 范围为 -180~180，负数表示西经
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageOwnProps

interface AppMap {
  props: IProps;
}

class AppMap extends Component {



  config: Config = {
    navigationBarTitleText: '首页'
  }

  private amap: any
  private refMap: HTMLElement

  componentDidMount() {
    window.onLoad = () => {
      const { latitude, longitude } = this.props
      this.amap = new AMap.Map('appMap', {
        resizeEnable: true,
        center: [longitude, latitude],
        zoom: 15
      });
      // 中骏广场唯品会
      new AMap.Marker({
        map: this.amap,
        icon: require('../images/point.png'),
        position: [longitude, latitude]
      });

      // 恒基旭辉
      new AMap.Marker({
        map: this.amap,
        icon: require('../images/point.png'),
        position: [121.317094, 31.211006]
      });

      // 富力集团
      new AMap.Marker({
        map: this.amap,
        icon: require('../images/point.png'),
        position: [121.305802, 31.201993]
      });


    }
    const url = `https://webapi.amap.com/maps?v=1.4.13&key=${appConfig.mapKey}&callback=onLoad`
    const jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);


  }

  render() {
    return (
      <div id='appMap' className='app-map'></div>
    )
  }
}

export default AppMap as ComponentClass<PageOwnProps, PageState>
