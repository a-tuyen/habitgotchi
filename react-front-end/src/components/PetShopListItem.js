import React from "react";
import { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import BuyContext from "./BuyContext.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "80%",
		// marginLeft: "5vw",
		// marginRight: "5vw",
		marginTop: "5vh",
		padding: "5em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2em",
    minHeight: "3vh",
	},
  img: {
    height: "25vh",
    padding: "2em"
  },
  button: {
    backgroundColor: "#2B7A78",
    fontFamily: "Quicksand"
  }
}));

export default function PetShopListItem(props) {
	const data = props.purchased ? "Sold" : "Buy";
	const buydigitalpet = useContext(BuyContext);
  const classes = useStyles();

	return (
		<Card className={classes.root}>
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
