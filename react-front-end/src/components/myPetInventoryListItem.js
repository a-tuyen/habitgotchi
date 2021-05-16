import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia, GridListTileBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import SelectContext from "./SelectContext";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "80%",
		// marginLeft: "5vw",
		// marginRight: "5vw",
		// marginTop: "5vh",
		marginBottom: "2vh",
		padding: "5em",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "2em",
		// minHeight: "3vh",
		// height: "18rem",
		// width: '14rem',
	},
	img: {
		height: "25vh",
		padding: "2em",
	},
	button: {
		backgroundColor: "#2B7A78",
		fontFamily: "Quicksand",
	},
}));

export default function MyPetInventoryListItem(props) {
	const classes = useStyles();
	// console.log(props);
	const selectdigitalpet = useContext(SelectContext);
	return (
		<Card className={classes.root}>
			<div className="pet-content">
				<img src={props.img} className={classes.img} />
				<h3>{props.name}</h3>
				<p>{props.description}</p>
			</div>
			<Button
				className={classes.button}
				variant="contained"
				color="Primary"
				Disabled={props.Active ? true : false}
				onClick={() => {
					selectdigitalpet(props.id);
				}}
			>
				{props.Active ? "Current Pet" : "Select"}
			</Button>
		</Card>
	);
}
