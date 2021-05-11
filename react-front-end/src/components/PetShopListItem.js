import React from "react";
import { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import MyContext from "./MyContext.js";

export default function PetShopListItem(props) {
	const data = props.purchased ? "Sold" : "Buy";
	const buydigitalpet = useContext(MyContext);
	console.log(buydigitalpet);

	return (
		<Card>
			<img src={props.img} />
			<Typography variant="h3">{props.name}</Typography>
			<Typography variant="subtitle1">{props.description}</Typography>
			<Button variant="contained" color="primary" disableElevation>
				{props.coins} coins
			</Button>
			<Button
				variant="contained"
				color="primary"
				onClick={(event) => {
					buydigitalpet(props.coins, props.id);
				}}
			>
				{data}
			</Button>
		</Card>
	);
}
