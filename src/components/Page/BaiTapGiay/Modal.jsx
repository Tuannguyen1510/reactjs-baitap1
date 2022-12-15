import React, { Component } from 'react'

export default class Modal extends Component {

    render() {
        const { gioHang, xoaGioHang, tangGiam } = this.props
        return (
            <div>
                <div>
                    {/* Modal trigger button */}
                    <button type="button" className="btn btn-primary btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#modalId">
                        Giỏ hàng
                    </button>
                    {/* Modal Body */}
                    {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
                    <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <table className="table text-center">
                                        <thead style={{
                                            color: 'green'
                                        }}>
                                            <th>Mã SP</th>
                                            <th>Tên Sản phẩm</th>
                                            <th>image</th>
                                            <th>amount</th>
                                            <th>price</th>
                                            <th>Tổng</th>
                                        </thead>
                                        <tbody>
                                            {gioHang.map((item, index) => {
                                                return (<tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        <img src={item.image} alt="" class="w-100" height={100} />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-primary " onClick={() => {
                                                            tangGiam(item.id, true)
                                                        }}>+</button>
                                                        {item.SoLuong}
                                                        <button className="btn btn-primary " onClick={() => {
                                                            tangGiam(item.id, false)
                                                        }}>-</button>
                                                    </td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.quantity}</td> */}
                                                    <td>
                                                        {item.SoLuong * item.price}
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => {
                                                            xoaGioHang(item.id)
                                                        }}>
                                                            <i className='fa fa-trash'></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <td colSpan='5'></td>
                                            <td>Tổng tiền </td>
                                            <td>{
                                                this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                                    return (tongTien += spGioHang.SoLuong * spGioHang.price)
                                                }, 0).toLocaleString()
                                            }</td>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Optional: Place to the bottom of scripts */}
                </div>

            </div>
        )
    }
}
