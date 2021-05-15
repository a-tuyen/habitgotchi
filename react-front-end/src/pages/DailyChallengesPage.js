import React, { useContext } from "react";
import { Button, Card } from "@material-ui/core";
import Nav from "../components/Nav";
import ChallengeContext from "../components/ChallengeContext";
import PageAlert from "../components/PageAlert";
import { makeStyles } from "@material-ui/core/styles";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";

const useStyles = makeStyles((theme) => ({
  root: {
		marginLeft: "2.5vw",
		marginRight: "2.5vw",
	},
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
		marginTop: "2vh",
		padding: "1em",
	},
  button: {
    backgroundColor: "#2B7A78",
		fontFamily: "Quicksand",
		color: "white",
    borderRadius: "1.5rem",
    marginTop: "10px"
  },
  coins: {
    backgroundColor: "#DEF2F1",
		padding: "0.5em",
		borderRadius: "2rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
    minWidth: "90px",
    maxHeight: "30px"
  }
}));

export default function DailyChallengesPage(props) {
	const challengeContext = useContext(ChallengeContext);
	const state = challengeContext.state;
	const status = challengeContext.status;
	const taskcompleted = challengeContext.taskcompleted;
	const bonustaskcompleted = challengeContext.bonustaskcompleted;
	const mode = state.acceptedchallenges;
	const classes = useStyles();

	const areAllChecked = () => {
		if (
			status.steps >= state.DailyChallenges[0].step_goal &&
			status.water >= state.DailyChallenges[0].water_goal &&
			status.active_min >= state.DailyChallenges[0].active_min_goal
		) {
			return (
				!state.DailyChallenges[0].completed && (
					<PageAlert
						title="Daily Challenges Complete!"
						message={`Congratulations, you have earned ${state.DailyChallenges[0].coins} Coins`}
						buttonMessage="Accept!"
						function={taskcompleted}
						coins={state.DailyChallenges[0].coins}
					/>
				)
			);
		}
	};

	const getChallenges = (data) => {
		if (data.length) {
			return data.map((item) => {
				return (
					<form method="POST" action="/">
						<input
							checked={status.steps >= item.step_goal ? "checked" : ""}
							type="checkbox"
							id="step_goal"
							name="step_goal"
						></input>
						<label for="step_goal">Do {item.step_goal} Steps</label>
						<br></br>
						<input
							checked={status.water >= item.water_goal ? "checked" : ""}
							type="checkbox"
							id="water_goal"
							name="water_goal"
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
						></input>
						<label for="active_min_goal">
							Complete {item.active_min_goal} Active Minutes
						</label>
						<br></br>
						<p>Complete all three goals to earn {item.coins} coins!</p>
						<br></br>
						{areAllChecked()}
					</form>
				);
			});
		}
	};

	const getUserChallenges = (data) => {
		if (data.length) {
			return data.map((item) => {
				return (
					<p>
						{item.description}
						<br></br>
						Complete to earn {item.coins} coins!
            <br></br>
						<Button
							variant="contained"
              className={classes.button}
							onClick={() => {
								bonustaskcompleted(item.coins);
							}}
						>
							I did it!
						</Button>
					</p>
				);
			});
		}
	};

	return (
		<div className={classes.root}>
			<Nav />
      <header className={classes.header}>
          <h1>Today's Challenges</h1>
          <div className={classes.coins}>
            <MonetizationOnRoundedIcon style={{ paddingRight: "0.25em" }} />
            <p>
              {state.balanceCoins} Coins
            </p>
          </div>
        </header>

			<Card className={classes.card}>
				<h1>Daily Challenges</h1>
				{getChallenges(state.DailyChallenges)}
			</Card>
			{mode ? (
				<Card className={classes.card}>
					<h1>Bonus Challenges</h1>
					{getUserChallenges(state.UserChallenges)}
				</Card>
			):(
        ""
      )}
		</div>
	);
}
