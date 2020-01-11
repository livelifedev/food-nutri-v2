import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, InputBase, InputAdornment, Paper,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  wrapper: {
    height: '100%',
  },
  search: {
    height: '45px',
    lineHeight: '0',
  },
  icon: {
    marginLeft: '10px',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} display="flex" alignItems="center">
      <Container maxWidth="sm">
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
      </Container>
    </Box>
  );
};

export default Header;
