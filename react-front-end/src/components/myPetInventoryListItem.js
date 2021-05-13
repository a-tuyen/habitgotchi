import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia, GridListTileBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import SelectContext from "./SelectContext";



export default function MyPetInventoryListItem(props) {
	// console.log(props);
	const selectdigitalpet = useContext(SelectContext);
	return (
		<Card>
			<img src={props.img} />
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<Button
				variant="contained"
				color="Primary"
				onClick={() => {
					selectdigitalpet(props.id);
				}}
			>
				{props.Active ? "Current Pet" : "Select"}
			</Button>
		</Card>
	);
}
