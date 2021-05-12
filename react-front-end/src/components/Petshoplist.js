import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles/mypetlist.scss";

import PetShopListItem from "./PetShopListItem";
import { getThemeProps } from "@material-ui/styles";

// Petist Component which lists Pets
export default function Petshoplist(props) {
	const List = props.PetInventory.map((pet, index) => (
		<PetShopListItem
			key={index}
			id={pet.id}
			name={pet.name}
			description={pet.description}
			img={pet.img}
			coins={pet.coins}
			purchased={pet.purchased}
		/>
	));
	return <Grid column={2}>{List}</Grid>;
}
