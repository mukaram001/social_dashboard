import React from 'react'
import '../../App.css';
import PaiCharts from '../../charts/HighChartsPie';

const ChartsHeadline = () => {
    return (
        <>
            <div className='section bg-light' id='pievariablechart'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <div className='section_heading'>
                                    <h2>
                                        Charts Headline
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='mb-5'>
                                <PaiCharts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChartsHeadline