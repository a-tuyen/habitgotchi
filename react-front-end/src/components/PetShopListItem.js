import React from "react";
import { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import BuyContext from "./BuyContext.js";

export default function PetShopListItem(props) {
	const data = props.purchased ? "Sold" : "Buy";
	const buydigitalpet = useContext(BuyContext);

	return (
		<Card>
			<img src={props.img} />
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<Button variant="contained" color="primary" disableElevation>
				{props.coins} coins
			</Button>
			{props.purchased && (
				<Button variant="contained" color="black">
					{data}
				</Button>
			)}
			{!props.purchased && (
				<Button
					variant="contained"
					color="primary"
					onClick={(event) => {
						buydigitalpet(props.coins, props.id);
					}}
				>
					{data}
				</Button>
			)}
		</Card>
	);
}
