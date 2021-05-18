import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Nav from "../components/Nav";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../components/styles/QuestionsFormUseStyles";

export default function QuestionWater({ formData, setForm, navigation }) {
	const { water_goal } = formData;
	const [goalerror, SetError] = useState(false);
	function validate() {
		if (parseInt(water_goal)) {
			navigation.next();
		} else {
			SetError(true);
		}
	}

	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<Nav />
			<h3 className={classes.question}>
				How many cups of water are you aiming to drink a day?
			</h3>
			<TextField
				className={classes.textField}
				error={goalerror}
				label="Cups of Water"
				name="water_goal"
				value={water_goal}
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
					color="secondary"
					variant="contained"
					onClick={() => navigation.previous()}
				>
					Back
				</Button>
				<Button
				 className={classes.button}
				 color="primary"
				 variant="contained"
				 onClick={() => validate()}
				 >
					Next
				</Button>
			</div>
		</Container>
	);
}
