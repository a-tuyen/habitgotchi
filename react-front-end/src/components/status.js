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
				{props.water && <img src="https://img.icons8.com/cotton/50/000000/water-glass.png"/>}
				{props.sleep && <img src="https://img.icons8.com/cotton/64/000000/pillow--v6.png"/>}
				{props.excercise && <img src="https://img.icons8.com/cotton/64/000000/vegetarian-food--v1.png"/>}
				{props.walk && <img src="https://img.icons8.com/cotton/64/000000/trainers.png"/>}
				{props.active_min  && <img src="https://img.icons8.com/cotton/50/000000/dumbbell--v1.png"/>}
				{props.heart_rate && <img src="https://img.icons8.com/cotton/64/000000/like--v1.png"/>}
				<h3 className="stat-card-text">
					{props.value}
					{string}
				</h3>
			</Card>
			{/* <Card className="stat-card">
				{props.water && <img src="https://img.icons8.com/dusk/50/000000/soda-water.png"/>}
				{props.sleep && <img src="https://img.icons8.com/dusk/50/000000/sleeping-in-bed.png"/>}
				{props.excercise && <img src="https://img.icons8.com/dusk/64/000000/bitten-apple.png"/>}
				{props.walk && <img src="https://img.icons8.com/officel/50/000000/baby-footprints-path.png"/>}
				{props.active_min  && <img src="https://img.icons8.com/dusk/50/000000/weightlifting.png"/>}
				{props.heart_rate && <img src="https://img.icons8.com/dusk/50/000000/heart-with-pulse.png"/>}
				<h3>
					{props.value}
					{string}
				</h3>
			</Card> */}
			{/* <Card className="stat-card">
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
			</Card> */}
		</Fragment>
	);
}
