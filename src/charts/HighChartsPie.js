import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import variablePie from "highcharts/modules/variable-pie.js";


variablePie(Highcharts);

const PaiCharts = () => {
    const options = {
        chart: {
            type: 'variablepie'
        },
        title: {
            text: 'Countries compared by population density and total area, 2022.'
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/><br/>' +
                'Area (square km): {point.y}%<br/>' 
                // 'Population density (people per square km): <b>{point.z}%</b><br/>'
        },
        credits: {
            enabled: false
        },
        series: [{
            minPointSize: 10,
            innerSize: '80%',
            zMin: 0,
            name: 'countries',
            data: [{
                name: 'Nutral',
                y: 25,
                z: 75
            }, {
                name: 'France',
                y: 100,
                z: 75
            }]
        }]
      };
  return (
    <>
        <div className='bg-light'>
            <HighchartsReact className="bg-light" highcharts={Highcharts} options={options} />
        </div>
    </>
  )
}

export default PaiCharts