import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Label } from '@tarojs/components'
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

interface ProductDetail {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class ProductDetail extends Component {

  config: Config = {
    navigationBarTitleText: '商城'
  }

  // 点击立即购买
  private handleSubmit = () => {
    Taro.showToast({
      title: '功能正在研發中~',
      icon: 'none'
    })
  }

  render() {
    return (
      <View className='product-detail-page'>
        <View className='head'><Image className='product-img' src={require('./images/product.jpg')} /></View>
        <View className='product-detail-content'>
          <View>產品介紹</View>
          <View>1.測試產品描述...</View>
          <View>2.測試產品描述...</View>
          <View>3.測試產品描述...</View>
          <View>4.測試產品描述...</View>
          <View>5.測試產品描述...</View>
          <View>6.測試產品描述...</View>
        </View>
        <View className='bottom-holder'></View>
        <View className='product-detail-footer'>
          <View className='moeny'>
            <Label className='label'>金額:</Label>
            <Text className='text'>￥199</Text>
          </View>
          <View className='submit' onClick={this.handleSubmit}>立即購買</View>
        </View>
      </View>
    )
  }
}


export default ProductDetail as ComponentClass<PageOwnProps, PageState>
