import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Nav from "../components/Nav";

import useStyles from "../components/styles/QuestionsFormUseStyles";

export default function QuestionSteps({ formData, setForm, navigation }) {
	const { steps_goal } = formData;
	const [goalerror, SetError] = useState(false);
	function validate() {
		if (parseInt(steps_goal)) {
			navigation.next();
		} else {
			SetError(true);
		}
	}

	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<Nav />
			<h3 className={classes.question}>What is your step goal for each day?</h3>
			<TextField
				className={classes.textField}
				error={goalerror}
				label="Number of Steps"
				name="steps_goal"
				value={steps_goal}
				onChange={setForm}
				margin="normal"
				variant="outlined"
				autoComplete="off"
				fullWidth
				helperText={!goalerror ? "" : "Please enter only numbers"}
			/>
			<div className={classes.buttonContainer}>
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					onClick={validate}
				>
					Next
				</Button>
			</div>
		</Container>
	);
}
