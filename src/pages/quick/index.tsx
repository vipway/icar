import { ComponentClass } from 'react'
import { connect } from '@tarojs/redux'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Image, Swiper, SwiperItem, Label, Text } from '@tarojs/components'

import { AtList, AtListItem, AtRadio } from 'taro-ui'

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

interface Quick {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class Quick extends Component {

  config: Config = {
    navigationBarTitleText: '快捷下單'
  }

  private handlePayment = (value) => {

  }

  // 提交
  private handleSubmit = () => {
    Taro.showToast({
      title: '頁面正在研發中~',
      icon: 'none'
    })
  }

  // 跳转至门店详情页
  private toStoreDetail = () => {
    Taro.navigateTo({
      url: '/pages/storeDetail/index'
    })
  }

  // 跳转至我的车辆页面
  private toMyCar = () => {
    Taro.showToast({
      title: '頁面正在研發中~',
      icon: 'none'
    })
  }


  render() {
    return (
      <View className='quick-page'>
        <Swiper
          circular
          autoplay
          indicatorDots
          interval={2000}
          indicatorColor='#999'
          className='quick-swiper'
          indicatorActiveColor='#333'
        >
          <SwiperItem className='swiper-item'>
            <Image className='img-banner' src={require('./images/banner01.jpg')} />
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <Image className='img-banner' src={require('./images/banner02.jpg')} />
          </SwiperItem>
        </Swiper>
        <View className='quick-content'>
          <AtList>
            <AtListItem
              title='服務門店'
              arrow='right'
              extraText='上海虹桥店'
              thumb={require('./images/store.png')}
              onClick={this.toStoreDetail}
            />
            <AtListItem
              title='我的车辆'
              arrow='right'
              extraText='添加'
              thumb={require('./images/car.png')}
              onClick={this.toMyCar}
            />
          </AtList>
          <View className='product-list'>
            <View className='product-item item-active'>
              <View className='title'>標準洗</View>
              <View className='detail'>清洗</View>
              <View className='price'>￥29</View>
            </View>
            <View className='product-item'>
              <View className='title'>蠟水洗</View>
              <View className='detail'>清洗+打蠟</View>
              <View className='price'>￥59</View>
            </View>
            <View className='product-item'>
              <View className='title'>鍍膜洗</View>
              <View className='detail'>清洗+打蠟+拋光</View>
              <View className='price'>￥99</View>
            </View>
          </View>
          <View className='payment'>
            <View className='title'>支付方式</View>
            <View className='list'>
              <AtRadio
                options={[
                  { label: '餘額支付', value: 1, desc: '使用帳戶餘額支付' },
                  { label: '信用卡支付', value: 2, desc: '信用卡快捷支付' },
                  { label: '銀行卡支付', value: 3, desc: '銀联、visa', },
                  { label: '微信支付', value: 4, desc: '使用微信支付' }
                ]}
                value={1}
                onClick={this.handlePayment}
              />
            </View>
          </View>
        </View>
        <View className='bottom-holder'></View>
        <View className='quick-footer'>
          <View className='moeny'>
            <Label className='label'>金額:</Label>
            <Text className='text'>￥29</Text>
          </View>
          <View className='submit' onClick={this.handleSubmit}>下單</View>
        </View>
      </View>
    )
  }
}


export default Quick as ComponentClass<PageOwnProps, PageState>
