import React from 'react';
import '../../App.css';
import ColumnCharts from '../../charts/HighChartsColumn';

const TheseAreMyCharts = () => {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <div className='section_heading'>
                                    <h2>
                                        These are my charts
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='mb-5'>
                                <ColumnCharts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheseAreMyCharts