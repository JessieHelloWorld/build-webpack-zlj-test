// 测试的入口文件

const path = require('path')
//进入到template文件夹
process.chdir(path.join(__dirname, 'smoke/template'))

describe('builder-webpack test case', () => {
  require('./unit/webpack-base-test.js')
})
