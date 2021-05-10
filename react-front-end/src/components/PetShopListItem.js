import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

export default function DigitalPet(props) {
	console.log(props);
	return (
		<Card>
			<CardMedia style={{ height: "150px" }} image={props.Activepet.img} />
			<Typography>{props.Activepet.name}</Typography>
		</Card>
	);
}

// Info wanted from Props 
// Name, Description, Coins
// need button for buy
// need to show player coins 