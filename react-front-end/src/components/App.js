// Libraries
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Style sheet
import "./styles/App.scss";

// Helpers
import useApplicationData from "../hooks/useApplicationData";
import BuyContext from "./BuyContext";

//Pages
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import PetShopPage from "../pages/PetShopPage";
import DailyChallengesPage from "../pages/DailyChallengesPage";
import UserChallengesPage from "../pages/UserChallengesPage";

// Questionnaire
import QuestionSteps from "../pages/QuestionSteps";
import QuestionWater from "../pages/QuestionWater";
import QuestionActiveMin from "../pages/QuestionActiveMin";
import ChallengeContext from "./ChallengeContext";

export default function App() {
	const { state, buydigitalpet } = useApplicationData();

	console.log(state.balanceCoins);
	return (
		<Fragment>
			<Router>
				<Switch>
        <Route exact path="/" component={DashboardPage}>
							<DashboardPage
								Activepet={state.ActivePet}
								Status={state.Status}
							/>
					</Route>
					<Route exact path="/mypetinventory" component={InventoryPage}>
							<InventoryPage myPetInventory={state.MyPetInventory} />
					</Route>
					<Route exact path="/userchallenges" component={UserChallengesPage}>
							<UserChallengesPage userChallenges={state.UserChallenges} />
					</Route>
					<Route exact path="/questionsteps" component={QuestionSteps}>
							<QuestionSteps />
					</Route>
					<Route exact path="/questionwater" component={QuestionWater}>
							<QuestionWater />
					</Route>
					<Route exact path="/questionactive" component={QuestionActiveMin}>
							<QuestionActiveMin />
						<DashboardPage Activepet={state.ActivePet} Status={state.Status} />
					</Route>
					<ChallengeContext.Provider value={state}>
					<Route exact path="/dailychallenges" component={DailyChallengesPage}>
							<DailyChallengesPage></DailyChallengesPage>
					</Route>
					</ChallengeContext.Provider>
					<BuyContext.Provider value={buydigitalpet}>
						<Route exact path="/petshop" component={PetShopPage}>
							<PetShopPage
								PetInventory={state.PetShop}
								coins={state.balanceCoins}
							></PetShopPage>
						</Route>
					</BuyContext.Provider>
					
				</Switch>
			</Router>
		</Fragment>
	);
}
