import { TextField, withStyles } from '@material-ui/core';
import { Colors } from '../../../useful/constants/colors';

export const CustomInput = withStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: Colors.white,
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: Colors.white,

      '&:hover fieldset': {
        borderColor: Colors.red,
      },
      '&.Mui-focused fieldset': {
        borderColor: Colors.red,
      },
    },
  },
})(TextField);
