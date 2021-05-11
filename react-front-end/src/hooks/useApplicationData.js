import { useState, useEffect } from "react";
import axios from "axios";

// custom Hook
export default function useApplicationData() {
	const [state, setState] = useState({
		ActivePet: {},
		Status: {},
		MyPetInventory: [],
		PetShop: [],
		balanceCoins: 0,
	});
	//  uses API to load data from API

	useEffect(() => {
		const digitalPetpromise = axios.get("/api/digitalpet");
		const statusdataPromise = axios.get("/api/statdata");
		const myPetInventorydataPromise = axios.get("/api/mypetinventory");
		const Petshopdatapromise = axios.get("/api/petshop");
		const balanceCoinspromise = axios.get("/api/balancecoins");
		Promise.all([
			digitalPetpromise,
			statusdataPromise,
			myPetInventorydataPromise,
			Petshopdatapromise,
			balanceCoinspromise,
		]).then((all) => {
			setState((prev) => ({
				...prev,
				ActivePet: all[0].data.message,
				Status: all[1].data.message,
				MyPetInventory: all[2].data.message,
				PetShop: all[3].data.message,
				balanceCoins: parseInt(all[4].data.message.sum),
			}));
		});
	}, []);

	function buydigtalpet(itemcoins, id) {
		console.log(itemcoins);
		console.log(id);
		if (itemcoins < parseInt(state.balanceCoins)) {
			const balanceCoins = state.balanceCoins - itemcoins;
			const PetShop = { ...state.PetShop[id], purchased: true };

			return axios
				.put(`/api/Shop/${id}`, { PetShop })
				.then(setState((prev) => ({ ...prev, PetShop, balanceCoins })));
		}
	}
	return { state, buydigtalpet };
}
