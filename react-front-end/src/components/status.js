import React from "react";
import { Fragment } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WhatshotIcon from '@material-ui/icons/Whatshot';

import "./styles/status.scss";

export default function Status(props) {
	console.log(props);
	const string =
		" " + (props.walk || props.sleep || props.excercise || props.water);
	return (
		<Fragment>
			<Card className="stat-card">
				{props.water && <LocalDrinkIcon className="stat-card--icon"/>}
				{props.sleep && <NightsStayIcon className="stat-card--icon"/>}
				{props.excercise && <WhatshotIcon className="stat-card--icon"/>}
				{props.walk && <DirectionsWalkIcon className="stat-card--icon" />}
				<h3>
					{props.value}
					{string}
				</h3>
			</Card>
		</Fragment>
	);
}
