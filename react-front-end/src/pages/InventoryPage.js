import React from "react";
import MyPetlist from "../components/MyPetList";
import Nav from "../components/Nav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
	},
}));

export default function InventoryPage(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Nav />
			<div>
				<h1>My Pets</h1>
				<MyPetlist myPetInventory={props.myPetInventory} />
			</div>
		</div>
	);
}
