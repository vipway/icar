const WxSdkLoader = () => {
  return new Promise((resolve, reject) => {
    console.log(1111, window.wx)
    if (window.wx) {
      resolve(window.wx)
    } else {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.charset = 'utf-8'
      script.src = `http://res.wx.qq.com/open/js/jweixin-1.4.0.js?callback=loadWxSdk`
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.loadWxSdk = () => {
      console.log('loadWxSdk')
      // wx.config({
      //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //   appId: 'wx0828c68894a3ed79', // 必填，公众号的唯一标识
      //   timestamp: 0, // 必填，生成签名的时间戳
      //   nonceStr: '', // 必填，生成签名的随机串
      //   signature: '',// 必填，签名
      //   jsApiList: [ // 必填，需要使用的JS接口列表 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
      //     'chooseWXPay', // 微信支付
      //     'getLocation', // 获取地理位置
      //     'scanQRCode', // 微信扫一扫
      //     'onMenuShareAppMessage', // 分享给朋友（即将废弃）
      //     'onMenuShareTimeline', // 分享到朋友圈（即将废弃）
      //     'onMenuShareQQ', // 分享到QQ(即将废弃)
      //     'onMenuShareQZone', // 分享到QQ空间(即将废弃)
      //     'onMenuShareWeibo', // 分享到腾讯微博  
      //     'updateAppMessageShareData', // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容(需在用户可能点击分享按钮前就先调用)
      //     'updateTimelineShareData', // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容(需在用户可能点击分享按钮前就先调用)
      //   ]
      // });
      // wx.error(res => {
      //   console.log(res, 'res')
      //   // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      // });
      resolve(window.wx)
    }
  })
}

export default WxSdkLoader