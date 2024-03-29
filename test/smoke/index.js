const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
  timeout: '10000ms'
})

//进入到template目录
process.chdir(path.join(__dirname, 'template'))

//删掉dist目录
rimraf('./dist', () => {
  const prodConfig = require('../../lib/webpack.prod.js')

  webpack(prodConfig, (err, stats) => {
    if(err){
      console.error(err)
      process.exit(2)
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false
    }))
    console.log('Webpack build success, begin run test')
    // 加入测试用例
    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'css-js-test.js'))
    
    mocha.run()

  })
})