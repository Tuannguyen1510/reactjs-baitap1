import React, { Component } from 'react'
const data =  [
  {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
]
export default class Person extends Component {
    state = 
        [
            {
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "./glassesImage/v1.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 2,
                "price": 50,
                "name": "GUCCI G8759H",
                "url": "./glassesImage/v2.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 3,
                "price": 30,
                "name": "DIOR D6700HQ",
                "url": "./glassesImage/v3.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 4,
                "price": 70,
                "name": "DIOR D6005U",
                "url": "./glassesImage/v4.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 5,
                "price": 40,
                "name": "PRADA P8750",
                "url": "./glassesImage/v5.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 6,
                "price": 60,
                "name": "PRADA P9700",
                "url": "./glassesImage/v6.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 7,
                "price": 80,
                "name": "FENDI F8750",
                "url": "./glassesImage/v7.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 8,
                "price": 100,
                "name": "FENDI F8500",
                "url": "./glassesImage/v8.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 9,
                "price": 60,
                "name": "FENDI F4300",
                "url": "./glassesImage/v9.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            }
          ]

    renderPerson = () => {
        const arrMap =  data.map((item, index) => {
              return (
              <div className="col-2" key={index} onClick={() => {
                this.setState({
                  id: item.id,
                  price : item.price,
                  name: item.name,
                  url: item.url, 
                  desc: item.desc
                })
              }}>
                <img src={item.url} alt="" />
              </div>
              )
         })
         console.log(arrMap);
         return arrMap
    }
  render() {
        return (
            <div>
                <div className="row person">
                    <div className="col-6">
                        <div className="content">
                            <div className="img">
                                <img src="./glassesImage/model.jpg" alt="" />
                                <div className="img-v">
                                    <img src={this.state.url}  alt="" />
                                </div>
                                <div className="content-text">
                                    <h5>{this.state.name}</h5>
                                    <p>{this.state.desc} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-6">
                        <div className="content">
                          <div className="img">
                            <img src="./glassesImage/model.jpg" alt="" />
                            <div className="img-v">
                                    <img src={this.state.url}  alt="" />
                                </div>
                          </div>
                        </div>
                    </div>
                </div>

{/*  */}
                <div className="cart row">
                    {this.renderPerson()}
                    {/* console.log(this.renderPerson()); */}
                </div>
            </div>
        )
    }
}
