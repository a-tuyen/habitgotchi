import React, { useState } from "react";
import { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import BuyContext from "./BuyContext.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
	},
	img: {
		height: "20vh",
		// padding: "2em",
	},
	button: {
		// backgroundColor: "#2B7A78",
    // backgroundColor: "#2B7A78",
		fontFamily: "Quicksand",
		// color: "white",
		marginLeft: "50px",
		// padding: "1em, 2em, 2em, 1em",
    // paddingTop: "1em", 
    paddingRight: "2em",
    // paddingBottom: "1em",
    paddingLeft: "2em",
		borderRadius: "1.5rem",
    fontWeight: "bolder"
	},
	price: {
		backgroundColor: "#20B2AA",
		paddingRight: "1em",
		paddingLeft: "1em",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
		borderRadius: "1.5rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
    color: "white"
	},
	footer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
    marginTop: "20px"
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
					<MonetizationOnRoundedIcon style={{ paddingRight: "0.25em", color: "#FCD200" }} />
					<p>{props.coins} coins</p>
				</div>
				{props.purchased && (
					<Button 
          className={classes.button}
          variant="outlined"
          color="secondary" 
          background-color="transparent"
          border= "2.5px solid"
          >
						{data}
					</Button>
				)}
				{!props.purchased && (
					<Button
						className={classes.button}
						variant="contained"
            color="primary"
						onClick={() => buy()}
					>
						{data}
					</Button>
				)}

				<AlertPet
					trigger={trigger}
					title="Insufficient Coins !"
					message="You have insufficient coins. Complete your goals or challenges to gain more coins"
					buttonMessage="OK"
					setTrigger={SetTrigger}
				/>
			</footer>
		</Card>
	);
}
