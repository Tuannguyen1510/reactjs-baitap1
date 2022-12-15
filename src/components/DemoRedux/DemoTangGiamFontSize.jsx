
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DemoTangGiamFontSize extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
      <h3>Ví dụ 1: Tăng giảm font size</h3>
      <p style={{ fontSize: this.props.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nemo! Exercitationem quam enim, perferendis placeat totam voluptates maiores iure asperiores incidunt neque itaque rem. Nobis officiis fugit velit voluptatum rem.</p>
      <button className='btn btn-success mx-2' onClick={() => {
          //Tại nút xử lý =>tạo object action
          const action = {
              type: 'TANG_GIAM_FONT_SIZE',
              payload: 1
          }
          //Gửi dữ liệu lên redux = this.props.dispatch
          this.props.dispatch(action);

      }}> + </button>
      <button className='btn btn-success' onClick={() => {
          const action = {
              type: 'TANG_GIAM_FONT_SIZE',
              payload: -1
          }
          //Gửi dữ liệu lên redux = this.props.dispatch
          this.props.dispatch(action);

      }}> - </button>
  </div>
    )
  }
}
//Định nghĩa 1 hàm lấy dữ liệu redux về
// { return } <=> ()
const mapStateToProps = (state) => ({ //state:rootState
  fSize: state.fontSizeState, //this.props 
  imgSrc: state.imgState
});

//kết nối react với redux => tạo ra component mới có chưa dữ liệu của redux và giao diện của component đó
const DemoFontSizeRedux = connect(mapStateToProps)(DemoTangGiamFontSize);
export default DemoFontSizeRedux;




// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class DemoTangGiamFontSize extends Component {
//   render() {
//     return (
//       <div>
//       <h3>Ví dụ 1: Tăng giảm font size</h3>
//       <p style={{ fontSize: this.props.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nemo! Exercitationem quam enim, perferendis placeat totam voluptates maiores iure asperiores incidunt neque itaque rem. Nobis officiis fugit velit voluptatum rem.</p>
//       <button className='btn btn-success mx-2' onClick={() => {
//           //Tại nút xử lý =>tạo object action
//           const action = {
//               type: 'TANG_GIAM_FONT_SIZE',
//               payload: 1
//           }
//           //Gửi dữ liệu lên redux = this.props.dispatch
//           this.props.dispatch(action);

//       }}> + </button>
//       <button className='btn btn-success' onClick={() => {
//           const action = {
//               type: 'TANG_GIAM_FONT_SIZE',
//               payload: -1
//           }
//           //Gửi dữ liệu lên redux = this.props.dispatch
//           this.props.dispatch(action);

//       }}> - </button>
//   </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   fSize: state.fontSizeState,
// })

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(DemoTangGiamFontSize)