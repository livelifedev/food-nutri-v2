import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import mock from './mock';

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

const App = () => {
  const classes = useStyles();
  // dataPoints[0] is equal to today, if at [0] use todaysItake
  // iterate [], item.date, item.intake_list[], .meal_type
  const { data_points: dataPoints } = mock;
  const [cyclePosition, setCyclePosition] = useState(0);
  const [dateText, setDateText] = useState('');
  const [todaysIntake, setTodaysIntake] = useState([]);

  useEffect(() => {
    const date = moment().subtract(cyclePosition, 'days');

    if (cyclePosition === 0) setDateText('Today');
    if (cyclePosition === 1) setDateText('Yesterday');
    if (cyclePosition > 1) {
      setDateText(date.format('DD MMMM'));
    }
  }, [cyclePosition]);

  return (
    <Box>
      <Box className={classes.header}>
        <Header
          cyclePosition={cyclePosition}
          setCyclePosition={setCyclePosition}
          cycleLength={dataPoints.length - 1}
          dateText={dateText}
        />
      </Box>
      <Grid container className={classes.sidebar}>
        <Grid item xs={4}>
          <Sidebar intakeData={dataPoints[cyclePosition]} />
        </Grid>
        <Grid item xs={8} className={classes.main}>
          <Main intakeData={dataPoints[cyclePosition]} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
