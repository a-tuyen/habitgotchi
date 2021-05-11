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
		UserChallenges: {}
	});
	//  uses API to load data from API

// 	useEffect(() => {
// 		const digitalPetpromise = axios.get("/api/digitalpet");
// 		const statusdataPromise = axios.get("/api/statdata");
// 		const myPetInventorydataPromise = axios.get("/api/mypetinventory");
// 		const Petshopdatapromise = axios.get("/api/petshop");
// 		const DailyChallengesPromise = axios.get("/api/dailychallenges");
// 		const userChallengesPromise = axios.get("/api/userchallenges")
// 		Promise.all([
// 			digitalPetpromise,
// 			statusdataPromise,
// 			myPetInventorydataPromise,
// 			Petshopdatapromise,
// 			DailyChallengesPromise,
// 			userChallengesPromise
// 		]).then((all) => {
// 			console.log('ALL', all[4].data.message)
// 			setState((prev) => ({
// 				...prev,
// 				ActivePet: all[0].data.message,
// 				Status: all[1].data.message,
// 				MyPetInventory: all[2].data.message,
// 				PetShop: all[3].data.message,
// 				DailyChallenges: all[4].data.message,
// 				UserChallenges: all[5].data.message
// 			}));
// 			console.log('ALL', all[4].data.message)
// 		});
// 	}, []);
// 	console.log('STATE:', state)
// 	return { state };
// }

useEffect(() => {
	const digitalPetpromise = axios.get("/api/digitalpet");
	const statusdataPromise = axios.get("/api/statdata");
	const myPetInventorydataPromise = axios.get("/api/mypetinventory");
	const Petshopdatapromise = axios.get("/api/petshop");
	const DailyChallengesPromise = axios.get("/api/dailychallenges");

	Promise.all([
			digitalPetpromise,
			statusdataPromise,
			myPetInventorydataPromise,
			Petshopdatapromise,
			DailyChallengesPromise,

	]).then((all) => {
		console.log("ALL:", all[4].data.message)
			setState((prev) => ({
					...prev,
					ActivePet: all[0].data.message,
					Status: all[1].data.message,
					MyPetInventory: all[2].data.message,
					PetShop: all[3].data.message,
					DailyChallenges: all[4].data.message,

			}))
			
	});
}, []);

	return { state };
}
