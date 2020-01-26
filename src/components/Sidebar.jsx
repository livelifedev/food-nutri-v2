import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Typography, Divider, Box,
} from '@material-ui/core';
import { mapCalories, calcPercent } from '../utils/helpers';
import mock from '../mock';

const useStyles = makeStyles({
  avatarItems: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '130px',
    paddingTop: '20px',
  },
  avatar: {
    width: '100px',
    height: '100px',
  },
  dataCircle: {
    backgroundColor: '#7A7A7A',
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    lineHeight: '1',
    color: '#FFFFFF',
  },
  dataText2: {
    lineHeight: '1.3',
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
    padding: '0 15px',
  },
  percentage: {
    margin: '8px 0 0 -10px',
  },
  outerBar: {
    display: 'flex',
    height: '5px',
    width: '100%',
    backgroundColor: '#DAC2FB',
  },
  innerBar: {
    transition: 'width 0.6s',
    height: '5px',
    backgroundColor: '#6202EE',
  },
});

const Sidebar = ({ intakeData }) => {
  const classes = useStyles();
  console.log(intakeData);
  // Pull profile from mock data
  const {
    first_name: firstName,
    last_name: lastName,
    height_cm: heightCm,
    weight_kg: weightKg,
    daily_goal: dailyGoal,
  } = mock;
  const caloriesMap = mapCalories(intakeData.intake_list);
  const percentage = calcPercent(caloriesMap.totalCals, dailyGoal);

  return (
    <>
      <Box className={classes.avatarItems}>
        <Box className={classes.dataCircle}>
          <Typography className={classes.dataText} variant="body1">{weightKg}</Typography>
          <Typography className={classes.dataText} variant="caption">kg</Typography>
        </Box>
        <Avatar alt={`${firstName} ${lastName}`} src="" className={classes.avatar} />
        <Box className={classes.dataCircle}>
          <Typography className={classes.dataText} variant="body1">{heightCm}</Typography>
          <Typography className={classes.dataText} variant="caption">cm</Typography>
        </Box>
      </Box>
      <Typography component="h2" variant="h5" align="center">{`${firstName} ${lastName}`}</Typography>

      <Divider className={classes.divider} />

      <Box className={classes.profileDetailsWrapper}>
        <Box className={classes.calInfoWrapper}>
          <Box className={classes.calInfo}>
            <Typography className={classes.dataText2} variant="body1" align="left">{`${Math.round(caloriesMap.totalCals)} cal`}</Typography>
            <Typography className={classes.dataText2} variant="caption" align="left">consumed</Typography>
          </Box>
          <Box className={classes.calInfo}>
            <Typography className={classes.dataText2} variant="body1" align="right">{`${dailyGoal} cal`}</Typography>
            <Typography className={classes.dataText2} variant="caption" align="right">daily goal</Typography>
          </Box>
        </Box>

        <Box className={classes.outerBar}>
          <Box className={classes.innerBar} width={`${percentage}%`} />
          <Typography className={classes.percentage} variant="caption">{`${percentage}%`}</Typography>
        </Box>

        <Box className={classes.mealsInfoWrapper}>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataText2} variant="body1">{Math.round(caloriesMap.breakfastCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Breakfast</Typography>
          </Box>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataText2} variant="body1">{Math.round(caloriesMap.lunchCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Lunch</Typography>
          </Box>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataText2} variant="body1">{Math.round(caloriesMap.dinnerCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Dinner</Typography>
          </Box>
          <Box className={classes.mealsInfo}>
            <Typography className={classes.dataText2} variant="body1">{Math.round(caloriesMap.snackCals)}</Typography>
            <Typography className={classes.dataText2} variant="caption">Snack</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
