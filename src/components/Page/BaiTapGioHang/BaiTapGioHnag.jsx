import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'
export default class BaiTapGioHnag extends Component {
  state = {
    gioHang: [
      {maSP : 1 , tenSP: 'Iphone X', giaBan:'1000', hinhAnh:'./img/sp_iphoneX.png', soLuong:1}
    ]
  }
  // 
  tangGiam = (tgSPClick, Clicktang) => {
    let gioHang3 = this.state.gioHang;
    let index = gioHang3.findIndex(sp => sp.maSP === tgSPClick);
    if(Clicktang){
        gioHang3[index].soLuong += 1 
    }else{
       if(gioHang3[index].soLuong > 1 ){
          gioHang3[index].soLuong -= 1 
       }
    }
    this.setState({
      gioHang: gioHang3
    })
  }



  xoaGioHang = (maSPClick) => {
     console.log(maSPClick);
     let gioHang2 = this.state.gioHang;
    //  let index = gioHang2.findIndex(sp => sp.maSP === maSPClick);
    let index = gioHang2.filter(sp => sp.maSP !== maSPClick);
     if(index !== -1 ){
      gioHang2.splice(index, 1);
     }
     this.setState({
      gioHang : gioHang2
     })
  }


  themGioHang = (spClick) => {
    spClick = {...spClick, soLuong: 1}
    console.log(spClick);
    let gioHang1 = this.state.gioHang;
    // gioHang1.push(spClick)
    let spGH = gioHang1.find(sp => sp.maSP === spClick.maSP );
    if(spGH){
      spGH.soLuong = spGH.soLuong + 1 ;
    } else{
      gioHang1.push(spClick)
    }
    // 
    this.setState({
      gioHang: gioHang1
    })
  }
  render() {
    return (
      <div className='container'> 
      <h3 className='text-center mt-2'>Bai Tap gio hang</h3>
        <GioHang gioHang={this.state.gioHang} xoaGioHang1={this.xoaGioHang} tanggiam={this.tangGiam}/>
        <DanhSachSanPham add={this.themGioHang}/>
      </div>
    )
  }
}
