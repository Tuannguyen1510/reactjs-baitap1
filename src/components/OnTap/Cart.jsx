import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    let name = this.props.name;
    let price = this.props.price;
    return (
        <div className="cart">
            <img src={`https://i.pravata.cc?u=${this.props.id}`} alt="" />
            <div className="cart-body">
                <h3>{name}</h3>
                <p>{price}</p>
                <button className='btn btn-dark'>Add to cart</button>
            </div>
        </div>
    )
  }
}
