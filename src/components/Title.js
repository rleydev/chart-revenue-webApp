import { Box, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montesserat',
      'regular',
    ].join(','),
    fontSize: 30,
    fontWeight: 'bold',
  },});

const Title = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h1" >
                HHHHHD:SK:FLK
            </Typography>
        </ThemeProvider>
    )
}

export default Title