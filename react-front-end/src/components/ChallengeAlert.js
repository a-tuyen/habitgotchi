import React, {useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ChallengeContext from "./ChallengeContext";

export default function ChallengeAlert(props) {
console.log('props---', props)
  // const userChallenges = useContext(ChallengeContext);
  const userChallenges = props.state;
  console.log("UserChallenges", userChallenges);
  const [open, setOpen] = React.useState(false);
  console.log('USERCHALL', userChallenges)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUserChallenges = data => {
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
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Incoming Challenge
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Incoming Challenge!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {getUserChallenges(userChallenges)}
            Challenge Description
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Maybe Later
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Challenge Accepted!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}