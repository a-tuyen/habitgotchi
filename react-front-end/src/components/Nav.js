import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
		<AppBar position="fixed" className="nav-bar">
			<Toolbar className="nav-bar--container">
				<span className="app-name">
					<h3>
						<Link
							to="/Dashboard"
							style={{
								color: "white",
								fontSize: "30px",
								fontWeight: "700",
								fontFamily: "Quicksand",
							}}
						>
							{" "}
							<span className="app-logo">
								<PetsIcon />
							</span>
							HabitGotchi
						</Link>
					</h3>
					{/* <Typography variant="h3">HabitGotchi</Typography> */}
				</span>
				<Button
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<MenuIcon style={{ color: "white" }} />
				</Button>

				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<Link to="/Dashboard">
						<MenuItem onClick={handleClose}>
							<p>Home</p>
						</MenuItem>
					</Link>
					<Link to="/dailychallenges">
						<MenuItem onClick={handleClose}>
							<p>Daily Challenges</p>
						</MenuItem>
					</Link>
					<Link to="/mypetinventory">
						<MenuItem onClick={handleClose}>
							<p>My Pets</p>
						</MenuItem>
					</Link>
					<Link to="/questionsform">
						<MenuItem onClick={handleClose}>
							<p>Questionnaire</p>
						</MenuItem>
					</Link>
					<Link to="/petshop">
						<MenuItem onClick={handleClose}>
							<p>Pet Shop</p>
						</MenuItem>
					</Link>
					<Link to="/">
						<MenuItem onClick={handleClose}>
							<p>Logout</p>
						</MenuItem>
					</Link>
				</Menu>
			</Toolbar>
		</AppBar>
	);
}
