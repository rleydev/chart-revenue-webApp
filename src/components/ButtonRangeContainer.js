import { Box, Stack } from "@mui/material"
import ButtonRange from "./ButtonRange"

const ButtonRangeContainer = () => {

    const buttonNames = ['Hourly', 'Daily',  'Weekly', 'Monthly' ]
    return (
        <Box sx={{
            margin: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Stack direction='row' spacing={6} >
                { buttonNames.map((name) => (
                    <ButtonRange key={name} name={name}/>
                ))}
            </Stack>
        </Box>
    )
}

export default ButtonRangeContainer