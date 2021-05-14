import React, { useContext } from "react";
import { Grid, Button, Checkbox, Card } from "@material-ui/core";
import Nav from "../components/Nav";
import ChallengeContext from "../components/ChallengeContext";

//List Component Stuff
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Checkbox from "@material-ui/core/Checkbox";

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

export default function DailyChallengesPage() {
	const classes = useStyles();

	const challengeContext = useContext(ChallengeContext);
	// console.log("state", dailyChallenges.DailyChallenges);
	const userChallenges = useContext(ChallengeContext);
	const dailyChallenges = challengeContext.state;
	const status = challengeContext.status;
	// const statuschecked = status.steps - item.step_goal;
	const getChallenges = (data) => {
		if (data.DailyChallenges.length) {
			return data.DailyChallenges.map((item) => {
				return (
					<form method="POST" action="/">
						<input
							checked={status.steps > item.step_goal ? "checked" : ""}
							type="checkbox"
							id="step_goal"
							name="step_goal"
						></input>
						<label for="step_goal">Do {item.step_goal} Steps</label>
						<br></br>
						<input
							checked={status.water > item.water_goal ? "checked" : ""}
							type="checkbox"
							id="water_goal"
							name="water_goal"
						></input>
						<label for="water_goal">
							Drink {item.water_goal} cups of water
						</label>
						<br></br>
						<input
							type="checkbox"
							id="active_min_goal"
							name="active_min_goal"
						></input>
						<label for="active_min_goal">
							Complete {item.active_min_goal} Active Minutes
						</label>
						<br></br>
						<p>Complete all three goals to earn {item.coins} coins!</p>
						<Button variant="contained" color="primary">
							Complete!
						</Button>
					</form>
				);
			});
		}
	};

	// const getUserChallenges = (data) => {
	// 	if (data.UserChallenges.length) {
	// 		return data.UserChallenges.map((item) => {
	// 			return (
	// 				<p>
	// 					{item.description}
	// 					<br></br>
	// 					Complete to earn {item.coins} coins!
	// 					<Button variant="contained" color="primary">
	// 						I did it!
	// 					</Button>
	// 				</p>
	// 			);
	// 		});
	// 	}
	// };

	return (
		<div>
			<Nav />
			<Card className={classes.root}>
				<h1>Daily Challenges</h1>
				{getChallenges(dailyChallenges)}
			</Card>
		</div>
	);
}

// return (
// 	<div>
// 		<Nav />
// 		<Card className={classes.root}>
// 			<h1>Daily Challenges</h1>
// 			{dailyChallenges.DailyChallenges.water_goal}
// 		</Card>

// 	</div>
// );
// }

// export default function DailyChallengesPage() {

//   const dailyChallenges = useContext(ChallengeContext)
//   const userChallenges = useContext(ChallengeContext)

//   const getChallenges = (data) => {

//     if (data.DailyChallenges.length) {
//       return data.DailyChallenges.map(item => {
//         return (
//           <p>
//           Do {item.step_goal} Steps <br></br>
//           Drink {item.water_goal} cups of water <br></br>
//           Complete {item.active_min_goal} Active Minutes <br></br>
//           Complete all three goals to earn {item.coins} coins!
//           </p>
//         )
//       })
//     }
//   }

//   const getUserChallenges = (data) => {

//     if (data.UserChallenges.length) {
//       return data.UserChallenges.map(item => {
//         return (
//           <p>
//           {item.description}<br></br>
//           Complete to earn {item.coins} coins!
//           </p>
//         )
//       })
//     }
//   }

//   return (
//     <div>
//       <Nav />
//       <h1>Daily Challenges</h1>
//       {getChallenges(dailyChallenges)}
//       <h1>Bonus Challenges</h1>
//       {getUserChallenges(userChallenges)}
//     </div>

//   );
// }
