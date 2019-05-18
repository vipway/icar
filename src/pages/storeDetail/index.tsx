import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {

}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface StoreDetail {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class StoreDetail extends Component {

  config: Config = {
    navigationBarTitleText: '門店詳情'
  }

  // 跳转至地图导航
  private handleNavgation = () => {
    Taro.showToast({
      title: '功能正在研發中~',
      icon: 'none'
    })
  }


  render() {
    return (
      <View className='store-detail-page'>
        <View><Image className='head-img' src={require('./images/head.jpg')} /></View>
        <View className='tags'>
          <View className='tag-item'>
            <View className='mark'><Image className='img' src={require('./images/tag01.jpg')} /></View>
            <View className='name'>免費停車</View>
            <View className='detail'>15分鐘免費停車</View>
          </View>
          <View className='tag-item'>
            <View className='mark'><Image className='img' src={require('./images/tag02.jpg')} /></View>
            <View className='name'>文明排隊</View>
            <View className='detail'>按指引排隊</View>
          </View>
          <View className='tag-item'>
            <View className='mark'><Image className='img' src={require('./images/tag03.jpg')} /></View>
            <View className='name'>24小時</View>
            <View className='detail'>無人值守智慧洗車</View>
          </View>
        </View>
        <View className='location'>
          <View className='address'>
            <Image className='img' src={require('./images/location.png')} />
            <Text>上海市黃浦區南京西路1566號匯智廣場地下一層</Text>
          </View>
          <View className='navigation' onClick={this.handleNavgation}>導航</View>
        </View>
        <View className='route'>
          <View className='title'>位置指引</View>
          <View className='guide'>
            <Image className='img' src={require('./images/guide01.jpg')} />
            <View className='explain'>入口處</View>
          </View>
          <View className='guide'>
            <Image className='img' src={require('./images/guide02.jpg')} />
            <View className='explain'>前方既是洗車機</View>
          </View>
        </View>
      </View>
    )
  }
}


export default StoreDetail as ComponentClass<PageOwnProps, PageState>
