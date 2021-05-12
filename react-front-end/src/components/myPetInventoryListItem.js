import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia, GridListTileBar } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function MyPetInventoryListItem(props) {
	console.log(props);

	return (
		<Card>
			<img src={props.img} />
			<Typography variant="h3">{props.name}</Typography>
			<Typography variant="subtitle1">{props.description}</Typography>
			<Button variant="contained" color="Primary" onClick={1}>
				{props.Active ? "Current Pet" : "Select"}
			</Button>
		</Card>
	);
}
