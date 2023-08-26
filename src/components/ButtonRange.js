import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';


const RangeCustom = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    width: '100px',
    color: 'white',
    borderColor: '#0063cc',
    fontFamily: [
      'Montserrat',
      'Regular'
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

const ButtonRange = ({name}) => {

    return (
        <RangeCustom variant='outline'>
            {name}
        </RangeCustom>
    )
}

export default ButtonRange