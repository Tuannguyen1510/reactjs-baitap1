import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <section className="carousel p-5">
                <div className="content p-5">
                    <div className="main p-5 bg-light rounded-3 text-center">
                        <h1>A warm welcome!</h1>
                        <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <div className="btn">
                            <button className='btn btn-primary'>Call to action</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
