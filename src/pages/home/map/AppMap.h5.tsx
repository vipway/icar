import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import appConfig from '../../../config/app'
import './amap.scss'

interface AMap<K, V> {

}

interface MapConstructor {
  Icon: any;
  Size: any;
  Map: any;
  Marker: any;
  new(): AMap<any, any>;
}
declare var AMap: MapConstructor;

type PageStateProps = {
  latitude: number // 纬度，范围为 -90~90，负数表示南纬
  longitude: number // 经度 范围为 -180~180，负数表示西经
}

type PageOwnProps = {}

type PageState = {
  userLocation: {
    latitude: number // 纬度，范围为 -90~90，负数表示南纬
    longitude: number // 经度 范围为 -180~180，负数表示西经
    speed: number // 速度，单位 m/s
    accuracy: number	// 位置的精确度
    altitude: number // 高度，单位 m
    verticalAccuracy: number // 垂直精度，单位 m（Android 无法获取，返回 0）
    horizontalAccuracy: number // 水平精度，单位 m
  },
  showSiteDetail: boolean // 显示站点详情
  markers: Array<any>; // 地图标记点
  siteInfo: {
    storeName: string;
    [anyKey: string]: any;
  } // 当前查看站点信息
}

type IProps = PageStateProps & PageOwnProps

interface AppMap {
  props: IProps;
}

class AppMap extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    userLocation: {
      latitude: 31.245770,
      longitude: 121.591540,
      speed: 0,
      accuracy: 0,
      altitude: 0,
      verticalAccuracy: 0,
      horizontalAccuracy: 0
    },
    showSiteDetail: false,
    markers: [],
    siteInfo: {
      storeName: ''
    }
  }

  private amap: any
  private refMap: HTMLElement
  static Icon: any;

  // componentDidMount
  componentDidMount() {
    this.initPage()

  }

  // 地图面板点击事件
  private handleClickMap = (e) => {
    this.setState({
      siteInfo: {},
      showSiteDetail: false
    })
    console.log(e, 'handleClickMap')
  }

  // 点击定位图标事件
  private handleClickLocation = (e) => {
    this.getUserLocation()
  }

  // 扫描二维码
  private handleClickScan = () => {

  }

  // 点击门店图标事件
  private handleClickSite = () => {
    Taro.navigateTo({
      url: '/pages/site/index'
    })
  }

  // 地图门店点击事件
  private handleMarker = (data, e) => {
    console.log(1111)
    this.setState({
      siteInfo: data,
      showSiteDetail: true
    })
    e.target.setIcon(
      new AMap.Icon({
        image: require('../images/point.png'),
        size: new AMap.Size(36, 36),
        imageSize: new AMap.Size(36, 36)
      })
    )
  }

  // 获取当前用户的地理位置、速度
  private getUserLocation() {

  }

  private initPage = () => {
    window.onload = () => {
      const { latitude, longitude } = this.props
      this.amap = new AMap.Map('appMap', {
        resizeEnable: true,
        center: [longitude, latitude],
        zoom: 15
      });
      const mockPoint = [
        {
          position: [longitude, latitude] // 中骏广场唯品会
        }, {
          position: [121.317094, 31.211006] // 恒基旭辉
        }, {
          position: [121.305802, 31.201993] // 富力集团
        }
      ]
      const markers: any = []
      mockPoint.map((point, i) => {
        const config = {
          map: this.amap,
          icon: require('../images/point.png'),
          position: point.position,
          topWhenClick: true,
          storeName: `海南测试店铺${i}`
        }

        markers.push(new AMap.Marker(config))
        markers[i].on('click', this.handleMarker.bind(this, config))
      })
      this.amap.on('click', this.handleClickMap)
      this.setState({ markers })
    }
    const url = `https://webapi.amap.com/maps?v=1.4.13&key=${appConfig.mapKey}&callback=onload`
    const jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }

  render() {
    const { siteInfo, showSiteDetail } = this.state
    const { storeName } = siteInfo
    return (
      <View className="app-map">
        <div id='appMap' className='map-context'></div>
        <View className='map-location' onClick={this.handleClickLocation}>
          <Image className='img-location' src={require('../images/location.png')} />
        </View>
        <View className='wash-scan' onClick={this.handleClickScan}>
          <View className='img-wrap'>
            <Image className='img-scan' src={require('../images/scan.png')} />
          </View>
          <View className='btn-text'>扫码洗车</View>
        </View>
        <View className='map-store' onClick={this.handleClickSite}>站点
            {/* <Image className='img-store' src={require('./images/store.png')} /> */}
        </View>
        {/* 站点信息 */}
        {showSiteDetail && <View className='map-site'>
          <View className="site-wrap">
            <View className='site-info'>
              <View className='name'>{storeName}</View>
              <View className='attr'>
                <View className='property-wrap'>
                  <View className='tag'>15分钟免费停车</View>
                  <View className='tag'>文明排队</View>
                </View>
                <View className='navigation'>
                  <View className='img-box'>
                    <Image className='img' src={require('../images/navigation.png')} />
                  </View>
                  <View className='distance'>155km</View>
                </View>
              </View>
            </View>

          </View>
        </View>}
      </View>
    )
  }
}

export default AppMap as ComponentClass<PageOwnProps, PageState>
