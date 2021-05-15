import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function QuestionSteps({ formData, setForm, navigation }) {
	const { steps_goal } = formData;
	const [goalerror, SetError] = useState(0);
	function validate() {
		if (parseInt(steps_goal)) {
			navigation.next();
		} else {
			SetError(1);
		}
	}

	return (
		<Container maxWidth="s">
			<Nav />
			<h3>What is your step goal for each day?</h3>
			<TextField
				error={goalerror}
				label="Number of Steps"
				name="steps_goal"
				value={steps_goal}
				onChange={setForm}
				margin="normal"
				variant="outlined"
				autoComplete="off"
				fullWidth
				helperText={!goalerror ? "" : " It should be a number"}
			/>

			<Button
				variant="contained"
				fullWidth
				color="primary"
				style={{ marginTop: "1rem" }}
				onClick={validate}
			>
				Next
			</Button>
		</Container>
	);
}
