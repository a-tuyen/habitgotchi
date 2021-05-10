import React, { Component } from "react";
import "./styles/App.css";
import useApplicationData from "../hooks/useApplicationData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import PetShopPage from "../pages/PetShopPage";
import { ThemeProvider } from "@material-ui/styles";
export default function App(props) {
	const { state } = useApplicationData();
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={DashboardPage}>
						<ThemeProvider>
							<DashboardPage
								Activepet={state.ActivePet}
								Status={state.Status}
							/>
						</ThemeProvider>
					</Route>
					<Route exact path="/mypetinventory" component={InventoryPage}>
						<ThemeProvider>
							<InventoryPage myPetInventory={state.MyPetInventory} />
						</ThemeProvider>
					</Route>
					<Route exact path="/petshop" component={PetShopPage}>
						<ThemeProvider>
							<PetShopPage PetInventory={state.PetShop}></PetShopPage>
						</ThemeProvider>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
