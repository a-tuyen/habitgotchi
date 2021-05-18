import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import DigitalPet from "../components/DigitalPet";
import Status from "../components/status";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "1rem",
		marginRight: "1rem",
	},
}));

export default function DashboardPage(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Nav />
				</Grid>

				<Grid item xs={12}>
					<DigitalPet Activepet={props.Activepet} />
				</Grid>
				<Grid item xs={6}>
					<Status value={props.status.steps} walk={"steps"} />
				</Grid>
				<Grid item xs={6}>
					<Status value={props.status.calories} excercise={"Kcal"} />
				</Grid>
				<Grid item xs={6}>
					<Status value={props.status.sleep} sleep={"hrs"} />
				</Grid>
				<Grid item xs={6}>
					<Status value={props.status.water} water={"cups"} />
				</Grid>
				<Grid item xs={6}>
					<Status
						value={props.status.active_min}
						active_min={"active minutes"}
					/>
				</Grid>
				<Grid item xs={6}>
					<Status value={props.status.heart_rate} heart_rate={"BPM"} />
				</Grid>
			</Grid>
		</div>
	);
}
