import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog, DialogActions, DialogContent, Typography, Avatar, TextField, MenuItem, InputBase, Select, Button, InputAdornment, Box,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { roundToDecimal } from '../utils/helpers';


const useStyles = makeStyles({
  dialog: {
    padding: '16px',
    width: '300px',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.8rem',
  },
  subtitle2: {
    color: '#797979',
    padding: '2px 0 5px 0',
    fontSize: '1.2rem',
  },
  subtitle3: {
    color: '#797979',
    letterSpacing: '1px',
    fontSize: '0.8rem',
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
    cursor: 'pointer',
  },
  arrowDown: {
    marginBottom: '-8px',
  },
  servingsSelect: {
    width: '120px',
    '& label.Mui-focused': {
      color: '#6202EE',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: '#6202EE',
    },
  },
  servingsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paddingNone: {
    padding: '15px 0',
  },
  buttonWrapper: {
    padding: '0 0 5px 0',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2px',
  },
  dataText: {
    fontSize: '1.6rem',
  },
});

const FoodDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  const [spinner, setSpinner] = useState(0);

  const spinUp = () => {
    setSpinner((prev) => roundToDecimal(prev + 0.1));
  };

  const spinDown = () => {
    setSpinner((prev) => (prev > 0 ? roundToDecimal(prev - 0.1) : 0));
  };

  const inputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <Box className={classes.adornmentWrapper}>
          <KeyboardArrowUpIcon className={`${classes.adornmentSize} ${classes.arrowDown}`} onClick={spinUp} />
          <KeyboardArrowDownIcon className={classes.adornmentSize} onClick={spinDown} />
        </Box>
      </InputAdornment>),
  };

  const replaceSelectIcon = ({ className }) => (
    <KeyboardArrowDownIcon className={className} />
  );

  return (
    <>
      <Dialog open={open} onClose={handleClose} PaperProps={{ className: classes.dialog }}>
        <Box className={classes.title}>
          <Avatar variant="square" src="" className={classes.avatar}><BrokenImageIcon /></Avatar>
          <Typography variant="h5" component="h2" className={classes.subtitle}>Food Dialog</Typography>
          <Typography variant="h5" className={classes.subtitle2}>Type</Typography>
        </Box>

        <CloseIcon className={classes.closeButton} onClick={handleClose} />

        <DialogContent dividers className={`${classes.paddingNone} ${classes.servingsContainer}`}>
          <TextField
            label="Servings"
            value={(spinner).toFixed(1)}
            helperText="Units"
            variant="filled"
            InputProps={inputProps}
            className={classes.servingsSelect}
          />
          <Box display="flex">
            <Box className={classes.info}>
              <Typography className={classes.dataText} variant="h5">100</Typography>
              <Typography variant="subtitle2">grams</Typography>
            </Box>
            <Box className={classes.info} paddingLeft="20px">
              <Typography className={classes.dataText} variant="h5">200</Typography>
              <Typography variant="subtitle2">calories</Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogContent className={classes.paddingNone}>
          <Typography variant="button" className={classes.subtitle3}>Add To Today</Typography>
          <Select
            fullWidth
            variant="outlined"
            IconComponent={replaceSelectIcon}
            className={classes.selectDropdown}
            input={<InputBase classes={{ input: classes.input }} />}
            defaultValue="Breakfast"
          >
            <MenuItem value="Breakfast">Breakfast</MenuItem>
            <MenuItem value="Lunch">Lunch</MenuItem>
            <MenuItem value="Dinner">Dinner</MenuItem>
            <MenuItem value="Snack">Snack</MenuItem>
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
