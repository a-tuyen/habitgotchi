import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav";
import ChallengeContext from "../components/ChallengeContext";
// import DailyChallengesList from "../components/DailyChallengesList"


export default function DailyChallengesPage() {

  const dailyChallenges = useContext(ChallengeContext)
  const userChallenges = useContext(ChallengeContext)

  const getChallenges = (data) => {

    if (data.DailyChallenges.length) {
      return data.DailyChallenges.map(item => {
        return (
          <p>
          Do {item.step_goal} Steps <br></br>
          Drink {item.water_goal} cups of water <br></br>
          Complete {item.active_min_goal} Active Minutes <br></br>
          Complete all three goals to earn {item.coins} coins!
          </p>
        )
      })
    }
  }

  const getUserChallenges = (data) => {

    if (data.UserChallenges.length) {
      return data.UserChallenges.map(item => {
        return (
          <p>
          {item.description}<br></br>
          Complete to earn {item.coins} coins!
          </p>
        )
      })
    }
  }
  
	return (
    <div>
      <Nav />
      <h1>Daily Challenges</h1>
      {getChallenges(dailyChallenges)}
      <h1>Bonus Challenges</h1>
      {getUserChallenges(userChallenges)}
    </div>

  );
  }