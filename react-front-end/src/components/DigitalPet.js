import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

export default function DigitalPet(props) {
	console.log(props);
	return (
		// <div>
		// 	<h1>{props.Activepet.name}</h1>
		// 	<img src={props.Activepet.img}></img>
		// </div>

		<Card>
			{/* <CardMedia img src={props.Activepet.img} /> */}
			<CardMedia style={{ height: "150px" }} image={props.Activepet.img} />
			{/* <img src= {props.img}></img> */}
			<Typography>{props.Activepet.name}</Typography>
		</Card>
	);
}
