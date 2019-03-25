import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import AppMap from './map/AppMap'
import './index.scss'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {

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

  })
)
class Home extends Component {

  config: Config = {
    navigationBarTitleText: 'e智洗'
  }

  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='home-page'>
        <AppMap longitude={121.313974} latitude={31.209731} />
      </View>
    )
  }
}

export default Home as ComponentClass<PageOwnProps, PageState>
