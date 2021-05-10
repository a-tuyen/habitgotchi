import React, { Component } from "react";
import "./styles/App.css";
import useApplicationData from "../hooks/useApplicationData";
import DashboardPage from "../pages/DashboardPage";

export default function App(props) {
	const { state } = useApplicationData();
	return (
		<div className="App">
			<DashboardPage Activepet={state.ActivePet} Status={state.Status} />
		</div>
	);
}
