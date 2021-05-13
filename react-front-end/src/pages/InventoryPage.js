import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MyPetlist from "../components/MyPetList";
import Nav from "../components/Nav";
export default function InventoryPage(props) {
	return (
		<div>
			<Nav />
			<h1>My Inventory</h1>
			<MyPetlist myPetInventory={props.myPetInventory} />
		</div>
	);
}
