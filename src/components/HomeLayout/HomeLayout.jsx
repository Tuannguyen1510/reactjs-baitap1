import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import item from './Item'
import Item from './Item'
import Footer from './Footer'
export default class HomeLayout extends Component {
  render() {
    return (
        <div className="body">
            <Header/>
           <Body/>
           <Item/>
           <Footer/>
        </div>
    )
  }
}
