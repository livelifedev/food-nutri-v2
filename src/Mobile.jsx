import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Box } from '@material-ui/core';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#D92C41',
    height: '150px',
  },
  main: {
    backgroundColor: '#F5F5F5',
    height: 'calc(100vh - 150px)',
    overflowY: 'scroll',
  },
  divider: {
    margin: '30px 0 10px 0',
  },
});

const Mobile = ({ props }) => {
  const classes = useStyles();
  const {
    cyclePosition, setCyclePosition, dataPoints, dateText, setTodaysIntake, todaysIntake,
  } = props;

  return (
    <Box>
      <Box className={classes.header}>
        <Header
          cyclePosition={cyclePosition}
          setCyclePosition={setCyclePosition}
          cycleLength={dataPoints.length - 1}
          dateText={dateText}
          setTodaysIntake={setTodaysIntake}
        />
      </Box>
      <Grid container className={classes.main}>
        <Grid item xs={12}>
          <Sidebar intakeData={dataPoints} cycle={cyclePosition} todaysIntake={todaysIntake} />
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Main intakeData={dataPoints} cycle={cyclePosition} todaysIntake={todaysIntake} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mobile;
