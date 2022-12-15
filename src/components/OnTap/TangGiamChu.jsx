import React, { Component } from 'react'

export default class TangGiamChu extends Component {
    state = {
        color: 'red' ,
        back: 'white',
        b: 'red',
        img: 'https://i.pravatar.cc?u=5'
    }
  render() {
    return (
      <div>
         <p style={{color: this.state.color}}>Lorem ipsum dolor sit amet.</p>
         <button className="btn btn-primary" onClick={() => {
            this.setState({
                color: 'green'
            })
         }}>Xanh </button>
         <button className="btn btn-primary" onClick={() => {
            this.setState({
                color: 'blue'
            })
         }}>Xanh Lá </button>
         <hr />
         <hr />




         <input type="radio" name='name'   onChange={(e) => {
               this.setState({
                back: 'blue'
               })
         }}/>
         <input type="radio" name='name'  onChange={(e) => {
            this.setState({
                back: 'green'
            })
         }} />

         <p style={{
            height: 100,
            background: this.state.back
         }}   >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa animi voluptates. Enim facilis qui omnis beatae vitae, iste esse itaque iure, accusamus consectetur fugit iusto quaerat inventore quos. Quos.
         </p>



         <hr />
          <select className='form-control w-25 ' onChange={(e) => {
            const a = e.target;
             this.setState({
                b: a.value
             })
          }}>
            <option value={'blue'}>Dark</option>
            <option value={'black'}>Light</option>
          </select>
            
            <p style={{
                height: 100,
                color: 'blue',
                background: this.state.b
            
            }}>Abc hhhhhhhhhhhhhhhh</p>
    <hr />
      

      <div className="cart w-25">
        <img src={this.state.img} alt="" />
        <button onClick={() => {
            const ramdom = Math.floor(Math.random() * 100)
            let newImg = 'https://i.pravatar.cc?u=' + ramdom;
            this.setState({
                img: newImg
            })
        }}>
            Ramdom
        </button>
      </div>




      </div>
    )
  }
}
