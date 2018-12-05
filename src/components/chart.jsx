import * as React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'

export const Chart = (props) => {
	return (
		<div className="chart">
			<HighchartsReact
				highcharts={Highchart}
				options={{
					chart: {
						type: 'spline',
						style: {
							fontWeight: 'bold',
							fontFamily: 'Montserrat'
						}
					},
					title: {
						align: 'left',
						text: 'Horas de música x Quantidade de bandas',
						margin: 50
					},
					xAxis: {
						categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
					},
					yAxis: {
						title: {
							text: null
						},
						labels: {
							format: '{value}h'
						},
					},
					exporting: { enabled: false },
					legend: {
						align: 'right',
						verticalAlign: 'top',
						padding: 50,
						itemMarginTop: -47
					},
					responsive: {
						rules: [{
							condition: {
								maxWidth: 768
							},
							chartOptions: {
								legend: {
									enabled: false
								}
							}
						}]
					},
					plotOptions: {
						spline: {
							lineWidth: 4,
							states: {
								hover: {
									lineWidth: 5
								}
							},
							marker: {
								enabled: false
							}
						}
					},
					series: [{
						name: 'Horas de música',
						color: '#27ffa0',
						data: props.hours
					}, {
						name: 'Quantidade de bandas',
						color: '#4e88ff',
						data: props.quantity
					}]
				}} />
		</div>
	)
}