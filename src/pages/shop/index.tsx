import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
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
    navigationBarTitleText: '下单'
  }


  render() {
    return (
      <View className='shop-page'>

        <View><Text>下单</Text></View>
      </View>
    )
  }
}


export default Shop as ComponentClass<PageOwnProps, PageState>
