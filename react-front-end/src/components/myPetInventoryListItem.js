import React from "react";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import SelectContext from "./SelectContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: "2vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "2em",
		borderRadius: "2rem",
	},
	petContent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	img: {
		height: "25vh",
	},
	button: {
		fontFamily: "Quicksand",
		color: "white",
		borderRadius: "1.5rem",
		marginTop: "20px",
	},
}));

export default function MyPetInventoryListItem(props) {
	const classes = useStyles();
	const selectdigitalpet = useContext(SelectContext);

	return (
		<Card className={classes.root}>
			<div className={classes.petContent}>
				<img src={props.img} className={classes.img} alt="" />
				<h3>{props.name}</h3>
				<p>{props.description}</p>
			</div>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				onClick={() => {
					selectdigitalpet(props.id);
				}}
			>
				{props.Active ? "Current Pet" : "Select"}
			</Button>
		</Card>
	);
}
