// rafce


import React , {useState} from 'react'

// Đây là function ko sử dụng đc con trỏ this
const UseStateDemo = () => {
 let [number , setNumber] = useState(10); // [state , hamSetState]

 console.log(this);
 console.log('number', number);

 let [fontSize , setFontSize] = useState(16);
 const handleChangeFontSize = (fSize) => {
    let newFontSize = fontSize + fSize;
    setFontSize(newFontSize)
 }
  return (
    <div className='container'>
        <h3>Ví dụ 1: tăng giảm số lượng</h3>
        <p>Number : {number} </p>
        <button className="btn btn-success mx-2"onClick={() => {
            let newNumber = number + 1 ;
            setNumber(newNumber);
        }}>+</button>
        <button className="btn btn-success mx-2">-</button>
        {/*  */}
        <h3>Ví dụ 2: tăng giảm số lượng</h3>
        <p style={{fontSize: fontSize}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quam similique nostrum dolore! Recusandae modi perferendis, sunt nemo excepturi officiis ipsam qui sapiente ab nulla! Iusto, quia. Reprehenderit, molestias magnam.</p>
        <button className="btn btn-success mx-2"onClick={() => {
             handleChangeFontSize(5);
        }}>+</button>
        <button className="btn btn-success mx-2" onClick={() => {
            handleChangeFontSize(-5);
        }}>-</button>
    </div>
  )
}

export default UseStateDemo