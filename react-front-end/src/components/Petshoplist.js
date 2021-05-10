import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles/mypetlist.scss";

import PetShopListItem from "./PetShopListItem";

// Petist Component which lists Pets
export default function MyPetlist(props) {
	console.log(props);
	const List = props.PetInventory.map((pet, index) => (
		<PetShopListItem
			key={index}
			name={pet.name}
			description={pet.description}
			img={pet.img}
			coins={pet.coins}
		/>
	));
	return <Grid column={2}>{List}</Grid>;
}
