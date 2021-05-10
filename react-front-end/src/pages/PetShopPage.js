import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PetShopListItem from "../components/PetShopListItem ";
import Nav from "../components/Nav";

export default function PetShopPage(props) {
	<>
		<Nav />
		<Typography variant="h1">Pet Shop</Typography>
		<Typography variant="subtitle2">{/* how to get user coins  */}</Typography>
		<Grid container direction="column" spacing={2}>
			{/* Map through each pet item, not sure how to do it quite yet */}
		</Grid>
	</>;
}

//Want to also display user coins
