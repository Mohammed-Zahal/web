import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>

            <section id="about" >

                <div className="container mt-5" id='cnts'>
                    <h3 className="fs-5 mt-4 mb-0 fw-bolder fs-2 md-6 mx-auto w-50" id='names' >Contact Us<hr /></h3>

                    <div className="row">

                        <div className="col-md-6 mt-1">
                            <img src="image\imgs2.jpg" alt="" id='imgs' className='w-75 mt-5 ' />
                        </div>
                        <div className="col-md-6 mt-5">
                            <form action="" >
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Your Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Your Message</label>
                                    <textarea className="form-control" placeholder="Leave your message  here" id="floatingTextarea2" ></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>

                        </div>
                    </div>
                </div>``
            </section>
        </div> 
    )
}

export default Contact