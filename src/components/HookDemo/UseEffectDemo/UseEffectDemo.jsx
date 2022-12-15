import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'





const UseEffectDemo = () => {
    const [number, setNumber] = useState(1);



    const [arrProduct, setArrProduct] = useState([
        {id: 1, name: 'product' , image: 'https://picsum.photos/200/200', price: 1000}
    ]);

    const getApiProduct = async () => {
        let result = await axios({
            url: 'https://shop.cyberlearn.vn/api/product',
            method: 'get'
        });
        setArrProduct(result.data.content);
    }




    useEffect(() => {
        getApiProduct();
        console.log('comp');
    }, [])

    const renderProduct = () => {
        return (
            arrProduct.map((item, index) => {
                return (
                    <div className="col-4" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={item.image} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }


    return (
        <div className='container'>
            <h3>Numbber : {number}</h3>
            <button className="btn btn-success" onClick={() => {
                setNumber(number+ 1);
            }}>+</button>
            <h3>Product List</h3>
            <div className="row">
                {renderProduct()}
            </div>
        </div>
    )
}

export default UseEffectDemo
