import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import { makeStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
  
import {Link} from 'react-router-dom';
import Nav from "../components/Nav";

export default function QuestionSteps({ formData, setForm, navigation }) {
  console.log("tHis is steps page")
//   return (
//     <div>
//       <Nav />
//       <FormControl>
//         <p>What is your step goal for each day?</p>
//           <Input
//             id="standard-adornment-weight"
//             // value={values.weight}
//             // onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">steps</InputAdornment>}
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
//           Next
//      </button>
//  </Link>
//     </div>
//   );
// }

const { steps_goal } = formData;


  return (
    <Container maxWidth="xs">
      <h3>What is your step goal for each day?</h3>
      <TextField
        label="Number of Steps"
        name="steps_goal"
        value={steps_goal}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
     
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};