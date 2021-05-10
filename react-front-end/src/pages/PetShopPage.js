import React, { Fragment } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Petshoplist from "../components/Petshoplist";
import Nav from "../components/Nav";

export default function PetShopPage(props) {
	return (
		<Fragment>
			<Nav />
			<Typography variant="h1">Pet Shop</Typography>
			<Typography variant="subtitle2">
				<Petshoplist PetInventory={props.PetInventory} />
			</Typography>
		</Fragment>
	);
}

//Want to also display user coins
