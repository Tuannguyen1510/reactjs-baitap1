import React, { Component } from 'react'
import TableLayout from './TableLayout'



export default class LayoutValliation extends Component {
    
    state = {
        formValue: {
            id: '',
            name: '',
            sdt: '',
            email: ''
        },
        formError: {
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
        },
        arrProduct: [
            { id: '1', name: 'Nguyễn Văn A', sdt: '027489467', email: 'b@gmail.com' },
        ],
        valid: false,
    }
    checkFormValid = () => {
        //return true | false : true khi form hợp lệ, false khi form không hợp lệ
        /*
            form hợp lệ khi: Các trường formError = rỗng, và các trường value tưng ứng phải khác rỗng 
        */
        let { formError, formValue } = this.state;
        for (let key in formError) {
            if (formError[key] !== '' || formValue[key] === '') {
                return false;
            }
        }
        return true;
    }
    handleChangeInput = (e) => {
        let {value, name} = e.target;
        let dataType = e.target.getAttribute('data-type');
        let dataMaxLength = e.target.getAttribute('data-max-length');
// 
       let  newValue = this.state.formValue;
       newValue[name] = value;
//    
    let message = '';
    let newFormError = this.state.formError;
    // 
    if(value.trim() === ''){
        message = name + ' is not a blank'
    } else {
        if (dataType == 'number') {
            let regexNumber = /^\d+(,\d{1,2})?$/;
            if (!regexNumber.test(value)) {
                message = name + ' is invalid!';
            }
        }
        if (dataMaxLength !== null && value.length > dataMaxLength) {
            message = name + ` no more than  ${dataMaxLength} character !`;
        }
        // if(dataType == 'email') 
        // {

        // }
    }
    newFormError[name] = message;
       this.setState({
         formValue: newValue,
         formError: newFormError
       }, () => {
        this.setState({
            valid: this.checkFormValid()
        })
       })
    }
    handleSubmit = (e) => {
        //Ngăn sự kiện reload browser
        e.preventDefault();
        console.log('submit', this.state.formValue);
        if (!this.checkFormValid()) {
            alert('Form is invalid!');
            return; //Nếu form không hợp lệ => không submit
        }
         //Thêm sản phẩm vào arrProduct => cập nhật state arrProduct
         let arrProduct = this.state.arrProduct;
         let newProduct = { ...this.state.formValue };
         arrProduct.push(newProduct);
         //arrPrudct = [{001},{002},{003},{003}]
         this.setState({
             arrProduct: arrProduct
         })
       
    }
     //  Xóa
         handleDelProduct = (idClick) => {
            //Lấy ra các sản phẩm có mã khác sản phẩm mình xoá
            let arrProduct = this.state.arrProduct.filter(prod => prod.id !== idClick);
            //Cập nhật lại state
            this.setState({
                arrProduct: arrProduct
            })
        }
        //
        handleEditProduct = (prodClick) => {
            //Click vào product nào thì state của formvalue sẽ thay đổi giá trị thành product đó
            this.setState({
                formValue: prodClick
            }, () => {
                this.setState({
                    valid: this.checkFormValid()
                })
            })
    
        }
        //
        handleUpdateProduct = () => {
            console.log('abc');
            //Tìm ra sản phẩm chứa mã tương đương formValue.id
            let { arrProduct, formValue } = this.state;
            let prodUpdate = arrProduct.find(pro => pro.id === formValue.id);
    
            if (prodUpdate) {
                // prodUpdate.name = formValue.name;
                // prodUpdate.name = formValue.name;
                // prodUpdate.name = formValue.name;
                for (let key in prodUpdate) {
                    if (key !== 'id') {
                        prodUpdate[key] = formValue[key];
                    }
                }
            }
    
            //Cập nhật lại state sau khi chỉnh sửa
            this.setState({
                arrProduct: arrProduct
            })
    
        }
    render() {
        let {formValue} = this.state;
        return (
            <div>
                <form className='container' onSubmit={this.handleSubmit}>
                    <h3>Thông tin sinh viên </h3>
                    <div className='card'>
                        <div className='card-header bg-dark text-white'>
                            Thông tin sinh viên
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <p>Mã sinh viên</p>
                                        <input  data-max-length="6" className='form-control' name="id" value={formValue.id} onInput={this.handleChangeInput}/>
                                        {this.state.formError.id && <div className='alert alert-danger mt-2'>{this.state.formError.id}</div>}
                                    </div>
                                    <div className='form-group'>
                                        <p>Số điện thoại</p>
                                        <input  data-type='number' className='form-control' name="sdt" value={formValue.sdt} onInput={this.handleChangeInput}/>
                                        {this.state.formError.sdt && <div className='alert alert-danger mt-2'>{this.state.formError.sdt}</div>}

                                    </div>

                                </div>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <p>Họ và tên </p>
                                        <input className='form-control' name="name" value={formValue.name} onInput={this.handleChangeInput}/>
                                        {this.state.formError.name && <div className='alert alert-danger mt-2'>{this.state.formError.name}</div>}

                                    </div>
                                    <div className='form-group'>
                                        <p>Email</p>
                                        <input className='form-control' name="email" value={formValue.email} onInput={this.handleChangeInput}/>
                                        {this.state.formError.email && <div className='alert alert-danger mt-2'>{this.state.formError.email}</div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type="submit" className='btn btn-success themSinhVien' disabled={!this.state.valid}>Thêm sinh viên</button>
                            <button onClick={() => {
                                this.handleUpdateProduct()
                            }} type='button' className='btn btn-primary m-2' disabled={!this.state.valid}>Update</button>
                        </div>
                    </div>
                </form>
                <div className='container mt-2'>
                    <TableLayout arrProduct={this.state.arrProduct} handleDelProduct={this.handleDelProduct} handleEditProduct={this.handleEditProduct}/>
                </div>
            </div>
        )
    }
}
