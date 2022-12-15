import React, { Component } from 'react'

export default class extends Component {
  render() {
    const { arrProduct,handleDelProduct, handleEdit} = this.props
    return (
      <div>
        <table className="table">
          <thead className='bg-dark text-white'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Product</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Product</th>
                    <th>Description</th>
                    <th>
                        <button className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn btn-primary mx-2">
                            <i className="fa fa-edit"></i>
                        </button>
                    </th>
                </tr> */}


            {arrProduct.map(({ id, name, price, img
              , Description, productType }, index) => {
              return (
                <tr key={index}>
                  <th>{id}</th>
                  <th>{name}</th>
                  <th>{img}</th>
                  <th>{price}</th>
                  <th>{productType}</th>
                  <th>{Description}</th>
                  <th>
                    <button className="btn btn-danger" onClick={() => {
                      handleDelProduct(id)
                    }}>
                      <i className="fa fa-trash"></i>
                    </button>
                    <button className="btn btn-primary mx-2" onClick={() => {
                      let edit = {id, name, price, img
                        , Description, productType}
                      handleEdit(edit)
                    }}>
                      <i className="fa fa-edit"></i>
                    </button>
                  </th>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    )
  }
}
