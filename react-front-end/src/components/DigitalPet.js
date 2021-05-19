import React from "react";
import Card from "@material-ui/core/Card";

import "./styles/Digitalpet.scss";

export default function DigitalPet(props) {
	function digitalPet() {
		if (props.Activepet) {
			return (
				<Card className="pet">
					<img
						src={props.Activepet.img}
						className="digipet-img"
						alt="digital-pet"
					></img>
					<h1>{props.Activepet.name}</h1>
				</Card>
			);
		}
	}

	return <div>{digitalPet()}</div>;
}
