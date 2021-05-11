import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import ChallengeContext from "../components/challengecontext";
// import DailyChallengesList from "../components/DailyChallengesList"


export default function DailyChallengesPage() {
	// console.log('DailyChallengeprops:', props.dailyChallenges);
	// console.log('props.stepcount:', props.dailyChallenges.step_count);
  const dailyChallenges = useContext(ChallengeContext)
  console.log('dailyChall:', dailyChallenges.DailyChallenges.step_goal)
  // const Arr = Object.entries(props.dailyChallenges)
	return (
    <div>
      <Nav />
     {/* <h1>{dailyChallenges.step_goal}</h1> */}
         
    </div>

  );
  }