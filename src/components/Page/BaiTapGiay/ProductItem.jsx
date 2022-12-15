import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const {list, themGioHang } = this.props
        return (
            <div>
                <div className="card ">
                    <img className="card-img-top" src={list.image} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{list.name}</h4>
                        <p className="card-text">{list.price} $</p>
                        <button className="btn btn-danger" onClick={(click) => {
                             themGioHang(list)
                        }}>
                            Add to cart   
                            <i className='fa fa-cart-plus'></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
