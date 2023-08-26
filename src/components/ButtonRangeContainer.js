import { Box, Stack } from "@mui/material"
import ButtonRange from "./ButtonRange"
import { useSelector } from "react-redux"

const ButtonRangeContainer = () => {

    const buttonNames = ['Hourly', 'Daily',  'Weekly', 'Monthly']

    const {currentRange} = useSelector((state) => state.rangeReducer)


    return (
        <Box sx={{
            margin: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Stack direction='row' spacing={6} >
                { buttonNames.map((name) => (
                    <ButtonRange key={name} name={name} state={currentRange}/>
                ))}
            </Stack>
        </Box>
    )
}

export default ButtonRangeContainer