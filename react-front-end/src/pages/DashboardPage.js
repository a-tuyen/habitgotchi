import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import DigitalPet from "../components/DigitalPet";
import Status from "../components/status";
// import useStatData from "../hooks/useStatData";
export default function DashboardPage(props) {
	// const { status } = useStatData();
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
			</Grid>
		</div>
	);
}
