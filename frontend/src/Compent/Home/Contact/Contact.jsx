import React from 'react'

const Contact = () => {
    return (
     
           <div className="bg transition">
          <div className="nav-menu sticky-top">
        <div className="bg transition">
            <div className="container-fluid fixed">
                <div className="row">
                    <div className="col-md-12">
                      
                            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="ti-menu"></span>
              </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="listing.html">Explore</a>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                    <span className="ti-angle-down"></span>
                  </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="index-two.html">Home Style Two</a>
                                            <a className="dropdown-item" href="listing.html">Listing</a>
                                            <a className="dropdown-item" href="detail.html">Listing Detail</a>
                                            <a className="dropdown-item" href="add-listing.html">Add new Listing</a>
                                            <a className="dropdown-item" href="payment-method.html">Payment Method</a>
                                            <a className="dropdown-item" href="thank-you.html">Thank You</a>
                                            <a className="dropdown-item" href="contact.html">Contact</a>
                                            <a className="dropdown-item" href="pricing.html">Pricing</a>
                                            <a className="dropdown-item" href="404.html">404</a>
                                        </div>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="contact.html">Help</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Blog
                    <span className="ti-angle-down"></span>
                  </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="blog.html">Blog Listing</a>
                                            <a className="dropdown-item" href="blog-two.html">Blog Layout Two</a>
                                            <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login.html" data-toggle="modal" data-target="#exampleModal">Login</a>
                                    </li>
                                    <li><a href="add-listing.html" className="btn btn-outline-danger top-btn"><span className="ti-plus"></span> Add Listing</a></li>
                                </ul>
                            </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
       
    )
}

export default Contact
