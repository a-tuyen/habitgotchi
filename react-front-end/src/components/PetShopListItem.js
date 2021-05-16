import React from "react";
import { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import BuyContext from "./BuyContext.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: "2vh",
		padding: "5em",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "2em",
		// minHeight: "3vh",
		borderRadius: "2rem",
    // maxHeight: "25vh",
    // Width: "80vw"
	},
	img: {
		height: "20vh",
		// padding: "2em",
	},
	button: {
		backgroundColor: "#2B7A78",
		fontFamily: "Quicksand",
		color: "white",
		marginLeft: "50px",
		padding: "0.75em",
		borderRadius: "1.5rem",
	},
	price: {
		backgroundColor: "#DEF2F1",
		// padding: "0.75em",
		paddingRight: "1em",
		paddingLeft: "1em",
		borderRadius: "1.5rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	footer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

export default function PetShopListItem(props) {
	const data = props.purchased ? "Sold" : "Buy";
	const buydigitalpet = useContext(BuyContext);
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<img src={props.img} className={classes.img} />
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<footer className={classes.footer}>
				<div className={classes.price}>
					<MonetizationOnRoundedIcon style={{ paddingRight: "0.25em" }} />
					<p>{props.coins} coins</p>
				</div>
				{props.purchased && (
					<Button variant="contained" className={classes.button}>
						{data}
					</Button>
				)}
				{!props.purchased && (
					<Button
						className={classes.button}
						variant="contained"
						onClick={(event) => {
							buydigitalpet(props.coins, props.id);
						}}
					>
						{data}
					</Button>
				)}
			</footer>
		</Card>
	);
}
