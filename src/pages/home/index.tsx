import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import scan from '../../assets/images/home/scan.png'
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

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Home {
  props: IProps
}

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
class Home extends Component {
  config: Config = {
    navigationBarTitleText: '易智洗'
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  private onTap = () => {
    return false
  }

  render() {
    return (
      <View className='home-page'>
        <Map style={{ width: '100%', height: '100%' }} onClick={this.onTap} />
        <View className='home-scan'>
          <View className='img-wrap'>
            <Image className='img-scan' src={require('../../assets/images/home/scan.png')} />
          </View>
          <View className='btn-text'>扫码洗车</View>
        </View>
      </View>
    )
  }
}

export default Home as ComponentClass<PageOwnProps, PageState>
