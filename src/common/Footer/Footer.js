import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className='bg-dark py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className=''>
                                <h2 className='text-white mb-3'>
                                    Dashboard - Live
                                </h2>
                                <a href='mailto:brahm@gmail.com' className=''><i className="fa-solid fa-envelope me-2"></i>brahm@gmail.com</a>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='text-end'>
                                <div className='mb-3'>
                                    <button type='button' className='btn google-btn rounded-pill me-3'>
                                        <i className="fa-brands fa-google me-2"></i> Goolge
                                    </button>
                                    <button type='button' className='btn yahoo-btn rounded-pill'>
                                        <i className="fa-brands fa-yahoo me-2"></i> Yahoo
                                    </button>
                                </div>
                                <p className='small mb-0 text-white'>
                                    &copy; All Right are Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer