import { Box } from "@mui/material"
import Title from "../components/Title"
import { useActions } from "../services/store/useAction"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import ErrorAlert from "../components/ErrorAlert"
import BarChartTable from "../components/BarChartTable"
import { useSelector } from "react-redux"
import ButtonRangeContainer from "../components/ButtonRangeContainer"
import NoDataRange from "../components/NoDataRange"


const Main = () => {

    const {sumValuesH, datesValuesH,
        datesValuesD, datesValuesW,
        datesValuesMS, sumValuesD, sumValuesW, sumValuesMS,
        isLoading, error} = useSelector((state => state.dataReducer))
    const { getData } = useActions()

    const {currentRange} = useSelector(state => state.rangeReducer)


    const [chartState, setChartState] = useState('h')

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log()
    }, [])

    return (
        <div>
            <Box
                sx={{
                backgroundColor: "#1D232C",
                height: "70px",
                margin: '20px',
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <Title />
            </Box >
            <ButtonRangeContainer />
            <Box sx={{margin: '20px', 
                backgroundColor: '#1D232C',
                borderRadius: '10px'
                }}>
                { isLoading === true ? (
                    <Loader />
                ) : isLoading === false && error ? (
                    <ErrorAlert />
                ) : currentRange === 'Hourly' && (datesValuesH.length > 0) ? (
                    <BarChartTable dates={datesValuesH} values={sumValuesH} type={currentRange}/>
                ) : currentRange === 'Daily' && (datesValuesD.length > 0) ? (
                    <BarChartTable dates={datesValuesD} values={sumValuesD}/>
                ) : currentRange === 'Weekly' && (datesValuesW.length > 0) ? (
                    <BarChartTable dates={datesValuesW} values={sumValuesW}/>
                ) : currentRange === 'Monthly' && (datesValuesMS.length > 0) ? (
                    <BarChartTable dates={datesValuesMS} values={sumValuesMS}/>
                ) : (<NoDataRange />)
                }
            </Box>
            
        </div>
    )
}

export default Main
