import { useState, useEffect } from "react";
import axios from "axios";
export default function useStatData() {
	const [status, setStatus] = useState({
		calories: 33,
		sleep: 7,
		steps: 7128,
		water: 4,
		heart_rate: 73,
		active_min: 10,
	});
	useEffect(() => {
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
						heart_rate: result.data.result.heart_rate,
						active_min: result.data.result.active_min,
					}))
				);
			}, 70000);
		}

		return fetchData();
	}, []);
	return { status };
}
