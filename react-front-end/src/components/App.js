// Libraries
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Style sheet
import "./styles/App.scss";

// Helpers
import useApplicationData from "../hooks/useApplicationData";
import BuyContext from "./BuyContext";
import SelectContext from "./SelectContext";

//Pages
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import PetShopPage from "../pages/PetShopPage";
import DailyChallengesPage from "../pages/DailyChallengesPage";
import UserChallengesPage from "../pages/UserChallengesPage";

// Questionnaire
import QuestionsForm from "../pages/QuestionsForm";
import QuestionSteps from "../pages/QuestionSteps";
import QuestionWater from "../pages/QuestionWater";
import QuestionActiveMin from "../pages/QuestionActiveMin";
import ChallengeContext from "./ChallengeContext";
import QuestionsContext from "./QuestionsContext";



export default function App() {
	const { state, buydigitalpet, selectdigitalpet, updateDailyChall } = useApplicationData();

	console.log(state.balanceCoins);
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/" component={DashboardPage}>
						<DashboardPage Activepet={state.ActivePet} Status={state.Status} />
					</Route>
					<Route exact path="/mypetinventory" component={InventoryPage}>
						<SelectContext.Provider value={selectdigitalpet}>
							<InventoryPage myPetInventory={state.MyPetInventory} />
						</SelectContext.Provider>
					</Route>
					<Route exact path="/userchallenges" component={UserChallengesPage}>
						<UserChallengesPage userChallenges={state.UserChallenges} />
					</Route>
					<Route exact path="/questionsform" component={QuestionsForm}>
						<QuestionsContext.Provider value={updateDailyChall}>
							<QuestionsForm />
						</QuestionsContext.Provider>
					</Route>
					{/* <Route exact path="/questionsteps" component={QuestionSteps}>
							<QuestionSteps />
					</Route> */}
					{/* <Route exact path="/questionwater" component={QuestionWater}>
							<QuestionWater />
					</Route> */}
					{/* <Route exact path="/questionactive" component={QuestionActiveMin}>
							<QuestionActiveMin />
						<DashboardPage Activepet={state.ActivePet} Status={state.Status} />
					</Route> */}
					<Route exact path="/dailychallenges" component={DailyChallengesPage}>
						<ChallengeContext.Provider value={state}>
							<DailyChallengesPage></DailyChallengesPage>
						</ChallengeContext.Provider>
					</Route>

					<Route exact path="/petshop" component={PetShopPage}>
						<BuyContext.Provider value={buydigitalpet}>
							<PetShopPage
								PetInventory={state.PetShop}
								coins={state.balanceCoins}
							></PetShopPage>
						</BuyContext.Provider>
					</Route>
				</Switch>
			</Router>
		</Fragment>
	);
}
