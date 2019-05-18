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

interface Login {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

}))
class Login extends Component {

  config: Config = {
    navigationBarTitleText: '商城'
  }


  render() {
    return (
      <View className='login-page'>
        <View><Text>页面正在開發中</Text></View>
      </View>
    )
  }
}


export default Login as ComponentClass<PageOwnProps, PageState>
