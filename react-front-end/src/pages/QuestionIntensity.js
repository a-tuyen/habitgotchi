import React, { useContext } from "react";
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
import QuestionsContext from "../components/QuestionsContext";


export default function QuestionIntensity({ formData, setForm, navigation, dailyChallengesState }) {

const { intensity } = formData;
console.log('formData:', formData)

// const { DailyChallenges } = dailyChallengesState;
// console.log('dailyChallengesState:', dailyChallengesState)

const updateDailyChall = useContext(QuestionsContext);


// formData: {steps_goal: "1000", water_goal: "8", active_min_goal: "9
// dailyChallengesState: 
// {ActivePet: {…}, Status: {…}, MyPetInventory: Array(3), PetShop: Array(8), DailyChallenges: Array(1), …}
// ActivePet: {name: "Mango", img: "https://github.com/a-tuyen/habitgotchi/blob/master/docs/pets/051-cat.png?raw=true", pet_id: 1}
// DailyChallenges: Array(1)
// 0: {id: 3, step_goal: 10000, water_goal: 8, active_min_goal: 30, coins: 300, …}
// length: 1

return (
  <>
    <Nav />
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <h3>Please select your desired level of fitness intensity</h3>
      <RadioGroup aria-label="intensity" name="intensity" value={intensity}>
        <FormControlLabel value="low" control={<Radio />} label="Low"  onChange={setForm}/>
        <FormControlLabel value="moderate" control={<Radio />} label="Moderate"  onChange={setForm}/>
        <FormControlLabel value="high" control={<Radio />} label="High"  onChange={setForm}/>
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

