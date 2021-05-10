import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import PetInventoryListItem from '../components/PetInventoryListItem ';
import Nav from '../components/Nav';

export default function InventoryPage(props) {

  const getPetInventory = petInventoryObj => {
    return <PetInventoryListItem {...petInventoryObj} />;
  }

  return (
    <>
      <Nav/>
      <Typography variant="h1">My Inventory</Typography>
      <Grid container direction="column" spacing={2}>
        {/* Map through each inventory item, not sure how to do it quite yet */}
      </Grid>
    </>
    // <Grid container direction="column" >
    //   <Grid item>
    //     <Nav/>
    //   </Grid>
    //   <Grid item>
    //     <Typography variant="h1">My Inventory</Typography>
    //   </Grid>
    //   <Grid item container spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       {}
    //     </Grid>
    //   </Grid>
    // </Grid>
  )
}