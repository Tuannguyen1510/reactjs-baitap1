import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {product} = this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={product.image} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
