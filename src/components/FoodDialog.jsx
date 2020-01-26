import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog, DialogActions, DialogContent, Typography, Avatar, TextField, MenuItem, InputBase, Select, Button, InputAdornment, Box,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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
  adornmentWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  adornmentSize: {
    width: '20px',
    height: '20px',
  },
  arrowDown: {
    marginBottom: '-8px',
  },
  servingsSelect: {
    width: '120px',
  },
  paddingNone: {
    padding: '15px 0',
  },
  buttonWrapper: {
    padding: '0 0 5px 0',
  },
});

const FoodDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  const replaceSelectIcon = ({ className }) => (
    <KeyboardArrowDownIcon className={className} />
  );
  const inputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <Box className={classes.adornmentWrapper}>
          <KeyboardArrowUpIcon className={`${classes.adornmentSize} ${classes.arrowDown}`} />
          <KeyboardArrowDownIcon className={classes.adornmentSize} />
        </Box>
      </InputAdornment>),
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} PaperProps={{ className: classes.dialog }}>
        <Box className={classes.title}>
          <Avatar variant="square" src="" className={classes.avatar}><BrokenImageIcon /></Avatar>
          <Typography variant="h5" component="h2">Food Dialog</Typography>
        </Box>
        <CloseIcon className={classes.closeButton} onClick={handleClose} />
        <DialogContent dividers className={classes.paddingNone}>
          <TextField
            label="Servings"
            defaultValue="0.0"
            helperText="Units"
            variant="filled"
            InputProps={inputProps}
            className={classes.servingsSelect}
          />
        </DialogContent>
        <DialogContent className={classes.paddingNone}>
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
        <DialogActions className={classes.buttonWrapper}>
          <Button onClick={handleClose} variant="contained" className={classes.addButton}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FoodDialog;
