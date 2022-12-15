import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {
  render() {
    console.log(this.props);
    let {arrNguoiDungReducer} = this.props
    return (
      <div>
          <table className="table">
            <thead>
                <tr>
                    <th>Tài khoản</th>
                    <th>Mật khẩu </th>
                </tr>
            </thead>
            <tbody>
                    {
                      arrNguoiDungReducer.map((item, index) => {
                        return (
                          <tr key={index}>
                                <td>{item.taiKhoan}</td>
                                <td>{item.matKhau}</td>
                          </tr>
                        )
                      })
                    }
             
            </tbody>
          </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    arrNguoiDungReducer : state.arrNguoiDungReducer
})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(TableNguoiDung)