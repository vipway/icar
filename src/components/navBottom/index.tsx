import { ComponentClass } from 'react'
import classNames from 'classnames'
import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import './index.scss'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageOwnProps = {
  className?: string
  current: number
  tabList: Array<{
    title: string
    iconType: string
    [key: string]: any
  }>
  onClick: (index: number, event: any) => void
}

type PageState = {}

type IProps = PageStateProps & PageOwnProps

interface NavBottom {
  props: IProps;
}

class NavBottom extends Component {

  static defaultProps = {
    className: ''
  }

  // tab点击事件
  private handleClick = (index, e) => {
    const { onClick } = this.props
    onClick && onClick(index, e)
  }

  render() {
    const { className, tabList, current } = this.props
    const classRoot = classNames({ className })
    return (
      <AtTabBar
        fixed
        current={current}
        tabList={tabList}
        className={classRoot}
        onClick={this.handleClick.bind(this)}
      />
    )
  }
}

export default NavBottom as ComponentClass<PageOwnProps, PageState>
