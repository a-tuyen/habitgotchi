// Libraries
import React, { Fragment, useEffect, useState } from "react";
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

import QuestionsContext from "./QuestionsContext";
import LandingPage from "../pages/LandingPage";

// Questionnaire
import QuestionsForm from "../pages/QuestionsForm";
import QuestionActiveMin from "../pages/QuestionActiveMin";
import ChallengeContext from "./ChallengeContext";
import useStatData from "../hooks/useStatData";
import ChallengeAlert from "./ChallengeAlert";
import ScrollTop from "react-scrolltop-button";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

export default function App() {
	const {
		state,
		buydigitalpet,
		selectdigitalpet,
		updateDailyChall,
		acceptChallenge,
		taskcompleted,
		bonustaskcompleted,
	} = useApplicationData();

	const { status } = useStatData();
	const challengeContext = {
		state,
		status,
		taskcompleted,
		bonustaskcompleted,
	};
	const [trigger, SetTrigger] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			SetTrigger(true);
		}, 50000);
	}, []);

	return (
		<Fragment>
			<Router>
				<ChallengeAlert
					state={state}
					acceptChallenge={acceptChallenge}
					trigger={trigger}
					SetTrigger={SetTrigger}
				/>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route exact path="/Dashboard">
						<DashboardPage
							state={state}
							Activepet={state.ActivePet}
							status={status}
							acceptChallenge={acceptChallenge}
						/>
					</Route>
					<Route exact path="/mypetinventory">
						<SelectContext.Provider value={selectdigitalpet}>
							<InventoryPage myPetInventory={state.MyPetInventory} />
						</SelectContext.Provider>
					</Route>

					<Route exact path="/questionsform">
						<QuestionsContext.Provider value={updateDailyChall}>
							<QuestionsForm />
						</QuestionsContext.Provider>
					</Route>
					<Route exact path="/questionactive">
						<QuestionActiveMin />
					</Route>

					<Route exact path="/dailychallenges">
						<ChallengeContext.Provider value={challengeContext}>
							<DailyChallengesPage />
						</ChallengeContext.Provider>
					</Route>

					<Route exact path="/petshop">
						<BuyContext.Provider value={buydigitalpet}>
							<PetShopPage
								PetInventory={state.PetShop}
								coins={state.balanceCoins}
							></PetShopPage>
						</BuyContext.Provider>
					</Route>
				</Switch>
			</Router>
			<ScrollTop
				text="Go to Top"
				distance={100}
				breakpoint={768}
				style={{ backgroundColor: "#3f51b5", color: "white", border: "none" }}
				// className="scroll-your-role"
				speed={1000}
				target={75}
				icon={<KeyboardArrowUpIcon />}
			/>
		</Fragment>
	);
}
