import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>

     <nav className="navbar navbar-expand-md navbar-dark bg-dark text-light">
  <div className="container d-flex justify-content-end">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

       



      </div>
    )
  }
}
