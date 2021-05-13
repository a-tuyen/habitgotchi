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
		balanceCoins: 0,
		UserChallenges: {},
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
	//Function to buy digital pet and update the state
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
			if (pet["pet_id"] == CurrentPet_id) {
				pet["isactive"] = false;
			} else if (pet["pet_id"] == id) {
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

	return { state, buydigitalpet, selectdigitalpet };
}
