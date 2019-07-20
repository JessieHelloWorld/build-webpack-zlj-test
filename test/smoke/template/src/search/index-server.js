// 服务端打包的入口文件
'use strict'

// import React from 'react'
// import './search.less'
// import southPark from './images/south_park.jpeg'
// import { a, b } from './tree-shaking'

// import '../../common'

const React = require('react')
const southPark = require('./images/south_park.jpeg')
const {a, b} = require('./tree-shaking')
require('./search.less')
if(false){
  b()
}
class Search extends React.Component{
  constructor(){
    super(...arguments)
    this.state = {
      Text: null
    }
  }
  loadComponent(){
    import('./Text.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
    
  }
  render(){
    const funcA = a()
    const { Text } = this.state
    return <div className="search-text">
      { funcA }Search Text haha
      { Text ? <Text/> : null}
      <img src={southPark} alt="" onClick={this.loadComponent.bind(this)}/>
    </div>
  }
}

//   <Search />,
//   document.getElementById('root')
// )

module.exports = <Search />



