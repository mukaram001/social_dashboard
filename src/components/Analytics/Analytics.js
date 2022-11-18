import React from 'react'
import '../../App.css';
import HighCharts from '../../charts/HighCharts';

const Analytics = () => {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <div className='section_heading'>
                                    <h2>
                                        Analytics
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='mb-5'>
                                <HighCharts />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='text-center'>
                                <button type='button' className='btn btn-primary rounded-pill'>
                                    <i className="fa-brands fa-google me-2"></i> Login with Google
                                </button>
                            </div>
                        </div>
                        <div className='col-12 mt-5'>
                            <div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <h3 className='mb-3'>Google Analytics Data</h3>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='text-end'>
                                            <button className='btn btn-secondary rounded-pill' type='button'>
                                                Export <i className="fa-solid fa-file-arrow-down ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-striped table-hover">
                                    <tbody className='text-center'>
                                        <tr>
                                            <td className='w-50'><b>Action on Page</b></td>
                                            <td className='w-50'>165</td>
                                        </tr>
                                        <tr>
                                            <td><b>Visits</b></td>
                                            <td>11</td>
                                        </tr>
                                        <tr>
                                            <td><b>Impressions</b></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td><b>Page Views</b></td>
                                            <td>383</td>
                                        </tr>
                                        <tr>
                                            <td><b>Sessions</b></td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td><b>Session Pre User</b></td>
                                            <td>2.27</td>
                                        </tr>
                                        <tr>
                                            <td><b>Organic Searches</b></td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td><b>Most Visited site</b></td>
                                            <td>Localhost:3000/</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics