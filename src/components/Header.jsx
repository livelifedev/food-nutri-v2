import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputBase, InputAdornment, Paper, Typography, IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    height: '45px',
    lineHeight: '0',
  },
  icon: {
    marginLeft: '10px',
  },
});

const Header = ({
  cyclePosition, setCyclePosition, cycleLength, dateText,
}) => {
  const classes = useStyles();

  const cycleForward = () => {
    setCyclePosition((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const cycleBack = () => {
    setCyclePosition((prev) => {
      if (prev < cycleLength) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <Box className={classes.wrapper}>
      <Paper>
        <InputBase
          className={classes.search}
          placeholder="Search foods..."
          startAdornment={(
            <InputAdornment position="start" className={classes.icon}>
              <SearchIcon />
            </InputAdornment>
        )}
          color="primary"
          fullWidth
        />
      </Paper>
      <Box className={classes.nav}>
        <IconButton onClick={cycleBack}><NavigateBeforeIcon /></IconButton>
        <Typography align="center" variant="h4" component="h2">{dateText}</Typography>
        <IconButton onClick={cycleForward}><NavigateNextIcon /></IconButton>
      </Box>
    </Box>
  );
};

export default Header;
