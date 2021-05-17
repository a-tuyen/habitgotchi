import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./styles/Alert.scss";


export default function PageAlert(props) {
	console.log("props---", props);

	const [open, setOpen] = React.useState(true);
	const handleClose = () => {
		setOpen(false);
	};

	const handleAcceptClose = () => {
		setOpen(false);
		if (props.function && props.coins) {
			props.function(props.coins);
		}
	};


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
					style={{ justifyContent: "space-between" }}>
					<Button className="cancel-button" onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleAcceptClose} className="accept-button"  color="primary">
						{props.buttonMessage}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
