// 检测html文件是否正常生成出来
const glob = require('glob-all')

// 一个文件有可有多个测试用例，一个"it"就表示一个测试用例
describe('Checking generated css js files', () => {
  it('should generate css js files', (done) => {
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search_*.js',
      './dist/search_*.css'
    ])
    if(files.length > 0){
      done()
    }else{
      throw new Error('no css js files generated')
    }
  })
})