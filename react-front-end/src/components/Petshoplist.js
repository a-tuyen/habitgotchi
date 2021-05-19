import React from "react";


import PetShopListItem from "./PetShopListItem";

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
	return <>{List}</>;
}
