import React from "react";
import { Fragment } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
statCard: {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	height: "7rem",
	padding: "2rem",
	borderRadius: "2rem",
},

statCardText: {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",

}

}));

export default function Status(props) {

	const classes = useStyles();

	const string =
		" " +
		(props.walk ||
			props.sleep ||
			props.excercise ||
			props.water ||
			props.heart_rate ||
			props.active_min);
	return (
		<Fragment>
			<Card className={classes.statCard}>
				{props.water && (
					<img
						src="https://img.icons8.com/cotton/50/000000/water-glass.png"
						alt=""
					/>
				)}
				{props.sleep && (
					<img
						src="https://img.icons8.com/cotton/64/000000/pillow--v6.png"
						alt=""
					/>
				)}
				{props.excercise && (
					<img
						src="https://img.icons8.com/cotton/64/000000/vegetarian-food--v1.png"
						alt=""
					/>
				)}
				{props.walk && (
					<img
						src="https://img.icons8.com/cotton/64/000000/trainers.png"
						alt=""
					/>
				)}
				{props.active_min && (
					<img
						src="https://img.icons8.com/cotton/50/000000/dumbbell--v1.png"
						alt=""
					/>
				)}
				{props.heart_rate && (
					<img
						src="https://img.icons8.com/cotton/64/000000/like--v1.png"
						alt=""
					/>
				)}
				<h3 className={classes.statCardText}>
					{props.value}
					{string}
				</h3>
			</Card>
		</Fragment>
	);
}
