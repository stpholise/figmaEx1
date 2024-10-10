
import {Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Graph = () => {

    const LineChartData = {
        labels: [
            1,2,3,4,5,6,7,8,9,10
            
        ],
        datasets: [ 
            {
                label: 'First',
                data: [0, 600, 100, 100, 3000, 400, 1004, 500,0],
                borderColor: 'red',
                backgroundColor: 'red',
                fill: false,
                tension: 0.4,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display:false,
            position: 'top',
            
          },
          title: {
            display: false,
            text: 'Custom Line Chart',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
        }, 
      },
      scales: {
        x: {
          grid: {
            display: false, // Removes vertical grid lines
          },
          ticks:{
            callback: function(value, index, values) {
                // Show only the first and last labels
                if (index === 0 || index === values.length - 1) {
                  return value;
                }
                return '';
              },
          }
        },
        y: {
          grid: {
            display: false, // Removes horizontal grid lines
          },
          ticks:{ 
            display:false
          }
        },
      },
    }
   

    
  return (
    <div className='chartContainer'>
        <Line options={options} data={LineChartData} />
    </div>
  )
}

export default Graph