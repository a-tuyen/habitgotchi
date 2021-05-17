// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import Input from "@material-ui/core/Input";
// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Nav from "../components/Nav";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";


import useStyles from "../components/styles/QuestionsFormUseStyles"
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, red, teal } from '@material-ui/core/colors';

import { Link } from "react-router-dom";

export default function QuestionWater({ formData, setForm, navigation }) {
	const { water_goal } = formData;
	const [goalerror, SetError] = useState(0);
	function validate() {
		if (parseInt(water_goal)) {
			navigation.next();
		} else {
			SetError(1);
		}
	}

	const ColorButton = withStyles((theme) => ({
		root: {
			color: theme.palette.getContrastText(purple[500]),
			backgroundColor: purple[500],
			'&:hover': {
				backgroundColor: teal[900],
			},
		},
	}))(Button);

	const theme = createMuiTheme({
		palette: {
			primary: teal,
		},
	});

	const classes = useStyles();

	return (
		<Container maxWidth="s">
			<Nav />
			<h3 className={classes.question} >How many cups of water are you aiming to drink a day?</h3>
			<TextField
				className={classes.textField}
				InputProps={{ disableUnderline: true }}
				error={goalerror}
				label="Cups of Water"
				name="water_goal"
				value={water_goal}
				onChange={setForm}
				margin="normal"
				// variant="outlined"
				autoComplete="off"
				fullWidth
				helperText={!goalerror ? "" : "Please enter only numbers"}
			/>
			<div className={classes.buttonContainer}>
				<ColorButton 
					className={classes.backButton}
					variant="contained"
					color="primary" 
					onClick={() => navigation.previous()}
				>
					Back
				</ColorButton>
				{/* <ThemeProvider theme={theme}> */}
				<Button
				className={classes.backButton}
				variant="contained"
				color="primary" 
				onClick={() => validate()}
				>
					Next
				</Button>
				{/* </ThemeProvider> */}
			</div>
		</Container>
	);
}


