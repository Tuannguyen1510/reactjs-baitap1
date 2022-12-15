import React, { Component } from 'react'
import { connect } from 'react-redux'
// import png1 from '../../../asset/img/1.png'
class XucXac extends Component {

  datCuoc = (giaTri) => {// gia tri true , flase
     const action = {
      type: 'DAT_CUOC',
      payload: giaTri
     }
     // this.props.dispatch(action) gửi lên redux store 
     this.props.dispatch(action);
  }


  render() {
    console.log('props', this.props);
    const {arrXucXac} = this.props;
    return (
      <div className='container-fluid'>
            <div className="row text-center">
                <div className="col-4">
                  <button className="btn btn-danger mx-5" onClick={() => {
                    this.datCuoc(true)
                  }}>
                     <div className="bg-danger display-4 p-5">
                         Tài
                     </div>
                  </button>
                </div>
                <div className="col-4">
                  {/* <img src='./img/1.png' alt="..." width={50} height={50}/>
                  <img src='./img/1.png' alt="..." width={50} height={50}/>
                  <img src="./img/1.png" alt="" width={50} height={50}/>    */}

                  {
                    arrXucXac.map((item, index) => {
                        return (
                          <img key={index} src={item.img} alt=""width={50} height={50} />
                        )
                    })
                  }
                </div>
                <div className="col-4">
                  <button className="btn btn-danger mx-5">
                     <div className="bg-danger display-4 p-5">
                         Xủi
                     </div>
                  </button>
                </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  arrXucXac : state.gameReducer.arrXucXac
})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(XucXac)