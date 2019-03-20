import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Text, Image, CoverView, CoverImage } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import scan from '../../assets/images/home/scan.png'
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
        <Map style={{ width: '100%', height: '100%' }} latitude={31.193327} longitude={121.497923} onClick={this.handleClickMap}>
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
