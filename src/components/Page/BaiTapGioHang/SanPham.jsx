import React, { Component } from 'react'

export default class  extends Component {
  render() {
    const {product, add1} = this.props
    return (
      <div>
        <div className="card">
            <img src={product.hinhAnh} alt="" className='w-100' height={420} style={{
                objectFit:"contain"
            }}/>
            <div className="card-body">
                <p>{product.tenSP}</p>
                <p>{product.giaBan.toLocaleString()}</p>
                <button className='btn btn-danger' onClick={() => {
                    add1(product)
                }}>Thêm giỏ hàng 
                  <i className='fa fa-cart-plus'></i>
                </button>
            </div>
        </div>
      </div>
    )
  }
}
