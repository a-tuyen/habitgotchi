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


import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Nav from "../components/Nav";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
  
import {Link} from 'react-router-dom';


export default function QuestionActiveMin({ formData, setForm, navigation }) {
//   return (
//     <div>
//       <Nav />
//       <FormControl>
//         <p>How many Active Minutes are you aiming to complete each day?</p>
//           <Input
//             id="standard-adornment-weight"
//             // value={values.weight}
//             // onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
//             aria-describedby="standard-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
//         </FormControl>
//         {/* <button>Next</button> */}
//         <Link to="/questionwater">
//      <button type="button">
//           Back
//      </button>
//  </Link>
//         <Link to="/">
//      <button type="button">
//           Next
//      </button>
//  </Link>
//     </div>
//   );
// }

const { active_min_goal } = formData;

return (
  <Container maxWidth="s">
    <Nav />
    <h3>How many Active Minutes are you aiming to complete each day?</h3>
    <TextField
      label="Amount of Active Minutes"
      name="active_min_goal"
      value={active_min_goal}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
    <div style={{ marginTop: "1rem" }}>
      <Button
        color="secondary"
        variant="contained"
        style={{ marginRight: "1rem" }}
        onClick={() => navigation.previous()}
      >
        Back
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </div>
  </Container>
);
};
