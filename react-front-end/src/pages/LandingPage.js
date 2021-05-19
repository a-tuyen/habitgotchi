import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { AppBar, Toolbar } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
	},
	img: {
		height: "25vh",
		backgroundColor: "white",
		borderRadius: "25%",
		padding: "2.5em",
		marginBottom: "20px",
	},
	button: {
		backgroundColor: "#3f51b5",
		color: "white",
		fontFamily: "Quicksand",
		padding: "0.75em",
		borderRadius: "1.5rem",
		marginTop: "35px",
		width: "100px",
	},
	h1: {
		textAlign: "center",
	},
}));

export default function LandingPage(props) {
	const classes = useStyles();

	return (
		<>
			<AppBar position="fixed" className="nav-bar">
				<Toolbar className="nav-bar--container">
					<span className="app-name">
						<h3>
							<Link
								to="/Dashboard"
								style={{
									color: "white",
									fontSize: "30px",
									fontFamily: "Quicksand",
									fontWeight: 700
								}}
							>
								{" "}
								<span className="app-logo">
									<PetsIcon />
								</span>
								HabitGotchi
							</Link>
						</h3>
					</span>
				</Toolbar>
			</AppBar>
			<div className={classes.root}>
				<h1 className={classes.h1}>Welcome to HabitGotchi!</h1>
				<img
					className={classes.img}
					src="https://github.com/a-tuyen/habitgotchi/blob/master/docs/pets/051-lion.png?raw=true"
					alt=" "
				></img>
				<h3>Let's get started!</h3>

				<Link to="/Dashboard" style={{ color: "white" }}>
					<Button className={classes.button} variant="contained">
						Login
					</Button>
				</Link>

				<Button className={classes.button} variant="contained">
					<Link to="/questionsform" style={{ color: "white" }}>
						Register
					</Link>
				</Button>
			</div>
		</>
	);
}
