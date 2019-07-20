'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
import southPark from './images/south_park.jpeg'
import { a, b } from './tree-shaking'
// import '../../common'
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

ReactDom.render(
  <Search />,
  document.getElementById('root')
)


