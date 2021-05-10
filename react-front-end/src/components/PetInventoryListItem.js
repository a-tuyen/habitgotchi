import React from "react";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

export default function PetInventoryListItem(props) {
	// const { name, img, description } = props;
	return (
		// <Card>
    //   <CardHeader
    //     name
		// 	<CardMedia style={{ height: "150px" }} image={props.Activepet.img} />
		// 	<Typography>{props.Activepet.name}</Typography>
		// </Card>
    <Grid item xs={6} sm={4}>
      <Typography variant="h2">
        {props.name}
      </Typography>
      <img src={props.img}/>
      <Typography variant="subtitle1">
        {props.description}
      </Typography>
    </Grid>
	);
}

// Info wanted from props:
// Name, Image, Description