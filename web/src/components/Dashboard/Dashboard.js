import React from 'react'
import  "./Dashboard.css";

const Dashboard = () => {
  const newLocal = <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Ipsam tenetur vero aliquam! Pariatur illum delectus perferendis nisi mollitia
    reiciendis expedita odit nemo distinctio, eaque cum dolore sapiente? Voluptatem,
    quibusdam porro.</p>;
  return (
    <div>
<section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                  
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-cente text-white">Fells The Fresh Business Perspective</h1>
                            {newLocal}
                            {/* <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2">Get Quote</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Dashboard