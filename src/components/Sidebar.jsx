import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Typography, Divider, LinearProgress,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
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
    lineHeight: '1',
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
});

const Sidebar = () => {
  const classes = useStyles();

  // Pull profile from mock data
  const {
    first_name: firstName,
    last_name: lastName,
    height_cm: heightCm,
    weight_kg: weightKg,
    daily_goal: dailyGoal,
  } = mock;

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

      <Box className={classes.calInfoWrapper}>
        <Box className={classes.calInfo}>
          <Typography className={classes.dataText2} variant="body1" align="left">{`${'N/A'} cal`}</Typography>
          <Typography className={classes.dataText2} variant="caption" align="left">consumed</Typography>
        </Box>
        <Box className={classes.calInfo}>
          <Typography className={classes.dataText2} variant="body1" align="right">{`${dailyGoal} cal`}</Typography>
          <Typography className={classes.dataText2} variant="caption" align="right">daily goal</Typography>
        </Box>
      </Box>

      <LinearProgress variant="determinate" value={20} />
    </>
  );
};

export default Sidebar;
