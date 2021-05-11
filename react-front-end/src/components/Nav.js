import React from "react";
import { AppBar, Toolbar, Typography, Link} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PetsIcon from '@material-ui/icons/Pets';

//Stylesheet
import "./styles/Nav.scss";

export default function Nav() {
	return (
		<AppBar position="static" className="nav-bar">
			<Toolbar className="nav-bar--container">
        <span className="app-name">
          {/* <PetsIcon/> */}
          <h3>HabitGotchi</h3>
          {/* <Typography variant="h3">HabitGotchi</Typography> */}
        </span>
				<MenuIcon />
			</Toolbar>
		</AppBar>
	);
}
