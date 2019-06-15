import React,{Component} from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import {mySvg} from '../';


const style =theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class RoleType extends Component {
  render(){
     const classes = this.props
    return(
      <div>
    
      <Paper className={classes.root}>
        <Grid container spacing={3}>
        <Grid item sm={12} xs={12}>
         Select type
        </Grid>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
         xs={12}>
      
        </Grid>
         <Grid item xs={12}>
         button
        </Grid>
        </Grid>
      </Paper>
      </div>
    )
  }
}
export default withStyles(style)(RoleType)