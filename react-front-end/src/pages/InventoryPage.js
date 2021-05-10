import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MyPetlist from "../components/myPetlist";
import Nav from "../components/Nav";

export default function InventoryPage(props) {
	console.log(props.myPetInventory[0]);

	// const getPetInventory = petInventoryObj => {
	//   return <PetInventoryListItem {...petInventoryObj} />;
	// }

	return (
		<div>
			<Nav />
			<Typography variant="h1">My Inventory</Typography>
			{/* Map through each inventory item, not sure how to do it quite yet */}
			<MyPetlist myPetInventory={props.myPetInventory} />
		</div>
	);
}
