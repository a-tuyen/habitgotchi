import React from "react";
// import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
// import { CardMedia } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';

export default function DigitalPet(props) {
	console.log(props);
	return (
		// <Card>
		// 	<CardMedia style={{ height: "150px" }} image={props.Activepet.img} />
		// 	<Typography>{props.Activepet.name}</Typography>
		// </Card>

    <Grid item xs={6} sm={4}>
      <img src={props.img}/>
      <Typography variant="h2">
        {props.name}
      </Typography>
      <Typography variant="subtitle1">
        {props.description}
      </Typography>
      <Typography variant="subtitle1">
        {props.coins}
      </Typography>
      <Button variant="contained">
        <MonetizationOnRoundedIcon/>
        BUY
      </Button>
    </Grid>
	);
}

// Info wanted from Props 
// Name, Description, Coins
// need button for buy