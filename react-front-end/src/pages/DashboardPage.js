import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import DigitalPet from "../components/DigitalPet";
import Status from "../components/status";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
	},
}));

export default function DashboardPage(props) {
  const classes = useStyles();
	console.log(props);
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
					<Status value={props.Status.steps} walk={"steps"} />
				</Grid>
				<Grid item xs={6}>
					<Status value={props.Status.calories} excercise={"Kcal"} />
				</Grid>
				<Grid item xs={6}>
					<Status value={props.Status.sleep} sleep={"hrs"} />
				</Grid>
				<Grid item xs={6}>
					<Status value={props.Status.water} water={"cups"} />
				</Grid>
			</Grid>
		</div>
	);
}
