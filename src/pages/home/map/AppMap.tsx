import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { Map, CoverView, CoverImage } from '@tarojs/components'
import './amap.scss'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {
  latitude: number // 纬度，范围为 -90~90，负数表示南纬
  longitude: number // 经度 范围为 -180~180，负数表示西经
}

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
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface AppMap {
  props: IProps
}

class AppMap extends Component {
  private mapContext: any;

  config: Config = {
    navigationBarTitleText: 'YF智能洗车'
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
    showSiteDetail: false
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    this.mapContext = Taro.createMapContext('ezxMap')
    this.getUserLocation()
  }

  // 点击地图事件
  private handleClickMap = (e) => {
    console.log(e, 'handleClickMap')
    this.setState({ showSiteDetail: false })
  }

  // 点击定位图标事件
  private handleClickLocation = (e) => {
    this.getUserLocation()
  }

  // 点击门店图标事件
  private handleClickSite = () => {
    Taro.navigateTo({
      url: '/pages/site/index'
    })
  }

  /** 
   * https://developers.weixin.qq.com/miniprogram/dev/api/wx.scanCode.html
   * 扫描二维码
  */
  private handleClickScan = () => {
    Taro.scanCode({
      onlyFromCamera: true,
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('扫码异常：', err)
    })
  }

  /** 
   * @description 获取当前用户的地理位置、速度。当用户离开小程序后，此接口无法调用。
   * @api https://developers.weixin.qq.com/miniprogram/dev/api/wx.openLocation.html
  */
  private getUserLocation() {
    Taro.showLoading()
    Taro.getLocation({
      type: "gcj02",
      success: res => {
        this.setState({ userLocation: res })
        this.mapContext.moveToLocation();
        Taro.hideLoading()
      },
      fail: err => {
        Taro.hideLoading()
        console.error('获取用户地理位置失败：', err)
      }
    });
    // this.mapContext.getCenterLocation({
    //   success: function (res) {
    //     console.log(res, 'res')
    //   }
    // })
  }

  render() {
    const { userLocation, showSiteDetail } = this.state
    const { latitude, longitude } = userLocation
    return <Map
      className='map-context'
      id="ezxMap"
      showLocation
      latitude={latitude}
      longitude={longitude}
      onClick={this.handleClickMap}
      markers={[
        {
          id: 1,
          latitude: 31.245770,
          longitude: 121.591540,
          iconPath: require('../images/point.png')
        },
        {
          id: 2,
          latitude: 31.203410,
          longitude: 121.407510,
          iconPath: require('../images/point.png')
        },
        {
          id: 3,
          latitude: 31.252700,
          longitude: 121.588980,
          iconPath: require('../images/point.png')
        },
        {
          id: 4,
          latitude: 31.239186,
          longitude: 121.581920,
          iconPath: require('../images/point.png')
        },
        {
          id: 5,
          latitude: 31.247600,
          longitude: 121.578380,
          iconPath: require('../images/point.png')
        },
        {
          id: 6,
          latitude: 31.249053,
          longitude: 121.595645,
          iconPath: require('../images/point.png')
        }
      ]}
    >
      <CoverView className='map-location' onClick={this.handleClickLocation}>
        <CoverImage className='img-location' src={require('../images/location.png')} />
      </CoverView>
      <CoverView className='wash-scan' onClick={this.handleClickScan}>
        <CoverView className='img-wrap'>
          <CoverImage className='img-scan' src={require('../images/scan.png')} />
        </CoverView>
        <CoverView className='btn-text'>掃碼洗車</CoverView>
      </CoverView>
      <CoverView className='map-store' onClick={this.handleClickSite}>站點
            {/* <CoverImage className='img-store' src={require('./images/store.png')} /> */}
      </CoverView>
      {/* 站点信息 */}
      {showSiteDetail && <CoverView className='map-site'>
        <CoverView className='site-info'>
          <CoverView className='name'>中石化上海虹橋站</CoverView>
          <CoverView className='attr'>
            <CoverView className='tag'>15分鐘免費停車</CoverView>
            <CoverView className='tag'>文明排隊</CoverView>
          </CoverView>
        </CoverView>
        <CoverView className='navigation'>
          <CoverView className='img-box'>
            <CoverImage className='img' src={require('../images/navigation.png')} />
          </CoverView>
          <CoverView className='distance'>155km</CoverView>
        </CoverView>
      </CoverView>}
    </Map>
  }
}

export default AppMap as ComponentClass<PageOwnProps, PageState>
