import CachedIcon from '@mui/icons-material/Cached';
import { Box } from '@mui/material';

const Loader = () => {
    return (
        <Box sx={{
            width: "100%", 
            height: "300px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
       <CachedIcon sx={{
                       animation: "spin 2s linear infinite",
                       "@keyframes spin": {
                       "0%": {
                           transform: "rotate(360deg)",
                       },
                       "100%": {
                           transform: "rotate(0deg)",
                       },
                       },
                       color: 'white',
                       width: '50px',
                       height: '50px'
                   }} />
   </Box>
    )
}

export default Loader