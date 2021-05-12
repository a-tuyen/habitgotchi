import { useState, useEffect } from "react";
import axios from "axios";

// custom Hook
export default function useApplicationData() {
	const [state, setState] = useState({
		ActivePet: {},
		Status: {},
		MyPetInventory: [],
		PetShop: [],
		DailyChallenges: {},
		// UserChallenges: {},
		balanceCoins: 0,
	});
	//  uses API to load data from API

	useEffect(() => {
		const digitalPetpromise = axios.get("/api/digitalpet");
		const statusdataPromise = axios.get("/api/statdata");
		const myPetInventorydataPromise = axios.get("/api/mypetinventory");
		const Petshopdatapromise = axios.get("/api/petshop");
		const DailyChallengesPromise = axios.get("/api/dailychallenges");
		// const userChallengesPromise = axios.get("/api/userchallenges");
		const balanceCoinspromise = axios.get("/api/balancecoins");
		Promise.all([
			digitalPetpromise,
			statusdataPromise,
			myPetInventorydataPromise,
			Petshopdatapromise,
			DailyChallengesPromise,
			// userChallengesPromise,
			balanceCoinspromise,
		]).then((all) => {
			setState((prev) => ({
				...prev,
				ActivePet: all[0].data.message,
				Status: all[1].data.message,
				MyPetInventory: all[2].data.message,
				PetShop: all[3].data.message,
				DailyChallenges: all[4].data.message,
				// UserChallenges: all[5].data.message,
				balanceCoins: parseInt(all[5].data.message.sum),
			}));
		});
	}, []);

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
	return { state, buydigitalpet };
}
