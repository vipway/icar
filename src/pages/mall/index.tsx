import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image, Label } from '@tarojs/components'
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

interface Mall {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class Mall extends Component {

  config: Config = {
    navigationBarTitleText: '商城'
  }

  // 跳转至产品详情
  private toProductDetail = (e) => {
    e.stopPropagation()
    Taro.navigateTo({
      url: '/pages/productDetail/index'
    })
  }

  // 接入购物车
  private handleAddCart = (e) => {
    e.stopPropagation()
    Taro.showToast({
      title: '功能正在研發中~',
      icon: 'none'
    })
  }

  render() {
    return (
      <View className='mall-page'>
        <View className='product-list'>
          <View className='product-item' onClick={this.toProductDetail}>
            <View className='left-img'><Image className='product-img' src={require('./images/product.jpg')} /></View>
            <View className='right-content'>
              <View className='product-name'>快捷洗車/單次卡</View>
              <View className='product-description'>進口資料：預洗液、洗車香波、乾燥劑、贈送內室清潔包</View>
              <View className='product-price'>
                <Label className='unit'>￥</Label>
                <Text className='money'>29</Text>
                <Label className='market'>￥39</Label>
              </View>
            </View>
            <Button className='btn-cart' type='primary' onClick={this.handleAddCart}>加入購物車</Button>
          </View>

          <View className='product-item' onClick={this.toProductDetail}>
            <View className='left-img'><Image className='product-img' src={require('./images/product.jpg')} /></View>
            <View className='right-content'>
              <View className='product-name'>洗車液</View>
              <View className='product-description'>無味、無污染</View>
              <View className='product-price'>
                <Label className='unit'>￥</Label>
                <Text className='money'>69</Text>
                <Label className='market'>￥99</Label>
              </View>
            </View>
            <Button className='btn-cart' type='primary' onClick={this.handleAddCart}>加入購物車</Button>
          </View>

          <View className='product-item' onClick={this.toProductDetail}>
            <View className='left-img'><Image className='product-img' src={require('./images/product.jpg')} /></View>
            <View className='right-content'>
              <View className='product-name'>標準洗月卡</View>
              <View className='product-description'>進口資料：預洗液、洗車香波、乾燥劑、贈送內室清潔包</View>
              <View className='product-price'>
                <Label className='unit'>￥</Label>
                <Text className='money'>399</Text>
                <Label className='market'>￥599</Label>
              </View>
            </View>
            <Button className='btn-cart' type='primary' onClick={this.handleAddCart}>加入購物車</Button>
          </View>

          <View className='product-item' onClick={this.toProductDetail}>
            <View className='left-img'><Image className='product-img' src={require('./images/product.jpg')} /></View>
            <View className='right-content'>
              <View className='product-name'>2次打蠟+1次換機油</View>
              <View className='product-description'>採用全合成機油，德國進口蠟</View>
              <View className='product-price'>
                <Label className='unit'>￥</Label>
                <Text className='money'>1099</Text>
                <Label className='market'>￥1699</Label>
              </View>
            </View>
            <Button className='btn-cart' type='primary' onClick={this.handleAddCart}>加入購物車</Button>
          </View>

        </View>
      </View>
    )
  }
}


export default Mall as ComponentClass<PageOwnProps, PageState>
