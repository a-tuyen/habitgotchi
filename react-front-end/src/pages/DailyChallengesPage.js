import React, { useContext, useState, useEffect } from "react";
import { Grid, Button, Checkbox, Card } from "@material-ui/core";
import Nav from "../components/Nav";
import ChallengeContext from "../components/ChallengeContext";
import PageAlert from "../components/PageAlert";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "80%",
		marginLeft: "10vw",
		marginRight: "10vw",
		marginTop: "2vh",
		padding: "1em",
	},
}));

export default function DailyChallengesPage(props) {
	const [trigger, setTrigger] = useState(false);
	const challengeContext = useContext(ChallengeContext);
	console.log('challprops***', props)
	const userChallenges = challengeContext.state;
	const dailyChallenges = challengeContext.state;
	console.log("dailyChallenges", dailyChallenges.DailyChallenges[0]);
	

	const status = challengeContext.status;
	// const statuschecked = status.steps - item.step_goal;

	const classes = useStyles();

	const mode = dailyChallenges.acceptedchallenges;

  //CheckBox States
  
	// const [state, setState] = useState({
	// 	first: false,
	// 	// Status: {},
	// 	MyPetInventory: [],
	// 	PetShop: [],
	// 	DailyChallenges: {},
	// 	balanceCoins: 0,
	// 	UserChallenges: {},
	// 	acceptedchallenges : 0
	// });

  // const [ firstBox, setFirstBox ] = useState(false);
  // const [ secondBox, setSecondBox ] = useState(false);
  // const [ thirdBox, setThirdBox ] = useState(false);
  // console.log('all boxes', firstBox, secondBox, thirdBox)

		const areAllChecked = () => {

			if ((status.steps >= dailyChallenges.DailyChallenges[0].step_goal) && (status.water >= dailyChallenges.DailyChallenges[0].water_goal) && (status.active_min >= dailyChallenges.DailyChallenges[0].active_min_goal)) {
		 setTrigger(true);
		}
	}



	const getChallenges = (data) => {
		if (data.DailyChallenges.length) {
			return data.DailyChallenges.map((item) => {
				return (
					<form method="POST" action="/">
						<input
							checked={status.steps >= item.step_goal ? "checked" : ""}
							type="checkbox"
							id="step_goal"
							name="step_goal"
              // onChange={(event)=>setFirstBox(!firstBox)}
							// value={firstBox}
						></input>
						<label for="step_goal">Do {item.step_goal} Steps</label>
						<br></br>
						<input
							checked={status.water >= item.water_goal ? "checked" : ""}
							type="checkbox"
							id="water_goal"
							name="water_goal"
              // onClick={()=>setSecondBox(!secondBox)}
              // value={secondBox}
						></input>
						<label for="water_goal">
							Drink {item.water_goal} cups of water
						</label>
						<br></br>
						<input
							checked={
								status.active_min >= item.active_min_goal ? "checked" : ""
							}
							type="checkbox"
							id="active_min_goal"
							name="active_min_goal"
              // onClick={()=>setThirdBox(!thirdBox)}
              // value={thirdBox}
						></input>
						<label for="active_min_goal">
							Complete {item.active_min_goal} Active Minutes
						</label>
						<br></br>
						<p>Complete all three goals to earn {item.coins} coins!</p>
						{areAllChecked}
						<PageAlert
							trigger={trigger}
							setTrigger={setTrigger}
							title="Daily Challenges Complete!"
							message={`Congratulations, you have earned ${item.coins}`}
							buttonMessage="Accept!"
						/>
					</form>
				);
			});
		}
	};

	const getUserChallenges = (data) => {
		if (data.UserChallenges.length) {
			return data.UserChallenges.map((item) => {
				return (
					<p>
						{item.description}
						<br></br>
						Complete to earn {item.coins} coins!
						<Button variant="contained" color="primary">
							I did it!
						</Button>
					</p>
				);
			});
		}
	};

	return (
		<div>
			<Nav />
			<p
				style={{
					backgroundColor: "#DEF2F1",
					padding: "0.75em",
					borderRadius: "2rem",
				}}
			>
				{dailyChallenges.balanceCoins} Coins
			</p>

			<Card className={classes.root}>
				<h1>Daily Challenges</h1>
				{getChallenges(dailyChallenges)}
			</Card>
			{mode && (
				<Card className={classes.root}>
					<h1>Bonus Challenges</h1>
					{getUserChallenges(userChallenges)}
				</Card>
			)}
		</div>
	);
}
