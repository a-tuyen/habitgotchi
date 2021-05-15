import React from "react";
import Nav from "../components/Nav";
import ChallengeAlert from "../components/ChallengeAlert";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
	},
  img: {
    height: "25vh",
    padding: "4em",
    backgroundColor: "#DEF2F1",
    borderRadius: "25%",
    padding: "2.5em",
    marginBottom: "20px"
  },
  button: {
    backgroundColor: "#2B7A78",
    color:"white",
    fontFamily: "Quicksand",
    padding: "0.75em",
    borderRadius: "1.5rem",
    marginTop: "35px",
    width: "100px",
  }
}));

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <>
    <AppBar position="static" className="nav-bar">
			<Toolbar className="nav-bar--container">
        <span className="app-name">
          <h3>
            <Link to="/"> <span className="app-logo"><PetsIcon /></span>HabitGotchi</Link>
            </h3>
          {/* <Typography variant="h3">HabitGotchi</Typography> */}
        </span>			  
            </Toolbar>
    </AppBar>
      <div className={classes.root}>
        <h1>Welcome to HabitGotchi!</h1>
        <img className={classes.img} src='https://github.com/a-tuyen/habitgotchi/blob/master/docs/pets/051-lion.png?raw=true'></img>
        <h3>Let's get started!</h3>
        <Button
          className={classes.button}
          variant="contained"
        >
          <Link to="/" style={{ color: "white" }}>Login</Link>
        </Button>
        <Button
          className={classes.button}
          variant="contained"
        >
          <Link to="/questionsform" style={{ color: "white" }}>Register</Link>
        </Button>
      </div>
    </>
  )
}
