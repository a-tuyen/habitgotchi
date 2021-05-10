import React, { Component } from "react";
import "./styles/App.css";
import useApplicationData from "../hooks/useApplicationData";
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import PetShopPage from "../pages/PetShopPage";

export default function App(props) {
	const { state } = useApplicationData();
	return (
		<div className="App">
			{/* <DashboardPage Activepet={state.ActivePet} Status={state.Status} /> */}
			{/* <InventoryPage myPetInventory={state.MyPetInventory} /> */}

			<PetShopPage PetInventory={state.PetShop}></PetShopPage>
		</div>
	);
}
