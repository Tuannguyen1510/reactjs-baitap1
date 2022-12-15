import React, { Component } from 'react'
import TableProduct from './TableProduct';
export default class ReactForm extends Component {
    state = {
        formValue: {
            id: "",
            name: "",
            price: "",
            img: "",
            Description: "",
            productType: "phone"
        },
        formError: {
            id: "",
            name: "",
            price: "",
            img: "",
            Description: ""
        },
        valid: false,
        arrProduct: [
            { id: "1", name: "iphone", img: 'https://i.pravatar.cc?u=1', price: '1000', productType: 'phone', Description: "123" },
            { id: "2", name: "iphone", img: 'https://i.pravatar.cc?u=2', price: '1000', productType: 'phone', Description: "123" }

        ]
    }
    handleUpdate = () => {
        // console.log('abc');
        let { arrProduct, formValue } = this.state;
        let prodUpdate = arrProduct.find(pro => pro.id === formValue.id)
        if (prodUpdate) {
            for (let key in prodUpdate) {
                if (key !== 'id') {
                    prodUpdate[key] = formValue[key]
                }
            }
        }


        this.setState({
            arrProduct: arrProduct
        })



    }
    handleEdit = (Click) => {
        this.setState({
            formValue: Click
        }, () => {
            this.setState({
                valid: this.checkFormValid()
            })
        })
    }
    handleDelProduct = (idClick) => {
        let arrProduct = this.state.arrProduct.filter(prod => prod.id !== idClick)
        this.setState({
            arrProduct: arrProduct
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.checkFormValid()) {
            return; // Nếu Form ko hợp lệ => ko submit.
        }
        // console.log('submit', this.state.formValue);
        let arrProduct = this.state.arrProduct;
        arrProduct.push(...this.state.formValue);
        this.setState({
            arrProduct: arrProduct
        })
    }
    handleChangeInput = (e) => {
        // let value = e.target.value;
        // let name = e.target.name;
        let { value, name } = e.target;
        let dataType = e.target.getAttribute('data-type');
        let dataMaxLength = e.target.getAttribute('data-maxLength')
        // console.log(name, value);
        let newFormValue = this.state.formValue;
        // dynamic key 
        newFormValue[name] = value;


        // Xử lý cho formError 
        let newFromError = this.state.formError;
        let message = '';
        if (value.trim() === "") {
            message = name + ' cannot be blank !'
        } else {
            if (dataType == 'number') {
                let regexNumber = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/
                if (!regexNumber.test(value)) {
                    message = name + ' is invalid !'
                }
            }
            // email 

            // maxLength

            if (value.length > dataMaxLength && dataMaxLength !== null) {
                message = name + ' no more  than   ' + dataMaxLength + ' character !'
            }

        }
        newFromError[name] = message;






        this.setState({
            formValue: newFormValue,
            formError: newFromError
        }, () => {
            // console.log(this.state);
            this.setState({
                valid: this.checkFormValid()
            })
        })
        // console.log(name, value);
    }
    checkFormValid = () => {
        let { formError, formValue } = this.state;
        for (let key in formError) {
            if (formError[key] !== "" || formValue[key] === "") {
                return false;
            }
        }
        return true;
    }
    render() {
        let { formValue } = this.state;
        return (
            <div>
                <form action="" className="container" onSubmit={this.handleSubmit}>
                    <h3>Create Form </h3>
                    <div className="card">
                        <div className="card-header">
                            Product info
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>id</p>
                                        <input value={formValue.id} data-maxLength={6} className='form-control' name="id" onInput={this.handleChangeInput} />
                                        {this.state.formError.id && <div className='alert alert-danger mt-2'>{this.state.formError.id} </div>}
                                    </div>
                                    <div className="form-group">
                                        <p>Name</p>
                                        <input value={formValue.name} type="text" className='form-control' name="name" onInput={this.handleChangeInput} />
                                        {this.state.formError.name && <div className='alert alert-danger mt-2'>{this.state.formError.name} </div>}
                                    </div>
                                    <div className="form-group">
                                        <p>Price</p>
                                        <input value={formValue.price} data-type="number" className='form-control' name="price" onInput={this.handleChangeInput} />
                                        {this.state.formError.price && <div className='alert alert-danger mt-2'>{this.state.formError.price} </div>}
                                    </div>

                                </div>
                                <div className="col-6">

                                    <div className="form-group">
                                        <p>Img</p>
                                        <input value={formValue.img} type="text" className='form-control' name="img" onInput={this.handleChangeInput} />
                                        {this.state.formError.img && <div className='alert alert-danger mt-2'>{this.state.formError.img} </div>}

                                    </div>
                                    <div className="form-group">
                                        <p>ProductType</p>
                                        <select value={formValue.productType} name="productType" id="" className='form-control' onInput={this.handleChangeInput}>
                                            <option value="phone">Phone</option>
                                            <option value="table">table</option>
                                            <option value="laptop">Latop</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <p>Description</p>
                                        <input value={formValue.Description} type="text" className='form-control' name="Description" onInput={this.handleChangeInput} />
                                        {this.state.formError.Description && <div className='alert alert-danger mt-2'>{this.state.formError.Description} </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className="btn btn-success"
                                disabled={!this.state.valid}
                            >Create</button>

                            <button type='button' className="btn btn-success"
                                disabled={!this.state.valid} onClick={() => {
                                    this.handleUpdate()
                                }}
                            >Update</button> 
                        </div>
                    </div>
                </form>
                <div className="container mt-2">
                    <TableProduct arrProduct={this.state.arrProduct} handleDelProduct={this.handleDelProduct} handleEdit={this.handleEdit} />
                </div>
            </div>
        )
    }
}
