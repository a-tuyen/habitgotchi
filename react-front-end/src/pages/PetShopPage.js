import React, { Fragment } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Petshoplist from "../components/Petshoplist";
import Nav from "../components/Nav";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
	},
  // content: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coins: {
    backgroundColor: "#DEF2F1",
		padding: "0.5em",
		borderRadius: "2rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
    minWidth: "90px",
    maxHeight: "30px",
    // backgroundImage: `url("https://via.placeholder.com/500")` 
  }
}));

export default function PetShopPage(props) {
	const classes = useStyles();

	return (
    <div className={classes.root}>
      <Nav />
      <header className={classes.header}>
        <h1>Pet Shop</h1>
        <div className={classes.coins}>
          <MonetizationOnRoundedIcon style={{ paddingRight: "0.25em", color: "#FFC145"}} />
          <p>{props.coins} Coins</p>
        </div>
      </header>
      <div className={classes.content}>
        <Petshoplist PetInventory={props.PetInventory} />
      </div>
    </div>
	);
}
