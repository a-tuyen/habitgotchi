import React from "react";
import Petshoplist from "../components/Petshoplist";
import Nav from "../components/Nav";
import { makeStyles } from "@material-ui/core/styles";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	coins: {
		backgroundColor: "white",
		padding: "0.5em",
		borderRadius: "2rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minWidth: "90px",
		maxHeight: "30px",
	},
}));

export default function PetShopPage(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Nav />
			<header className={classes.header}>
				<h1>Pet Shop</h1>
				<div className={classes.coins}>
					<MonetizationOnRoundedIcon
						style={{ paddingRight: "0.25em", color: "#FCD200" }}
					/>
					<p>{props.coins} Coins</p>
				</div>
			</header>
			<div className={classes.content}>
				<Petshoplist PetInventory={props.PetInventory} />
			</div>
		</div>
	);
}
