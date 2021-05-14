import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Link } from "react-router-dom";

export default function ChallengeAlert(props) {
	// const userChallenges = useContext(ChallengeContext);
	const userChallenges = props.state;
	console.log("UserChallenges", userChallenges);
	const [open, setOpen] = React.useState(false);
	console.log("USERCHALL", userChallenges);

	// const handleClickOpen = () => {
	// 	setOpen(true);
	// };

	const handleClose = () => {
		props.SetTrigger(false);
		setOpen(false);
	};

	const handleCloseAccept = () => {
		props.SetTrigger(false);
		props.acceptChallenge();
		setOpen(false);
	};

	const getUserChallenges = (data) => {
		if (data.UserChallenges.length) {
			return data.UserChallenges.map((item) => {
				return (
					<p>
						{item.description}
						<br></br>
						Complete to earn {item.coins} coins!
					</p>
				);
			});
		}
	};

	return (
		<div>
			<Dialog
				open={props.trigger}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Incoming Challenge!"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{getUserChallenges(userChallenges)}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Maybe Later
					</Button>

					<Button onClick={handleCloseAccept} color="primary" autoFocus>
						<Link to="/dailychallenges">Challenge Accepted!</Link>
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
