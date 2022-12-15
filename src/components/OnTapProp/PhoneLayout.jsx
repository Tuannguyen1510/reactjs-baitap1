import React, { Component } from 'react'
import PhoneCart from './PhoneCart'

const data =
    [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]



export default class PhoneLayout extends Component {
    state = {
     spChiTiet: 
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    }

    renderPhone = () => {
        const arrMap = data.map((item, index) => {
            return (
                <div className='col-4 item' key={index}>
                  <PhoneCart product={item} CT= {this.Details}/>
                </div>
            )
        })
        return arrMap
    }
     
    Details = (click) => {
        this.setState({
           spChiTiet: click
        })
    }
    render() {
        const {maSP,tenSP,manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, rom, giaBan, hinhAnh} = this.state.spChiTiet;
        return (
            <>
            <div className='row '>
                  {this.renderPhone()}
            </div>
            <hr />
            <div className="row">
                  <div className="col-5">
                    <h1>{tenSP}</h1>
                    <img src={hinhAnh} alt="" />
                  </div>
                  <div className="col-7">
                    <h5>Thông số kĩ thuật</h5>
                    <table className='table'>
                                <thead>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>Rom</td>
                                        <td>{rom}</td>
                                    </tr>
                                </thead>
                            </table>
                  </div>
            </div>
            </>
        )
    }
}
