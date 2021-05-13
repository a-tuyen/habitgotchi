import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PetsIcon from '@material-ui/icons/Pets';
// import useApplicationData from "../hooks/useApplicationData";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//Stylesheet
import "./styles/Nav.scss";
// import DashboardPage from "../pages/DashboardPage";

export default function Nav() {

	const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	return (
		<AppBar position="static" className="nav-bar">
			<Toolbar className="nav-bar--container">
        <span className="app-name">
          <h3>
            <Link to="/"> <span className="app-logo"><PetsIcon /></span>HabitGotchi</Link>
            </h3>
          {/* <Typography variant="h3">HabitGotchi</Typography> */}
        </span>			
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				<MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/dailychallenges">Daily Challenges</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/mypetinventory">My Pets</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/questionsteps">Questionnaire</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/petshop">Pet Shop</Link></MenuItem>
      </Menu>
            </Toolbar>
    </AppBar>
	);
}

