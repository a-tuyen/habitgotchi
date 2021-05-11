import React, { Component } from "react";
import "./styles/App.css";
import useApplicationData from "../hooks/useApplicationData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import PetShopPage from "../pages/PetShopPage";
import DailyChallengesPage from "../pages/DailyChallengesPage";
import UserChallengesPage from "../pages/UserChallengesPage";

import { ThemeProvider } from "@material-ui/styles";
export default function App(props) {
	const { state } = useApplicationData();
	console.log('STATE!!', state)

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
					<Route exact path="/dailychallenges" component={DailyChallengesPage}>
						<ThemeProvider>
							<DailyChallengesPage dailyChallenges={state.DailyChallenges[0]}></DailyChallengesPage>
						</ThemeProvider>
					</Route>
					{/* <Route exact path="/userchallenges" component={UserChallengesPage}>
						<ThemeProvider>
							<UserChallengesPage userChallenges={state.UserChallenges} />
						</ThemeProvider>
					</Route> */}
				</Switch>
			</Router>
		</div>
	);
}
