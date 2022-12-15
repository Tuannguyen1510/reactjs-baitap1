import React, { Component } from 'react'

export default class PhoneCart extends Component {
   
    render() {
        const {product, CT} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={product.hinhAnh} alt="Title" style={{
                    height: 500,
                    width: '100%',
                    objectFit: 'contain'
                }} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                     <button className="btn btn-primary" onClick={() => {
                         CT(product)
                     }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
