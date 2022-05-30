import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Dashboard from '../Dashboard/Dashboard';
import Services from '../Services/Services'
import './Home.css';
const Home = (props) => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-cente text-white">Fells The Fresh Business Perspective</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Ipsam tenetur vero aliquam! Pariatur illum delectus perferendis nisi mollitia
                                reiciendis expedita odit nemo distinctio, eaque cum dolore sapiente? Voluptatem,
                                quibusdam porro.</p>
                                {props.newLocal}
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2">Get Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Contact />
            <Dashboard />


        </div>

    )
}
export default Home