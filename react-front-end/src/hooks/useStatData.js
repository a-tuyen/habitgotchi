import { useState, useEffect } from "react";
import axios from "axios";
export default function useStatData() {
	const [status, setStatus] = useState({
		calories: 10,
		sleep: 7,
		steps: 10,
		water: 1,
	});
	useEffect(() => {
		// const fetchData = setInterval(() => {
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

		function fetchData() {
			setInterval(() => {
				const statusdataPromise = axios.get("/api/statdata");
				statusdataPromise.then((result) =>
					setStatus((prev) => ({
						...prev,
						calories: result.data.result.calories,
						sleep: result.data.result.sleep,
						steps: result.data.result.steps,
						water: result.data.result.water,
					}))
				);
			}, 60000);
		}

		return fetchData();
	}, []);

	return { status };
}
