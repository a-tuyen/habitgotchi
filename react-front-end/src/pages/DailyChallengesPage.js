import React from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
// import DailyChallengesList from "../components/DailyChallengesList"


export default function DailyChallengesPage(props) {
	console.log('DailyChallengeprops:', props.dailyChallenges);
	// console.log('props.stepcount:', props.dailyChallenges.step_count);

  // const Arr = Object.entries(props.dailyChallenges)
	return (
    <div>
      <Nav />
     {/* <h1>{Arr}</h1> */}
           {/* <DailyChallengesList dailyChallenges={props.dailyChallenges}/> */}
    </div>

  );
  }