import React, { Component } from "react";
import "./styles/App.css";
import useApplicationData from "../hooks/useApplicationData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import PetShopPage from "../pages/PetShopPage";
import MyContext from "./MyContext";

export default function App() {
	const { state, buydigtalpet } = useApplicationData();

	console.log(state.balanceCoins);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={DashboardPage}>
						<DashboardPage Activepet={state.ActivePet} Status={state.Status} />
					</Route>
					<Route exact path="/mypetinventory" component={InventoryPage}>
						<InventoryPage myPetInventory={state.MyPetInventory} />
					</Route>
					<MyContext.Provider value={buydigtalpet}>
						<Route exact path="/petshop" component={PetShopPage}>
							<PetShopPage
								PetInventory={state.PetShop}
								coins={state.balanceCoins}
							></PetShopPage>
						</Route>
					</MyContext.Provider>
				</Switch>
			</Router>
		</div>
	);
}
