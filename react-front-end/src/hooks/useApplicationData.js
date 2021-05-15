import { useState, useEffect, React } from "react";
import axios from "axios";
import PageAlert from "../components/PageAlert";
// custom Hook
export default function useApplicationData() {
	const [state, setState] = useState({
		ActivePet: {},
		// Status: {},
		MyPetInventory: [],
		PetShop: [],
		DailyChallenges: {},
		balanceCoins: 0,
		UserChallenges: {},
		acceptedchallenges: 0,
	});

	//  uses API to load data from API
	useEffect(() => {
		const digitalPetpromise = axios.get("/api/digitalpet");
		// const statusdataPromise = axios.get("/api/statdata");
		const myPetInventorydataPromise = axios.get("/api/mypetinventory");
		const Petshopdatapromise = axios.get("/api/petshop");
		const DailyChallengesPromise = axios.get("/api/dailychallenges");
		const userChallengesPromise = axios.get("/api/userchallenges");
		const balanceCoinspromise = axios.get("/api/balancecoins");
		Promise.all([
			digitalPetpromise,
			// statusdataPromise,
			myPetInventorydataPromise,
			Petshopdatapromise,
			DailyChallengesPromise,
			userChallengesPromise,
			balanceCoinspromise,
		]).then((all) => {
			setState((prev) => ({
				...prev,
				ActivePet: all[0].data.message,
				// Status: all[1].data.message,
				MyPetInventory: all[1].data.message,
				PetShop: all[2].data.message,
				DailyChallenges: all[3].data.message,
				UserChallenges: all[4].data.message,
				balanceCoins: parseInt(all[5].data.message.sum),
			}));
		});
	}, []);
	// let Value = 100;

	// setInterval(() => {
	// 	const statusdataPromise = axios.get("/api/statdata");
	// 	statusdataPromise.then((result) =>
	// 		setStatus((prev) => ({
	// 			...prev,
	// 			calories: result.data.result.calories,
	// 			sleep: result.data.result.sleep,
	// 			steps: result.data.result.steps,
	// 			water: result.data.result.water,
	// 		}))
	// 	);
	// }, 8000);
	// Function to buy digital pet and update the state
	function buydigitalpet(itemcoins, id) {
		if (itemcoins < parseInt(state.balanceCoins)) {
			const balanceCoins = state.balanceCoins - itemcoins;
			const PetShop = [...state.PetShop];

			const Pet = { ...state.PetShop[id - 1], purchased: true };
			console.log(PetShop);
			// Pet.purchased = true;
			PetShop[id - 1] = Pet;
			const MyPetInventory = [...state.MyPetInventory];
			MyPetInventory.push(Pet);
			console.log(Pet);

			axios.put(`/api/updateShop`, { itemcoins, Pet, id }).then(() =>
				setState((prev) => ({
					...prev,
					PetShop,
					MyPetInventory,
					balanceCoins,
				}))
			);
		} else {
			alert("INSUFFICIENT FUNDS");
		}
	}

	function selectdigitalpet(id) {
		const Currentpet = { ...state.ActivePet };
		const CurrentPet_id = Currentpet.pet_id;
		const ActivePet = Currentpet;
		const MyPetInventory = [...state.MyPetInventory];
		for (const pet of MyPetInventory) {
			//finds the Pet
			if (pet["pet_id"] === CurrentPet_id) {
				pet["isactive"] = false;
			} else if (pet["pet_id"] === id) {
				pet["isactive"] = true;
				ActivePet.name = pet["name"];
				ActivePet.img = pet["img"];
				ActivePet.pet_id = pet["pet_id"];
			}
		}
		console.log(ActivePet);

		axios.put(`/api/digitalpet1`, { CurrentPet_id, id }).then(() =>
			setState((prev) => ({
				...prev,
				MyPetInventory,
				ActivePet,
			}))
		);
	}

	function updateDailyChall(formData) {
		// console.log("STATE:", state.DailyChallenges);
		// console.log("FORM:",formData);
		console.log("STATE!!!", state);
		const DailyChallenge = { ...state.DailyChallenges[0] };
		// console.log("STATEDAILY:", DailyChallenges);
		DailyChallenge.step_goal = parseInt(formData.steps_goal);
		DailyChallenge.water_goal = parseInt(formData.water_goal);
		DailyChallenge.active_min_goal = parseInt(formData.active_min_goal);

		const DailyChallenges = [...state.DailyChallenges];
		DailyChallenges[0] = DailyChallenge;
		// console.log('DC', DailyChallenges)

		axios.put(`/api/dailychallenges`, { formData }).then(
			(result) =>
				setState((prev) => ({
					...prev,
					DailyChallenges,
				}))

			// console.log("Result from server",result)
		);
	}
	function acceptChallenge() {
		const acceptchallenge = 1;

		setState((prev) => ({
			...prev,
			acceptedchallenges: acceptchallenge,
		}));

		console.log("Afteraccepting", state);
	}
	function taskcompleted(coins) {
		// alert("Collect Coins");
		console.log(state.DailyChallenges[0]);
		state.DailyChallenges[0].completed = true;
		console.log(coins);
		state.balanceCoins += coins;
	}

	return {
		state,
		buydigitalpet,
		selectdigitalpet,
		updateDailyChall,
		acceptChallenge,
		taskcompleted,
	};
}
