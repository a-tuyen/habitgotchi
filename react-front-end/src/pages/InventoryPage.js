import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PetInventoryListItem from "../components/PetInventoryListItem";
import Nav from "../components/Nav";

export default function InventoryPage(props) {
	console.log(props);
	// const getPetInventory = petInventoryObj => {
	//   return <PetInventoryListItem {...petInventoryObj} />;
	// }

	return (
		<>
			<Nav />
			<Typography variant="h1">My Inventory</Typography>
			<Grid container direction="column" spacing={2}>
				{/* Map through each inventory item, not sure how to do it quite yet */}
				<PetInventoryListItem name={props.myPetInventory[0]} />
			</Grid>
		</>
		// <Grid container direction="column" >
		//   <Grid item>
		//     <Nav/>
		//   </Grid>
		//   <Grid item>
		//     <Typography variant="h1">My Inventory</Typography>
		//   </Grid>
		//   <Grid item container spacing={2}>
		//     <Grid item xs={12} sm={6}>
		//       {}
		//     </Grid>
		//   </Grid>
		// </Grid>
	);
}

// 0: {id: 1, name: "Mango", description: "A little empty-headed but will always be loyal to you", required_challenge_count: 0, img: "https://github.com/a-tuyen/habitgotchi/blob/master/docs/pets/051-cat.png?raw=true", …}
// 1: {id: 2, name: "Oreo", description: "Loves knitting cozy sweaters. Wants to try embroidery next", required_challenge_count: 2, img: "https://github.com/a-tuyen/habitgotchi/blob/master/docs/pets/051-siberian-husky.png?raw=true", …}
// 2: {id: 3, name: "Reef", description: "Loves surfing. Favourite tricks: Alley-Oop and the Rodeo Flip", required_challenge_count: 4, img: "https://github.com/a-tuyen/hab
