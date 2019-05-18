import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

const MENU_LIST = [{
  key: 'order',
  text: '我的訂單',
  img: require('./images/order.png')
}, {
  key: 'order',
  text: '我的洗車券',
  img: require('./images/order.png')
}, {
  key: 'credit',
  text: '我的積分',
  img: require('./images/credit.png')
}, {
  key: 'coupon',
  text: '優惠券',
  img: require('./images/coupon.png')
}, {
  key: 'order',
  text: '洗車記錄',
  img: require('./images/order.png')
}, {
  key: 'car',
  text: '車輛管理',
  img: require('./images/car.png')
}, {
  key: 'safe',
  text: '賬號安全',
  img: require('./images/safe.png')
}, {
  key: 'contact',
  text: '聯繫客服',
  img: require('./images/contact.png')
}, {
  key: 'feedback',
  text: '用戶反饋',
  img: require('./images/feedback.png')
}, {
  key: 'help',
  text: '幫助中心',
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
        title: '正在研發中~',
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
