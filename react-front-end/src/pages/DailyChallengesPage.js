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
		padding: "1.5em",
		borderRadius: "2em",
	},
	button: {
		backgroundColor: "#3f51b5",
		fontFamily: "Quicksand",
		color: "white",
		borderRadius: "1.5rem",
		marginTop: "10px",
	},
	coins: {
		backgroundColor: "white",
		padding: "0.5em",
		borderRadius: "2rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minWidth: "90px",
		maxHeight: "30px",
	},
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
						title="Daily Goals Complete!"
						message={`Congratulations, you have earned ${state.DailyChallenges[0].coins} coins!`}
						buttonMessage="Collect Coins"
						function={taskcompleted}
						coins={state.DailyChallenges[0].coins}
					/>
				)
			);
		}
	};

	const getChallenges = (item) => {
		if (item.length) {
			// return data.map((item) => {
			return (
				<form method="POST" action="/">
					<input
						checked={status.steps >= item[0].step_goal ? "checked" : ""}
						type="checkbox"
						id="step_goal"
						name="step_goal"
						readOnly
					></input>
					<label 
					style={{ paddingLeft: "0.75em"}}
					htmlFor="step_goal"
					>
						Do {item[0].step_goal} Steps
					</label>
					<br></br>
					<input
						checked={status.water >= item[0].water_goal ? "checked" : ""}
						type="checkbox"
						id="water_goal"
						name="water_goal"
						readOnly
					></input>
					<label
					style={{ paddingLeft: "0.75em"}}
					htmlFor="water_goal"
					>
						Drink {item[0].water_goal} cups of water
					</label>
					<br></br>
					<input
						checked={
							status.active_min >= item[0].active_min_goal ? "checked" : ""
						}
						type="checkbox"
						id="active_min_goal"
						name="active_min_goal"
						readOnly
					></input>
					<label
					style={{ paddingLeft: "0.75em"}}
					htmlFor="active_min_goal"
					>
						Complete {item[0].active_min_goal} Active Minutes
					</label>
					<br></br>
					&nbsp;
					<p>Complete all three goals to earn {item[0].coins} coins!</p>
					{areAllChecked()}
				</form>
			);
			// });
		}
	};

	const getUserChallenges = (item) => {
		if (item.length) {
			return (
				<p>
					{item[0].description}
					<br></br>
					Complete to earn {item[0].coins} coins!
					<br></br>
					<Button
						variant="contained"
						className={classes.button}
						onClick={() => {
							bonustaskcompleted(item[0].coins);
						}}
					>
						I did it!
					</Button>
				</p>
			);
		}
	};

	return (
		<div className={classes.root}>
			<Nav />
			<header className={classes.header}>
				<h1>Daily Goals</h1>
				<div className={classes.coins}>
					<MonetizationOnRoundedIcon
						style={{ paddingRight: "0.25em", color: "#FCD200" }}
					/>
					<p>{state.balanceCoins} Coins</p>
				</div>
			</header>

			<Card className={classes.card}>
				{getChallenges(state.DailyChallenges)}
			</Card>
			{mode ? (
				<Card className={classes.card}>
					<h3 style={{ marginTop: "0px" }}>Bonus Challenge</h3>
					{getUserChallenges(state.UserChallenges)}
				</Card>
			) : (
				""
			)}
		</div>
	);
}
