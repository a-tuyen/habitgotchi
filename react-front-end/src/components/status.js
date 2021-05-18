import React from "react";
import { Fragment } from "react";
import Card from "@material-ui/core/Card";

import "./styles/status.scss";

export default function Status(props) {
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
			<Card className="stat-card">
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
				<h3 className="stat-card-text">
					{props.value}
					{string}
				</h3>
			</Card>
		</Fragment>
	);
}
