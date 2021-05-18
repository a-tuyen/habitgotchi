import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "./styles/QuestionsFormUseStyles";



export default function PageAlert(props) {
	const [open, setOpen] = useState(true);
	const handleClose = () => {
		setOpen(false);
	};

	const handleAcceptClose = () => {
		setOpen(false);
		if (props.function && props.coins) {
			props.function(props.coins);
		}
	};

	const classes = useStyles();
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{props.message}
					</DialogContentText>
				</DialogContent>
				<DialogActions
					id="buttons-container"
					style={{ justifyContent: "space-between" }}
					>
					<Button onClick={handleClose} className="cancel-button" color="secondary">
						Close
					</Button>
					<Button onClick={handleAcceptClose} className="accept-button" color="primary" autoFocus>
						{props.buttonMessage}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
