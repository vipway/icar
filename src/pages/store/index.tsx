import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'
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

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Site {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class Site extends Component {

  config: Config = {
    navigationBarTitleText: '首頁'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  // 跳转至门店详情
  private toStoreDetail = () => {
    Taro.navigateTo({
      url: '/pages/storeDetail/index'
    })
  }

  render() {
    return (
      <View className='site-page'>
        <View className='filter'>
          {/* <View className='filter-region'>
            <Text className='name'>上海市</Text>
            <Image className='arrow' src={require('./images/arrow-down.png')} />
          </View> */}
          <View className='filter-input'>
            <Input placeholderClass='placeholder' cursorSpacing={10} placeholder='請輸入站點名蒐索' />
          </View>
        </View>
        <View className='site-list'>
          <View className='site-item'>
            <View className='img-wrap'>
              <Image className='site-img' src='http://washcar.jidiannetwork.com/file/hainan_admin/20181017/danzhouzhan.jpg' />
            </View>
            <View className='site-info' onClick={this.toStoreDetail}>
              <View className='site-base'>
                <View className='name'>上海市人民廣場南京西路店</View>
                <View className='status status-normal'>正常營業</View>
              </View>
              <View className='site-location'>
                <View className='address'>上海市黃浦區南京西路1566號匯智廣場地下一層</View>
                <View className='navigation'>
                  <Image className='img' src={require('../../assets/images/navigation.png')} />
                  <Text className='distance'>1256km</Text>
                </View>
              </View>
            </View>
          </View>

          <View className='site-item'>
            <View className='img-wrap'>
              <Image className='site-img' src='http://washcar.jidiannetwork.com/file/hainan_admin/20181017/danzhouzhan.jpg' />
            </View>
            <View className='site-info' onClick={this.toStoreDetail}>
              <View className='site-base'>
                <View className='name'>上海市金橋鎮道爾達加油站</View>
                <View className='status status-build'>建設中</View>
              </View>
              <View className='site-location'>
                <View className='address'>上海市浦東新區金橋鎮楊高中路1518弄道爾達加油站</View>
                <View className='navigation'>
                  <Image className='img' src={require('../../assets/images/navigation.png')} />
                  <Text className='distance'>1256km</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Site as ComponentClass<PageOwnProps, PageState>
