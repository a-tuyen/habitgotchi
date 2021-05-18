import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Link } from "react-router-dom";

export default function ChallengeAlert(props) {
	const userChallenges = props.state;
	const handleClose = () => {
		props.SetTrigger(false);
	};

	const handleCloseAccept = () => {
		props.SetTrigger(false);
		props.acceptChallenge();
	};

	const getUserChallenges = (data) => {
		if (data.UserChallenges.length) {
			return (
				<>
					{data.UserChallenges[0].description}
					<br></br>
					Complete to earn {data.UserChallenges[0].coins} coins!
				</>
			);
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
					<Button onClick={handleClose} color="secondary">
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
