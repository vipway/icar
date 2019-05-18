import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

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

interface Shop {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class Shop extends Component {

  config: Config = {
    navigationBarTitleText: '購物車'
  }

  // 跳转至商场页面
  private toMall = () => {
    Taro.navigateTo({
      url: '/pages/mall/index'
    })
  }

  render() {
    return (
      <View className='shopping-page'>
        <View className='empty-cart'>
          <View><Image className='img' src={require('./images/empty-cart.png')} /></View>
          <View className='action'><Button className="btn" onClick={this.toMall}>去購物</Button></View>
        </View>
      </View>
    )
  }
}


export default Shop as ComponentClass<PageOwnProps, PageState>
