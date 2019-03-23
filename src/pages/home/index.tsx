import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Text, Image, CoverView, CoverImage } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

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

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Home {
  props: IProps
}

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
class Home extends Component {
  config: Config = {
    navigationBarTitleText: 'e智洗'
  }

  constructor() {
    super(...arguments)
  }

  private handleClickMap = (e) => {
    console.log(e, 'handleClickMap')
    return false
  }

  private onClickLocation = (e) => {
    console.log(e, 'onClickLocation')
  }

  render() {
    return (
      <View className='home-page'>
        <Map
          showLocation
          style={{ width: '100%', height: '100%' }}
          latitude={31.245770}
          longitude={121.591540}
          onClick={this.handleClickMap}
          markers={[
            {
              id: 1,
              latitude: 31.245770,
              longitude: 121.591540,
              iconPath: require('./images/point.png')
            },
            {
              id: 2,
              latitude: 31.203410,
              longitude: 121.407510,
              iconPath: require('./images/point.png')
            },
            {
              id: 3,
              latitude: 31.252700,
              longitude: 121.588980,
              iconPath: require('./images/point.png')
            },
            {
              id: 4,
              latitude: 31.239186,
              longitude: 121.581920,
              iconPath: require('./images/point.png')
            },
            {
              id: 5,
              latitude: 31.247600,
              longitude: 121.578380,
              iconPath: require('./images/point.png')
            },
            {
              id: 6,
              latitude: 31.249053,
              longitude: 121.595645,
              iconPath: require('./images/point.png')
            }
          ]}
        >
          <CoverView className='map-location' onClick={this.onClickLocation}>
            <CoverImage className='img-location' src={require('./images/location.png')} />
          </CoverView>
          <CoverView className='wash-scan'>
            <CoverView className='img-wrap'>
              <CoverImage className='img-scan' src={require('./images/scan.png')} />
            </CoverView>
            <CoverView className='btn-text'>扫码洗车</CoverView>
          </CoverView>
          <CoverView className='map-store' onClick={this.onClickLocation}>
            <CoverImage className='img-store' src={require('./images/store.png')} />
          </CoverView>
        </Map>
      </View>
    )
  }
}

export default Home as ComponentClass<PageOwnProps, PageState>
