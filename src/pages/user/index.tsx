import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Menu from './menu'
import { getWindowHeight } from '../../utils/style'
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

interface User {
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
class User extends Component {

  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  private handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/index',
    })
  }

  render() {
    return (
      <View className='user'>
        <ScrollView
          scrollY
          className='user-wrap'
          style={{ height: getWindowHeight() }}
        >
          <View className='user-info'>
            <View className='user-info-wrap'>
              <View className='user-info-avatar'>
                <Image
                  className='user-info-avatar-img'
                  src={require('../../assets/images/default-avatar.png')}
                  onClick={this.handleLogin}
                />
              </View>

              <View className='user-info-state' onClick={this.handleLogin}>
                <Text className='user-info-name'>
                  未登录
                </Text>
                <Text className='user-info-tip'>点击登录账号</Text>
              </View>
            </View>
          </View>
          <Menu />
          <View className='user-logout' onClick={this.handleLogin}>
            <Text className='user-logout-txt'>切换账号</Text>
          </View>
          <View className='user-empty' />
        </ScrollView>
      </View>
    )
  }
}

export default User as ComponentClass<PageOwnProps, PageState>
