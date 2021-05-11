import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import DailyChallengesList from "../components/DailyChallengesList";
import DailyChallengesListItem from "../components/DailyChallengesListItem";


export default function DailyChallengesPage(props) {
	console.log('UserChallengeprops:', props);

  

	return (
    <div>
      <Nav />
      <p>This is the User Challenge Page</p>

    </div>

  );
  }