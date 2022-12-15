import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'


export default class ShoesStore extends Component {

    state = {
        gioHang : [
            {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": 350,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 995,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png",
                "SoLuong" : 1
              }
        ]
    }

    themGioHang = (add) => {
        add = {...add, SoLuong:1}
        console.log(add);
        let addGH = this.state.gioHang;
        let spGH = addGH.find(sp => sp.id === add.id);
        if(spGH){
            spGH.SoLuong = spGH.SoLuong + 1; 
        } else{
            addGH.push(add)
        }

        this.setState({
            gioHang: addGH
        })
    }
    // 
    xoaGioHang = (remove) => {
        console.log(remove);
        let removeGH = this.state.gioHang;
        let index = removeGH.filter(sp => sp.id !== remove);
            if(index !== -1 ){
                removeGH.splice(index,1)
            }
        this.setState({
            gioHang: removeGH
        })
    }
    // 
    tangGiam = (tgSPClick, Clicktang) => {
        let tang = this.state.gioHang;
        let index = tang.findIndex(sp => sp.id === tgSPClick);
        if(Clicktang){
            tang[index].SoLuong += 1 
        }else{
           if(tang[index].SoLuong > 1 ){
            tang[index].SoLuong -= 1 
           }
        }
        this.setState({
          gioHang: tang
        })
      }
    

  render() {
    return (
      <div>
        <div className="container">
        <Modal gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiam={this.tangGiam}/>
        <ProductList themGioHang={this.themGioHang} />
        </div>
      </div>
    )
  }
}

