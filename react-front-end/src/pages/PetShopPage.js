import React, { Fragment } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Petshoplist from "../components/Petshoplist";
import Nav from "../components/Nav";

export default function PetShopPage(props) {
	console.log(props);

	return (
		<Fragment>
			<Nav />
			<h1>Pet Shop</h1>
			{props.coins} Coins
			<div>
				<Petshoplist PetInventory={props.PetInventory} />
			</div>
		</Fragment>
	);
}

//Want to also display user coins
