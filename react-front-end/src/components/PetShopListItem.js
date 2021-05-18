import React, { useState } from "react";
import { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import BuyContext from "./BuyContext.js";
import { makeStyles } from "@material-ui/core/styles";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import AlertPet from "../components/AlertPet";

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
		backgroundColor: "white"
	},
	img: {
		height: "20vh",
		// padding: "2em",
	},
	button: {
		backgroundColor: "#7B68EE",
		fontFamily: "Quicksand",
		color: "white",
		marginLeft: "50px",
		paddingTop: "1em",
		paddingBottom: "1em",
		paddingRight: "2rem",
		paddingLeft: "2rem",
		borderRadius: "1.5rem",
	},
	price: {
		backgroundColor: "#3CB371",
		color: "white",
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
	const [trigger, SetTrigger] = useState(false);
	const data = props.purchased ? "Sold" : "Buy";
	const buydigitalpet = useContext(BuyContext);
	const classes = useStyles();
	function buy() {
		const abletobuy = buydigitalpet(props.coins, props.id);

		if (!abletobuy) {
			SetTrigger(true);
		}
	}

	return (
		<Card className={classes.root}>
			<img src={props.img} className={classes.img} />
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<footer className={classes.footer}>
				<div className={classes.price}>
					<MonetizationOnRoundedIcon style={{ paddingRight: "0.25em", color: "#FFC145"}} />
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
						onClick={() => buy()}
					>
						{data}
					</Button>
				)}

				<AlertPet
					trigger={trigger}
					title="Insufficient Coins!"
					message="You do not have enough coins. Complete your goals or challenges to earn more coins"
					buttonMessage="OK"
					setTrigger={SetTrigger}
				/>
			</footer>
		</Card>
	);
}
