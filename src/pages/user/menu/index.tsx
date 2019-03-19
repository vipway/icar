import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

const MENU_LIST = [{
  key: 'order',
  text: '我的订单',
  img: require('./images/order.png')
}, {
  key: 'credit',
  text: '我的积分',
  img: require('./images/credit.png')
}, {
  key: 'coupon',
  text: '优惠券',
  img: require('./images/coupon.png')
}, {
  key: 'red-packet',
  text: '红包',
  img: require('./images/red-packet.png')
}, {
  key: 'location',
  text: '车辆管理',
  img: require('./images/location.png')
}, {
  key: 'safe',
  text: '账号安全',
  img: require('./images/safe.png')
}, {
  key: 'contact',
  text: '联系客服',
  img: require('./images/contact.png')
}, {
  key: 'feedback',
  text: '用户反馈',
  img: require('./images/feedback.png')
}, {
  key: 'help',
  text: '帮助中心',
  url: 'http://m.you.163.com/help',
  img: require('./images/help.png')
}]
const COUNT_LINE = 3


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

interface Menu {
  props: IProps;
}

class Menu extends Component {
  handleClick = (menu) => {
    // NOTE 时间关系，此处只实现帮助中心，用于演示多端 webview
    if (menu.key === 'help') {
      // jump({ url: menu.url, title: menu.text })
    } else {
      Taro.showToast({
        title: '目前只实现了帮助中心~',
        icon: 'none'
      })
    }
  }

  render() {
    return (
      <View className='user-menu'>
        {MENU_LIST.map((menu, index) => {
          // NOTE 不用伪元素选择器，需自行计算
          const nth = (index + 1) % COUNT_LINE === 0
          const lastLine = parseInt(index / COUNT_LINE) === parseInt(MENU_LIST.length / COUNT_LINE)
          return (
            <View
              key={menu.key}
              className={classNames(
                'user-menu-item',
                nth && 'user-menu-item-nth',
                lastLine && 'user-menu-item-last',
              )}
              onClick={this.handleClick.bind(this, menu)}
            >
              <Image className='user-menu-item-img' src={menu.img} />
              <Text className='user-menu-item-txt'>{menu.text}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

export default Menu as ComponentClass<PageOwnProps, PageState>
