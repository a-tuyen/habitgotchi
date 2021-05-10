import { useState, useEffect } from "react";
import axios from "axios";

// custom Hook
export default function useApplicationData() {
	const [state, setState] = useState({
		ActivePet: {},
		Status: {},
		MyPetInventory: [],
	});
	//  uses API to load data from API

	useEffect(() => {
		const digitalPetpromise = axios.get("/api/digitalpet");
		const statusdataPromise = axios.get("/api/statdata");
		const myPetInventorydataPromise = axios.get("/api/mypetinventory");
		Promise.all([
			digitalPetpromise,
			statusdataPromise,
			myPetInventorydataPromise,
		]).then((all) => {
			setState((prev) => ({
				...prev,
				ActivePet: all[0].data.message,
				Status: all[1].data.message,
				MyPetInventory: all[2].data.message,
			}));
		});
	}, []);
	return { state };
}
