import React, { Component } from 'react'
import { connect } from 'react-redux'
import KetQua from './KetQua'
import XucXac from './XucXac'
import '../../../asset/css/BaiTapGame.css'
 class BaiTapGame extends Component {
  render() {
    return (
      <div className='bg-game'>
        <h3 className='text-center display-4 pt-2'>Bài tập Game Xúc Xắc </h3>
        <XucXac/>
        <KetQua/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(BaiTapGame)