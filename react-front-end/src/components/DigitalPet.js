import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import "./styles/Digitalpet.scss";

export default function DigitalPet(props) {
	console.log(props);
	return (
		<Card className="pet">
			{/* <CardMedia img src={props.Activepet.img} /> */}
			{/* <CardMedia
				// style={{ height: "700px", width: "600px" }}
        // className="digipet-img"
				image={props.Activepet.img}
			/> */}
			<img src= {props.Activepet.img} className="digipet-img"></img>
			<h1>{props.Activepet.name}</h1>
		</Card>
	);
}
