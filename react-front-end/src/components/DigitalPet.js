import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	pet: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		margin: "auto",
		borderRadius: "2rem"
	},

	digipetImg: {
		height: "250px",
    padding: "2em"
	}

}));

export default function DigitalPet(props) {

	const classes = useStyles();

	return (
		<Card className={classes.pet}>
			<img
				src={props.Activepet.img}
				className={classes.digipetImg}
				alt="digital-pet"
			></img>
			<h1>{props.Activepet.name}</h1>
		</Card>
	);
}
