import { Box } from "@mui/material"
import Title from "../components/Title"
import { useActions } from "../services/store/useAction"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import ErrorAlert from "../components/ErrorAlert"
import BarChartTable from "../components/BarChartTable"
import { useSelector } from "react-redux"
import ButtonRangeContainer from "../components/ButtonRangeContainer"


const Main = () => {

    const {sumValuesH, datesValuesH, isLoading, error} = useSelector((state => state))
    const { getData } = useActions()


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
                margin: "20px",
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
                backgroundColor: '#1D232C'}}>
                { isLoading === true ? (
                    <Loader />
                ) : isLoading === false && error ? (
                    <ErrorAlert />
                ) : chartState === 'h' && datesValuesH ? (
                    <BarChartTable dates={datesValuesH} values={sumValuesH}/>
                ) : chartState === 'd' ? (
                    <BarChartTable />
                ) : chartState === 'w' ? (
                    <BarChartTable />
                ) : chartState === 'm' ? (
                    <BarChartTable />
                ) : (<></>)
                }
            </Box>
            
        </div>
    )
}

export default Main
