import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableNguoiDung from './TableNguoiDung'
class BaiTapQLND extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let taikhoan = document.getElementById('taiKhoan').value;
    let matkhau = document.getElementById('matKhau').value;
    let nguoiDung = (taikhoan , matkhau)

// Đưa dữ liệu action vào dữ liệu lên render
const action = {
  type: 'THEM_NGUOI_DUNG',
  payload : nguoiDung
};
// Dùng hàm dispatch để đưa lên reducer
this.props.dispatch(action);



  }
  render() {
    return (
      <div>
        <h3>Bài tập quản lý người dùng </h3>
        <form action="" className="form" onSubmit={this.handleSubmit}>
            <div className="card">
                <div className="card-header bg-dart text-white">
                    Thông tin người dùng 
                </div>
                <div className="cart-body">
                    <div className="form-group">
                        <p>Tài khoản </p>
                        <input type="text" id="taiKhoan" name="taiKhoan"/>
                    </div>
                    <div className="form-group">
                        <p>Mật khẩu </p>
                        <input type="text" id="matKhau" name="matKhau"/>
                    </div>
                    
                    <div className="cart-footer">
                        <button className="btn btn-success">
                            Thêm người dùng
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <TableNguoiDung/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(BaiTapQLND)