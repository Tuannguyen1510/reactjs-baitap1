import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
  hienThiDiem = () => {
    let {arrXucXac} = this.props;
    let tongDiem = 0 ;
    let KetQua = 'Tài'
    for(let xx of arrXucXac){
      tongDiem += xx.diem
    }
    if(tongDiem < 11 ){
      KetQua = 'Xỉu'
    } 
    return `${tongDiem} - ${KetQua}`;

  }
  render() {
    const {tongSoBanChoi, tongSoBanThang, giatriCuoc, arrXucXac} = this.props;
    return (
      <div className='text-center pt-5'>
           <div className="display-4">
            Tổng Điểm : {this.hienThiDiem()}
          </div>
          <div className="display-4">
            Bạn cược : <span className='text-success'>{giatriCuoc ? 'Tài' : 'Xủi'}</span>
          </div>
          <div className="display-4">
            Số bàn thắng  : <span className='text-primary'>{tongSoBanChoi}</span>
          </div>
          <div className="display-4">
            Tổng số bàn chơi : <span className='text-warning'>{tongSoBanThang}</span>
          </div>
          <div className="display-4">
             <button className='btn btn-success' onClick={() => {
              const action = {
                type: 'PLAY_GAME'
              }
              // let timeout = setInterval(() => {
                this.props.dispatch(action)
              // }, 100);
             }}>Play game</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tongSoBanThang : state.gameReducer.tongSoBanThang,
  tongSoBanChoi :  state.gameReducer.tongSoBanChoi,
  giatriCuoc: state.gameReducer.giatriCuoc,
  arrXucXac : state.gameReducer.arrXucXac
})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(KetQua)