import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export default function PetShopListItem(props) {
	console.log(props);
	return (
		<Card>
			<img src={props.img} />
			<Typography variant="h3">{props.name}</Typography>
			<Typography variant="subtitle1">{props.description}</Typography>
			<Button variant="contained" color="primary" disableElevation>
				{props.coins} coins
			</Button>
			<Button variant="contained" color="primary" disableElevation>
				Buy
			</Button>
		</Card>
	);
}
