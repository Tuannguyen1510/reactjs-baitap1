import React, { Component } from 'react'

export default class TableLayout extends Component {
  render() {
    const { arrProduct ,handleDelProduct , handleEditProduct} = this.props;
    return (
      <div>
        <table className='table'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Mã sinh viên </th>
              <th>Họ tên </th>
              <th>Số điện thoại </th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrProduct.map(({id,sdt ,name, email}, index) => {
              return (
                <tr key={index}>
                  <th>{id}</th>
                  <th>{name}</th>
                  <th>{sdt}</th>
                  <th>{email}</th>
                  <td>
                    <button className='btn btn-danger'  onClick={()=>{
                                    this.props.handleDelProduct(id);
                                }}>
                      <i className='fa fa-trash'></i>
                    </button>
                    <button className='btn btn-primary mx-2' onClick={() => {
                             let prodEdit = {id,sdt ,name, email}
                             handleEditProduct(prodEdit)
                    }}>
                      <i className='fa fa-edit'></i>
                    </button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    )
  }
}
