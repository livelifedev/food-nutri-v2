import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
  header: {
    backgroundColor: '#6201EE',
    height: '150px',
  },
  sidebar: {
    backgroundColor: '#F5F5F5',
    height: 'calc(100vh - 150px)',
  },
  main: {
    backgroundColor: '#FFFFFF',
    height: 'calc(100vh - 150px)',
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
      <Grid container className={classes.sidebar}>
        <Grid item xs={4}>
          <Sidebar intakeData={dataPoints} cycle={cyclePosition} todaysIntake={todaysIntake} />
        </Grid>
        <Grid item xs={8} className={classes.main}>
          <Main intakeData={dataPoints} cycle={cyclePosition} todaysIntake={todaysIntake} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mobile;
