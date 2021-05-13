import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";

export default function DailyChallengesPage(props) {
	console.log("UserChallengeprops:", props);

	return (
		<div>
			<Nav />
			<p>This is the User Challenge Page</p>
		</div>
	);
}
