import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { gioHang, xoaGioHang1, tanggiam } = this.props
        return (
            <div>
                <table className='table'>
                    <thead>
                        <th>Mã SP</th>
                        <th>Tên Sp </th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền </th>
                        <th></th>
                    </thead>
                    <tbody>
                        {gioHang.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.maSP}</td>
                                    <td>{item.tenSP}</td>
                                    <td>
                                        <img src={item.hinhAnh} width={50} height={50} alt="" />
                                    </td>

                                    <td>  <button className="btn btn-primary " onClick={() => {
                                              tanggiam(item.maSP, true)
                                    }}>+</button>
                                        {item.soLuong}
                                        <button className="btn btn-primary " onClick={() => {
                                             tanggiam(item.maSP, false)
                                        }}>-</button>
                                    </td>

                                    <td>{item.giaBan.toLocaleString()}</td>
                                    <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => {
                                            xoaGioHang1(item.maSP)
                                        }}>
                                            <i className='fa fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                    <tfoot>
                        <td colSpan='4'></td>
                        <td>Tổng tiền </td>
                        <td>{
                            this.props.gioHang.reduce((tongTien, spGioHang , index ) => {
                                return (tongTien += spGioHang.soLuong * spGioHang.giaBan)
                            },0).toLocaleString()
                            }</td>
                    </tfoot>
                </table>
            </div>
        )
    }
}
