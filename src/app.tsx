import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'
<<<<<<< HEAD
import 'taro-ui/dist/style/index.scss'
=======
import WxSdk from '../../../assets/js/WxSdk'

>>>>>>> a1ade977402a46729d682a355be7d6a92a603da8
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/mall/index',
      'pages/shopping/index',
      'pages/user/index',
      'pages/store/index',
      'pages/storeDetail/index',
      'pages/quick/index',
      'pages/login/index',
      'pages/productDetail/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          text: '洗車',
          pagePath: 'pages/home/index',
          iconPath: './assets/images/tab-bar/home.png',
          selectedIconPath: './assets/images/tab-bar/home-active.png'
        },
        {
          text: '商城',
          pagePath: 'pages/mall/index',
          iconPath: './assets/images/tab-bar/mall.png',
          selectedIconPath: './assets/images/tab-bar/mall-active.png'
        },
        {
          text: '購物車',
          pagePath: 'pages/shopping/index',
          iconPath: './assets/images/tab-bar/shopping.png',
          selectedIconPath: './assets/images/tab-bar/shopping-active.png'
        },
        // {
        //   text: '门店',
        //   pagePath: 'pages/user/index',
        //   iconPath: './assets/images/tab-bar/user.png',
        //   selectedIconPath: './assets/images/tab-bar/user-active.png'
        // },
        {
          text: '我的',
          pagePath: 'pages/user/index',
          iconPath: './assets/images/tab-bar/user.png',
          selectedIconPath: './assets/images/tab-bar/user-active.png'
        }
      ],
      color: '#666',
      selectedColor: '#00afc7',
      backgroundColor: '#fff'
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示' // '您的位置信息将用于查找附近站点'
      }
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
