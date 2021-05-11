import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import useApplicationData from "../hooks/useApplicationData";
// import {Link} from 'react-router-dom';

//Stylesheet
import "./styles/Nav.scss";
// import DashboardPage from "../pages/DashboardPage";

export default function Nav() {

	return (
		<AppBar position="static" className="nav-bar">
			<Toolbar className="nav-bar--container">
				<Typography>HabitGotchi</Typography>
				<MenuIcon />
			</Toolbar>
		</AppBar>
	);
}
