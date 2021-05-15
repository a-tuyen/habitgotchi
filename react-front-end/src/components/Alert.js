import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Link } from "react-router-dom";

export default function Alert(props) {
	console.log("props---", props);

	const [open, setOpen] = React.useState(false);
  
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
    props.setTrigger(false)
		setOpen(false);
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
					{props.title}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{props.message}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						{props.buttonMessage}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}