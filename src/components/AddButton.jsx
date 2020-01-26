import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
  },
  buttonWrapper: {
    backgroundColor: '#6202EE',
  },
  colorPrimary: {
    color: '#FFFFFF',
  },
});


const AddButton = ({ handleOnClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <IconButton onClick={handleOnClick} className={classes.buttonWrapper}>
        <AddIcon className={classes.colorPrimary} />
      </IconButton>
    </Box>
  );
};

export default AddButton;
