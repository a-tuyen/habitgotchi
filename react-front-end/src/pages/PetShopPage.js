import React, { Fragment } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Petshoplist from "../components/Petshoplist";
import Nav from "../components/Nav";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
	},
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
}));

export default function PetShopPage(props) {
	const classes = useStyles();

	return (
		<Fragment>
			<Nav />
      <div className={classes.root}>
        <header className={classes.header}>
          <h1>Pet Shop</h1>
          <p style={{ 
            backgroundColor: "#DEF2F1",
            padding: "0.75em",
            borderRadius: "2rem"
             }}>
              {props.coins} Coins
          </p>
        </header>
        <div>
          <Petshoplist PetInventory={props.PetInventory} />
        </div>
      </div>
		</Fragment>
	);
}

//Want to also display user coins
