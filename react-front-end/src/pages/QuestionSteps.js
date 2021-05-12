// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Nav from "../components/Nav";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
  
import {Link} from 'react-router-dom';


export default function QuestionSteps(props) {
  console.log("tHis is steps page")
  return (
    <div>
      <Nav />
      <FormControl>
        <p>What is your step goal for each day?</p>
          <Input
            id="standard-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">steps</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
        {/* <button>Next</button> */}
        <Link to="/questionwater">
     <button type="button">
          Next
     </button>
 </Link>
    </div>
  );
}


