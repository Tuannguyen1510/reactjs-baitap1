import React, { Component } from 'react'
import Cart from './Cart'
export default class PropLayout extends Component {
  render() {
    return (
       <div className="container">
        <h3>Product List </h3>
        <div className="w-25">
            <Cart   id='1' name='A' price='100'/>
        </div>
        <div className="w-25">
            <Cart   id='2' name='B' price='200'/>
        </div>
       </div>
    )
  }
}
