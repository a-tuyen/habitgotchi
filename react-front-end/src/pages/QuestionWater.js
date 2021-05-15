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
import { makeStyles } from "@material-ui/core/styles";

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

	return (
		<Container maxWidth="s">
			<Nav />
			<h3>How many cups of water are you aiming to drink a day?</h3>
			<TextField
				error={goalerror}
				label="Cups of Water"
				name="water_goal"
				value={water_goal}
				onChange={setForm}
				margin="normal"
				variant="outlined"
				autoComplete="off"
				fullWidth
				helperText={!goalerror ? "" : " It should be a number"}
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
				<Button color="primary" variant="contained" onClick={() => validate()}>
					Next
				</Button>
			</div>
		</Container>
	);
}
