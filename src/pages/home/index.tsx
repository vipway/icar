

import { ComponentClass } from 'react'
import Taro, { Component, Config, navigateTo } from '@tarojs/taro'
import { View, Map } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import NavBottom from '../../components/navBottom'
import navCfg from '../../config/nav'
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

type PageState = {
  current: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Home {
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
class Home extends Component {

  config: Config = {
    navigationBarTitleText: '易智洗'
  }

  state = {
    current: 0
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  private handleClick = (index, e) => {
    Taro.navigateTo({
      url: '/pages/personal/index',
    })
  }

  private onTap = () => {
    return false;
  }

  render() {
    const { current } = this.state
    return (
      <View className='home-page'>
        <View className='home-map'><Map onClick={this.onTap} /></View>
        <NavBottom tabList={navCfg} current={0} onClick={this.handleClick} />
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Home as ComponentClass<PageOwnProps, PageState>
