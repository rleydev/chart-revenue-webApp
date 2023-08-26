import { Bar } from "react-chartjs-2";
import { BarElement, Chart, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { formatDate } from "../services/helpers/dateFormatter";
import { formatDateHourly } from "../services/helpers/dateHourlyFormatter";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

const BarChartTable = ({dates, values, type}) => {

    const formattedDates = dates.map(date => formatDate(date))

    
    const hourlyDates = dates.map(date => formatDateHourly(date))

    const state = {
        labels: type === 'Hourly' ? hourlyDates : formattedDates,
        datasets: [
          {
            label: 'KZT',
            backgroundColor: '#319DFF',
            data:  values,
          }
        ]
    }


    return (
          
            <Bar
                data={state}
                options={{
                    locale: 'en-US',
                    scales: {
                        y: {
                            ticks: {
                                callback:(value, index, values) => {
                                    return Intl.NumberFormat('en-US', {style: 'currency', currency: 'KZT', maximumSignificantDigits: 3}).format(value);
                                },
                                color: '#FBFAF5'
                            },
                            
                        },
                        x: {
                            ticks: {
                                color: '#FBFAF5'
                            }
                        }
                    },
                    title: {
                        display: true,
                        text:'Average Rainfall per month',
                        fontSize: 20
                        
                    },
                    legend: {
                        display: true,
                        position:'right',
                       
                        
                    }
                }}
            />
       
    )
}

export default BarChartTable