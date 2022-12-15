
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BaiTapChonXe extends Component {
    handleChangeColor = (color) => {
        let imgSrc = `./img/img${color}Car.jpg`;
        const  action = {
            type: 'CHANGE_COLOR',
            payload : imgSrc 
        }
        this.props.dispatch(action)
    }
  render() {
    console.log(this.props);
    let {imgSrcReducer} = this.props;
    return (
      <div>
         <h3>Baì tập chọn xe</h3>
         <div className="row">
            <div className="col-6">
                <img src={imgSrcReducer} alt="" className='w-100 '/>
            </div>
            <div className="col-6">
                <button className="btn btn-danger mx-3" onClick={() => {
 this.handleChangeColor('Red')
                }
                }>Red</button>
                <button className="btn btn-danger mx-3" onClick={() => {
                    this.handleChangeColor('Silver')
                }
                }>Silver</button>
                <button className="btn btn-danger mx-3" onClick={() => {
                    this.handleChangeColor('Black')
                }
                }>Black</button>
            </div>
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    imgSrcReducer : state.imgSrcReducer
})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(BaiTapChonXe)