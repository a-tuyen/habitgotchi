import { useState, useEffect, React } from "react";
import axios from "axios";

// custom Hook
export default function useApplicationData() {
	const [state, setState] = useState({
		ActivePet: {},
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
		const myPetInventorydataPromise = axios.get("/api/mypetinventory");
		const Petshopdatapromise = axios.get("/api/petshop");
		const DailyChallengesPromise = axios.get("/api/dailychallenges");
		const userChallengesPromise = axios.get("/api/userchallenges");
		const balanceCoinspromise = axios.get("/api/balancecoins");

		Promise.all([
			digitalPetpromise,
			myPetInventorydataPromise,
			Petshopdatapromise,
			DailyChallengesPromise,
			userChallengesPromise,
			balanceCoinspromise,
		]).then((all) => {
			setState((prev) => ({
				...prev,
				ActivePet: all[0].data.message,
				MyPetInventory: all[1].data.message,
				PetShop: all[2].data.message,
				DailyChallenges: all[3].data.message,
				UserChallenges: all[4].data.message,
				balanceCoins: parseInt(all[5].data.message.sum),
			}));
		});
	}, []);

	function buydigitalpet(itemcoins, id) {
		if (itemcoins < parseInt(state.balanceCoins)) {
			const balanceCoins = state.balanceCoins - itemcoins;
			const PetShop = [...state.PetShop];
			const Pet = { ...state.PetShop[id - 1], purchased: true };
			PetShop[id - 1] = Pet;
			const MyPetInventory = [...state.MyPetInventory];
			MyPetInventory.push(Pet);
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

		axios.put(`/api/dailychallenges`, { formData }).then((result) =>
			setState((prev) => ({
				...prev,
				DailyChallenges,
			}))
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
		const DailyChallenge = { ...state.DailyChallenges[0] };
		DailyChallenge.completed = true;

		const DailyChallenges = [...state.DailyChallenges];
		DailyChallenges[0] = DailyChallenge;
		console.log(coins);
		const balanceCoins = state.balanceCoins + coins;

		axios.put(`/api/updateCoins`, { coins }).then(
			(result) =>
				setState((prev) => ({
					...prev,
					DailyChallenges,
					balanceCoins,
				}))

			// console.log("Result from server",result)
		);
	}

	function bonustaskcompleted(coins) {
		const UserChallenge = { ...state.UserChallenges[0] };
		UserChallenge.completed = true;
		const UserChallenges = [...state.DailyChallenges];
		UserChallenges[0] = UserChallenge;
		console.log(coins);
		const balanceCoins = state.balanceCoins + coins;
		const acceptedchallenges = 0;

		axios.put(`/api/updateCoins`, { coins }).then((result) =>
			setState((prev) => ({
				...prev,
				UserChallenges,
				balanceCoins,
				acceptedchallenges,
			}))
		);
	}

	return {
		state,
		buydigitalpet,
		selectdigitalpet,
		updateDailyChall,
		acceptChallenge,
		taskcompleted,
		bonustaskcompleted,
	};
}
