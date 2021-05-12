import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import ChallengeContext from "../components/ChallengeContext";
// import DailyChallengesList from "../components/DailyChallengesList"


export default function DailyChallengesPage() {
	// console.log('DailyChallengeprops:', props.dailyChallenges);
	// console.log('props.stepcount:', props.dailyChallenges.step_count);
  const dailyChallenges = useContext(ChallengeContext)
  console.log('dailyChall:', dailyChallenges.DailyChallenges)
  const getChallenges = (data) => {
    console.log('data:', data)
    // console.log('data:', data.DailyChallenges.length)
    if (data.DailyChallenges.length) {
      console.log('datalengthinside:', data.DailyChallenges.length)
      return data.DailyChallenges.map(item => {
        return <div>{item.step_goal}</div>
      })
    }
  }
  // const Arr = Object.entries(props.dailyChallenges)
	return (
    <div>
      <Nav />
     {/* <h1>{dailyChallenges.step_goal}</h1> */}
        {getChallenges(dailyChallenges)}
    </div>

  );
  }