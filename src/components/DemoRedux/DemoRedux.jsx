import React, { Component } from 'react'
import DemoTangGiamFontSize from './DemoTangGiamFontSize'
import BaiTapChonXe from './BaiTapChonXe'
import BaiTapQLND from './BaiTapQuanLyNguoiDung/BaiTapQLND'
export default class DemoRedux extends Component {
  render() {
    return (
      <div>
        <DemoTangGiamFontSize/>
        <BaiTapChonXe/>
        <BaiTapQLND/>
      </div>
    )
  }
}
