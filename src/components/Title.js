import {Typography } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from "react-redux";


const theme = createTheme({
  typography: {
    fontFamily: [
      'Montesserat',
      'regular',
    ].join(','),
  },});

const Title = () => {

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h1" fontSize='30px' fontWeight={'bold'} color={'white'}>
                Выручка
            </Typography>
        </ThemeProvider>
    )
}

export default Title