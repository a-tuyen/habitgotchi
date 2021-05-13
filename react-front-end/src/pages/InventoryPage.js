import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MyPetlist from "../components/MyPetList";
import Nav from "../components/Nav";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		// width: "80%",
		// maxWidth: "80%",
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
		// marginTop: "2vh",
		// padding: "5em",
	},
}));

export default function InventoryPage(props) {
  const classes = useStyles();
	return (
		<div>
			<Nav />
        <div className={classes.root}>
          <h1>My Inventory</h1>
          <MyPetlist myPetInventory={props.myPetInventory} className={classes.root} />
        </div>
		</div>
	);
}
