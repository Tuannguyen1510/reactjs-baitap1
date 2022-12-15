import React, { Component } from 'react'
import Header from './Header'
import Kinh from './Kinh'
import Person from './Person'
export default class HomeSetState extends Component {
  render() {
    return (
      <div  style={{
        backgroundColor: 'gray',
        backgroundSize:'cover',
        height:'1000px',
        width:'100%',
      }}>
        {/* <Login/> */}
        <Header/>
        <Person/>
        {/* <Kinh/> */}
      </div>
    )
  }
}

