import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {Link} from 'react-router-dom';


export default function QuestionIntensity({ formData, setForm, navigation }) {

const { intensity } = formData;
console.log('FORM', formData)

const [value, setValue] = React.useState('intensity');

const handleChange = (event) => {
  setValue(event.target.value);
};
// return (
//   <Container maxWidth="xs">
//     <h3>Please select your level of fitness intensity?</h3>
//     <TextField
//       label="15 active minutes"
//       name="active_min_goal"
//       value={active_min_goal}
//       onChange={setForm}
//       margin="normal"
//       variant="outlined"
//       autoComplete="off"
//       fullWidth
//     />
//     <div style={{ marginTop: "1rem" }}>
//       <Button
//         color="secondary"
//         variant="contained"
//         style={{ marginRight: "1rem" }}
//         onClick={() => navigation.previous()}
//       >
//         Back
//       </Button>
//       <Button
//         color="primary"
//         variant="contained"
//         onClick={() => navigation.next()}
//       >
//         Next
//       </Button>
//     </div>
//   </Container>
// );
// };

return (
  <>
    <Nav />
    <FormControl component="fieldset">
      {/* <FormLabel component="legend"></FormLabel> */}
      <h3>Please select your desired level of fitness intensity</h3>
      <RadioGroup aria-label="intensity" name="intensity" value={intensity} onChange={handleChange}>
        <FormControlLabel value="intensity" control={<Radio />} label="Low" />
        <FormControlLabel value="intensity" control={<Radio />} label="Moderate" />
        <FormControlLabel value="intensity" control={<Radio />} label="High" />
      </RadioGroup>
    </FormControl>
    <div style={{ marginTop: "1rem" }}>
      <Button
        color="secondary"
        variant="contained"
        style={{ marginRight: "1rem" }}
        onClick={() => navigation.previous()}
      >
        Back
      </Button>
      <Link to="/dailychallenges"> 
      <Button
        color="primary"
        variant="contained"
        // onClick={() => navigation.next()}
      >
        Submit
      </Button>
      </Link>
    </div>
  </>
);
}

