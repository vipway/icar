import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import appConfig from '../../config/app'
import './index.scss'

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

  private refMap: HTMLElement;

  componentDidMount() {
    window.onLoad = () => {
      const { latitude, longitude } = this.props
      const map = new AMap.Map('appMap', {
        resizeEnable: true,
        center: [longitude, latitude],
        zoom: 13
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
