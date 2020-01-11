import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    //   backgroundColor: '#6201ee',
  },
});

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1>Sidebar</h1>
    </Container>
  );
};

export default Sidebar;
