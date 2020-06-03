import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Box } from '@material-ui/core';
import ProfileDisplay from './ProfileDisplay';
import { mapCalories, calcPercent } from '../utils/helpers';
import mock from '../mock';

const useStyles = makeStyles({
  dataTextTop: {
    fontWeight: '500',
    lineHeight: '1.3',
  },
  dataText2: {
    lineHeight: '1.3',
    color: '#797979',
  },
  divider: {
    margin: '30px 0',
  },
  calInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  calInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mealsInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
  },
  mealsInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileDetailsWrapper: {
    padding: '0 25px',
  },
  percentage: {
    width: 0,
    margin: '8px 0 0 -10px',
  },
  outerBar: {
    display: 'flex',
    height: '5px',
    width: '100%',
    backgroundColor: '#FCD5AF',
  },
  innerBar: {
    transition: 'width 0.6s',
    height: '5px',
    backgroundColor: '#D92C41',
    maxWidth: '100%',
  },
});

const Sidebar = ({ intakeData, cycle, todaysIntake }) => {
  const classes = useStyles();
  const { daily_goal: dailyGoal } = mock;
  const [caloriesMap, setCaloriesMap] = useState({
    breakfastCals: 0,
    lunchCals: 0,
    dinnerCals: 0,
    snackCals: 0,
    totalCals: 0,
  });
  const [percentage, setPercentage] = useState(0);
  const intake = cycle ? intakeData[cycle].intake_list : todaysIntake;

  useEffect(() => {
    const mappedCalories = mapCalories(intake);
    const progress = calcPercent(mappedCalories.totalCals, dailyGoal);

    setCaloriesMap(mappedCalories);
    setPercentage(progress);
  }, [intake, dailyGoal]);

  return (
    <>
      <ProfileDisplay />

      <Divider className={classes.divider} />

      <Box className={classes.profileDetailsWrapper}>
        <Box className={classes.calInfoWrapper}>
          <Box className={classes.calInfo}>
            <Typography className={classes.dataTextTop} variant="h6" align="left">{`${Math.round(caloriesMap.totalCals)} cal`}</Typography>
            <Typography className={classes.dataText2} variant="caption" align="left">consumed</Typography>
          </Box>
          <Box className={classes.calInfo}>
            <Typography className={classes.dataTextTop} variant="h6" align="right">{`${dailyGoal} cal`}</Typography>
            <Typography className={classes.dataText2} variant="caption" align="right">daily goal</Typography>
          </Box>
        </Box>

        <Box className={classes.outerBar}>
          <Box className={classes.innerBar} width={`${percentage}%`} />
          <Typography className={classes.percentage} variant="caption">{`${percentage}%`}</Typography>
        </Box>

        <Box className={classes.mealsInfoWrapper}>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataTextTop} variant="body1">{Math.round(caloriesMap.breakfastCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Breakfast</Typography>
          </Box>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataTextTop} variant="body1">{Math.round(caloriesMap.lunchCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Lunch</Typography>
          </Box>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataTextTop} variant="body1">{Math.round(caloriesMap.dinnerCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Dinner</Typography>
          </Box>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataTextTop} variant="body1">{Math.round(caloriesMap.snackCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Snack</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
