import React, { Component } from 'react'

export default class LayoutOnTap extends Component {
    state = {
        login : false
    }

   username = 'QuangKhai';

   renderLogin = () =>{
     if(this.state.login){
        return  <>
             <a class="nav-link active" href="#" aria-current="page">Hello {this.username}</a>
             <a class="nav-link active" href="#" aria-current="page" onClick={() => {
                this.handleLogout();
             }}>Đăng Xuất</a>
        </>  
     } 
     return  <a class="nav-link active" href="#" aria-current="page" onClick={() =>{
        this.handleLogin();
     }}>Đăng nhập</a> 
   }
  handleLogin = async () =>{
     await this.setState ({
        login: true
      })
      console.log(this.state);
  }
  handleLogout = () =>{
    this.setState ({
      login: false
    })
}

  render() {
    return (
       <>
            <nav class="nav justify-content-center">
               {this.renderLogin()}
            </nav>
       </>
    )
  }
}
