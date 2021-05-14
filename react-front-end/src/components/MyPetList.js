import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles/mypetlist.scss";
import MyPetInventoryListItem from "./myPetInventoryListItem";

// Petist Component which lists Pets
export default function MyPetlist(props) {
	console.log(props);
	const List = props.myPetInventory.map((pet, index) => (
		<MyPetInventoryListItem
			key={index}
			id={pet.pet_id}
			name={pet.name}
			description={pet.description}
			img={pet.img}
			Active={pet.isactive}
		/>
	));
	return (
		<Grid className="list">
			{List}
		</Grid>
	);
}
