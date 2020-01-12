import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
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

const App = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Grid container className={classes.sidebar}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} className={classes.main}>
          <Main />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
