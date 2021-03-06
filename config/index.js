const path = require('path')

const config = {
  projectName: 'icar',
  date: '2019-3-19',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    router: {
      mode: 'browser'
    },
    devServer: {
      host: '0.0.0.0',
      port: 10088,
      // proxy: {
      //   '/icar': {
      //     target: 'http://120.27.225.127:10080',
      //     secure: false,
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/icar': ''
      //     }
      //   }
      // }
    }
  },
  alias: {
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    '@styles': path.resolve(__dirname, '..', 'src/styles'),
    '@actions': path.resolve(__dirname, '..', 'src/actions'),
    '@reducers': path.resolve(__dirname, '..', 'src/reducers'),
    '@constants': path.resolve(__dirname, '..', 'src/constants'),
    '@components': path.resolve(__dirname, '..', 'src/components')
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
