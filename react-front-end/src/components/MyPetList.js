import React from "react";

import MyPetInventoryListItem from "./myPetInventoryListItem";

// Petlist Component which lists Pets
export default function MyPetlist(props) {
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

	return <div>{List}</div>;
}
