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
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  render() {
    return (
      <View className='site-page'>
        <View className='filter'>
          <View className='filter-region'>
            <Text className='name'>上海市</Text>
            <Image className='arrow' src={require('./images/arrow-down.png')} />
          </View>
          <View className='filter-input'>
            <Input placeholderClass='placeholder' cursorSpacing={10} placeholder='请输入站点名搜索' />
          </View>
        </View>
        <View className='site-list'>
          <View className='site-item'>
            <View className='img-wrap'>
              <Image className='site-img' src='http://washcar.jidiannetwork.com/file/hainan_admin/20181017/danzhouzhan.jpg' />
            </View>
            <View className='site-info'>
              <View className='site-base'>
                <View className='name'>上海市人民广场南京西路店</View>
                <View className='status status-normal'>正常营业</View>
              </View>
              <View className='site-location'>
                <View className='address'>上海市黄浦区南京西路1566号汇智广场地下一层</View>
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
            <View className='site-info'>
              <View className='site-base'>
                <View className='name'>上海市金桥镇道尔达加油站</View>
                <View className='status status-build'>建设中</View>
              </View>
              <View className='site-location'>
                <View className='address'>上海市浦东新区金桥镇杨高中路1518弄道尔达加油站</View>
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
