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
			name={pet.name}
			description={pet.description}
			img={pet.img}
			Active={pet.isactive}
		/>
	));
	return (
		<Grid className="list" column={2}>
			{List}
		</Grid>
	);
}
