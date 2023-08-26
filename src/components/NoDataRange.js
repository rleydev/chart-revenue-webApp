import Alert from '@mui/material/Alert';

const NoDataRange = () => {

    return (
        <Alert sx={{display: 'flex', justifyContent: 'center', 
                    alignItems: 'center', marginTop: '200px',
                    color: 'white'}} variant="outlined" severity="warning">
        Sorry, but there is no data for specific range!
        </Alert>
    )
}

export default NoDataRange