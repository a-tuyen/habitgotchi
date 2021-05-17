import React from "react";
import Card from "@material-ui/core/Card";

import "./styles/Digitalpet.scss";

export default function DigitalPet(props) {
	return (
		<Card className="pet">
			{/* <div className="bg"></div> */}
			<img src={props.Activepet.img} className="digipet-img"></img>
			<h1>{props.Activepet.name}</h1>
		</Card>
	);
}
