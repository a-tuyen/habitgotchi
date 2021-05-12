import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import DigitalPet from "../components/DigitalPet";
import Status from "../components/status";

export default function DashboardPage(props) {
	console.log(props);
	return (
		<div>
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
