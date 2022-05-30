import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'
const About = () => {
    return (
        <div>
            <section id="about" >
                <div className="container mt-5">
                <h3 className="fs-5 mt-4 mb-0 fw-bolder fs-2 md-6 mx-auto w-50" id='names' >About Us<hr/></h3>
                    <div className="row">
                        <div className="col-md-6 mt-1">
                            <img src="image\img.png" alt=""  id='imgs' className='w-75 mt-5 md-6' />
                        </div>
                        <div className="col-md-6 mt-5">
                            <h1 className="display-6">
                                Who <b>We </b>Are
                            </h1>
                            <hr className='w-50' />
                            <p className='display-6 fs-3 mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Fugit reprehenderit magnam illum aliquam at recusandae iste harum
                                  rem quae! Explicabo in perferendis laudantium vero ipsum,
                                 facilis esse voluptatem similique tenetur.
                            </p>
                            <NavLink to='/' className="btn btn-primary rounded-pill px-4 py-2">Get Started</NavLink>
                            <NavLink to='/contact' className="btn btn-outline-primary rounded-pill ms-2 px-4 py-2">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About