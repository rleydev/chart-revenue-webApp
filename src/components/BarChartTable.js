import { Bar } from "react-chartjs-2";
import { BarElement, Chart, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { formatDate } from "../services/helpers/dateFormatter";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

const BarChartTable = ({dates, values}) => {

    const formattedDates = dates.map(date => formatDate(date))


    const state = {
        labels: formattedDates,
        datasets: [
          {
            label: 'KZT',
            backgroundColor: '#319DFF',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: values
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
                                }
                            }
                        },
                    },
                    title: {
                        display: true,
                        text:'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position:'right'
                    }
                }}
            />
       
    )
}

export default BarChartTable