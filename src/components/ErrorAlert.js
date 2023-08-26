import { Box } from "@mui/material"
import Alert from "@mui/material/Alert"

const ErrorAlert = () => {
    return (
        <Box sx={{
            backgroundColor: '#3B4758',
            height: "300px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px'
        }}>
            <Alert severity="error" sx={{backgroundColor: '#1D232C', color: 'white',
                                    width: '300px',
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '10px'
                                    }}>
                Data can't be loaded <strong style={{color: 'red'}}>Network Error</strong>
            </Alert>
        </Box>
    )
}

export default ErrorAlert