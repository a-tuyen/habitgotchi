import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

//Stylesheet
import "./styles/Nav.scss";

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
