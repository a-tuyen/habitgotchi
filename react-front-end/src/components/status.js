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
			<Card className="stat-bar">
				{props.water && <LocalDrinkIcon style={{ fontSize: 80 }} />}
				{props.sleep && <NightsStayIcon style={{ fontSize: 80 }} />}
				{props.excercise && <WhatshotIcon style={{ fontSize: 80 }} />}
				{props.walk && <DirectionsWalkIcon style={{ fontSize: 80 }} />}
				<Typography gutterBottom variant="h5" component="h2">
					{props.value}
					{string}
				</Typography>
			</Card>
		</Fragment>
	);
}
