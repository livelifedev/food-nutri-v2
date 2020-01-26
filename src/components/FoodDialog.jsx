import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog, DialogActions, DialogContent, Typography, Avatar, TextField, MenuItem, InputBase, Select, Button, Box,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles({
  dialog: {
    padding: '16px',
    width: '300px',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  closeButton: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    color: '#6202EE',
    cursor: 'pointer',
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  addButton: {
    backgroundColor: '#6202EE',
    color: '#FFFFFF',
  },
  selectDropdown: {
    backgroundColor: '#E7E8E7',
    height: '45px',
    borderRadius: '4px',
  },
  input: {
    border: 'none',
    padding: '0 10px 0 15px',
    '&:focus': {
      backgroundColor: '#E7E8E7',
    },
  },
});

const FoodDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  const replaceSelectIcon = ({ className }) => (
    <KeyboardArrowDownIcon className={className} />
  );

  return (
    <>
      <Dialog open={open} onClose={handleClose} PaperProps={{ className: classes.dialog }}>
        <Box className={classes.title}>
          <Avatar variant="square" src="" className={classes.avatar}><BrokenImageIcon /></Avatar>
          <Typography variant="h5" component="h2">Food Dialog</Typography>
        </Box>
        <CloseIcon className={classes.closeButton} onClick={handleClose} />
        <DialogContent dividers>
          <TextField
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <Typography variant="button">Add To Today</Typography>
          <Select
            fullWidth
            variant="outlined"
            IconComponent={replaceSelectIcon}
            className={classes.selectDropdown}
            input={<InputBase classes={{ input: classes.input }} />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" className={classes.addButton}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FoodDialog;
