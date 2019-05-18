import appConfig from '../../config/app'

const AMapLoader = () => {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.charset = 'utf-8'
      script.src = `https://webapi.amap.com/maps?v=1.4.13&key=${appConfig.mapKey}&callback=loadAMap`
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.loadAMap = () => {
      resolve(window.AMap)
    }
  })
}

export default AMapLoader
