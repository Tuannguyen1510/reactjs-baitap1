import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBurger.css'
export class BaiTapBurger extends Component {
    renderBreadMid = () => {
        // console.log(this.props.BurgerReducer);
        let {burger} = this.props;


        // Cách 1
        let content = []
        for(let propBurger in burger){
            // console.log(propBurger, burger[propBurger]);
            let breadMid = [] ;
            for(let i =0 ; i < burger[propBurger] ; i++){
                breadMid.push( <div className={propBurger} key={i}></div>)
            }
            content.push(breadMid)
        }
        return content ;





        // Cách 2 
        // return Object.entries(burger).map(([propBurger, value], index) => {
        //     // console.log(propBurger, value);
        //     let breadMid = [];
        //     for(let i = 0 ; i < value ; i++){
        //         breadMid.push( <div className={propBurger} key={i}></div>)
        //     }
        //     return breadMid
        //     // return (
        //     //     <div className={propBurger} key={index}></div>
        //     // )
        // })
    }
    renderMenu = () => {
        let {menu, burger} = this.props;
        // console.log(menu);
        return Object.entries(menu).map(([propsMenu , price], index) => {
            return (
                <tr key={index}>
                      <td>{propsMenu}</td>
                      <td>
                          <button className='btn btn-success' onClick={() => {
                            this.props.addBreadMid(propsMenu, 1)
                          }}>+</button>
                          {burger[propsMenu]}
                          <button className='btn btn-danger' onClick={() => {
                            this.props.addBreadMid(propsMenu, -1)
                          }}>-</button>
                      </td>
                      <td>{price}</td>
                      <td>{price * burger[propsMenu]}</td>
                </tr>
            )
        })
    }

    // tangSoLuong = () => {
    //     const 
    // }
    
  render() {
    return (
      <div>
         <h3 className="text-success text-center">Bài tập Burger</h3>
         <div className="row">
            <div className="col-7">
                <div className="text-center text-danger">Bánh burger của bạn</div>
                <div className="breadTop"></div>
                {this.renderBreadMid()}
                <div className="breadBottom"></div>
            </div>
            <div className="col-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Thức ăn </th>
                            <th>  </th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='2'></td>
                            <td>Tổng Cộng </td>
                            <td>{this.props.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    burger: state.BurgerReducer.burger,
    menu : state.BurgerReducer.menu,
    total: state.BurgerReducer.total
})

const mapDispatchToProps = dispatch => {
    return {
        addBreadMid: (propsBurger, amount) => {
            // Tạo action
            const action = {
                type: 'ADD_BREAD',
                propsBurger,
                amount
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(BaiTapBurger)
