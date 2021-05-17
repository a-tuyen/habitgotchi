import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import TextField from '@material-ui/core/TextField';

import { makeStyles} from "@material-ui/core/styles";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {Link} from 'react-router-dom';
import QuestionsContext from "../components/QuestionsContext";
import useStyles from "../components/styles/QuestionsFormUseStyles"



export default function QuestionIntensity({ formData, setForm, navigation, dailyChallengesState }) {

const { intensity } = formData;
console.log('formData:', formData)

const classes = useStyles();

const updateDailyChall = useContext(QuestionsContext);

return (
  <>
    <Nav />
    <FormControl className={classes.root} component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <h3>Please select your desired level of fitness intensity:</h3>
      <RadioGroup aria-label="intensity" name="intensity" value={intensity}>
        <FormControlLabel value="low" control={<Radio />} label="Low"  onChange={setForm}/>
        <FormControlLabel value="moderate" control={<Radio />} label="Moderate"  onChange={setForm}/>
        <FormControlLabel value="high" control={<Radio />} label="High"  onChange={setForm}/>
      </RadioGroup>
    </FormControl>

    <div className={classes.buttonContainer}>
      <Button 
        className={classes.backButton}
        color="secondary"
        variant="contained"
        onClick={() => navigation.previous()}
      >
        Back
      </Button>
      <Link to="/dailychallenges"> 
      <Button
        className={classes.submitButton}
        color="primary"
        variant="contained"
        onClick={(event) => {
          updateDailyChall(formData);
        }}
      >
        Submit
      </Button>
      </Link>
    </div>
  </>
);
}

