import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { useActions } from "../services/store/useAction";


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
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    '&:disabled' : {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color: 'white',
    },
  });

const ButtonRange = ({name, state}) => {

  const isDisabled = name === state;
  const {changeCurrentRange} = useActions()

  const clickButton = () => {
    changeCurrentRange(name)
    console.log(name)
  }

  useEffect(() => {
    console.log(isDisabled + name)
  }, [])

    return (
        <RangeCustom disabled={isDisabled} onClick={() => clickButton()} variant='outline'>
            {name}
        </RangeCustom>
    )
}

export default ButtonRange