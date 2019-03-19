import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import navCfg from '../../config/nav'
import NavBottom from '../../components/navBottom'

import { add, minus, asyncAdd } from '../../actions/counter'

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

interface Personal {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Personal extends Component {

  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  private handleClick = () => {
    Taro.navigateTo({
      url: '/pages/home/index',
    })
  }

  render() {
    return (
      <View className='index'>
        <NavBottom tabList={navCfg} current={1} onClick={this.handleClick} />
      </View>
    )
  }
}

export default Personal as ComponentClass<PageOwnProps, PageState>
