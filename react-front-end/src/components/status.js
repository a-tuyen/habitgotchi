import React from "react";
import { Fragment } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FavoriteIcon from '@material-ui/icons/Favorite';

import "./styles/status.scss";

export default function Status(props) {
	console.log('props++', props);
	const string =
		" " + (props.walk || props.sleep || props.excercise || props.water || props.heart_rate || props.active_min);
	return (
		<Fragment>
			<Card className="stat-card">
				{props.water && <LocalDrinkIcon className="stat-card--icon"/>}
				{props.sleep && <NightsStayIcon className="stat-card--icon"/>}
				{props.excercise && <WhatshotIcon className="stat-card--icon"/>}
				{props.walk && <DirectionsWalkIcon className="stat-card--icon" />}
				{props.active_min  && <DirectionsRunIcon className="stat-card--icon" />}
				{props.heart_rate && <FavoriteIcon className="stat-card--icon" />}
				<h3>
					{props.value}
					{string}
				</h3>
			</Card>
		</Fragment>
	);
}
