import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Avatar,
  TextField,
  MenuItem,
  InputBase,
  Select,
  Button,
  InputAdornment,
  Box,
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
    textTransform: 'capitalize',
  },
  subtitle2: {
    color: '#797979',
    padding: '2px 0 5px 0',
    fontSize: '1.2rem',
    textTransform: 'capitalize',
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
    color: '#D92C41',
    cursor: 'pointer',
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  addButton: {
    backgroundColor: '#D92C41',
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
    color: '#6A6A6A',
  },
  arrowDown: {
    marginBottom: '-8px',
  },
  servingsSelect: {
    width: '120px',
    '& label.Mui-focused': {
      color: '#D92C41',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: '#D92C41',
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
  units: {
    color: '#797979',
  },
});

const FoodDialog = ({
  open, handleClose, handleOnSubmit, foodData,
}) => {
  const classes = useStyles();
  const {
    food_name: foodName,
    brand_name: brandName,
    serving_qty: servingQty,
    serving_unit: servingUnit,
    serving_weight_grams: servingWeightGrams,
    nf_calories: calories,
    photo,
  } = foodData;
  const [mealType, setMealType] = useState('breakfast');
  const [spinner, setSpinner] = useState(0);
  const serveMultiplier = 1 / servingQty;
  const servingGrams = serveMultiplier * servingWeightGrams;
  const servingCalories = serveMultiplier * calories;

  const spinUp = () => {
    setSpinner((prev) => roundToDecimal(prev + 0.1));
  };

  const spinDown = () => {
    setSpinner((prev) => (prev > 0 ? roundToDecimal(prev - 0.1) : 0));
  };

  const handleOnSelect = (event) => {
    setMealType(event.target.value);
  };

  const handleOnClose = () => {
    setSpinner(0);
    handleClose();
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
      <Dialog open={open} onClose={handleOnClose} PaperProps={{ className: classes.dialog }}>
        <Box className={classes.title}>
          <Avatar variant="square" src={photo.thumb} className={classes.avatar}><BrokenImageIcon /></Avatar>
          <Typography variant="h5" component="h2" className={classes.subtitle}>{foodName}</Typography>
          {brandName ? <Typography variant="h5" className={classes.subtitle2}>{brandName}</Typography> : null}
        </Box>

        <CloseIcon className={classes.closeButton} onClick={handleOnClose} />

        <DialogContent dividers className={`${classes.paddingNone} ${classes.servingsContainer}`}>
          <TextField
            label="Servings"
            value={(spinner).toFixed(1)}
            helperText={servingUnit}
            variant="filled"
            InputProps={inputProps}
            className={classes.servingsSelect}
          />
          <Box display="flex">
            <Box className={classes.info}>
              <Typography className={classes.dataText} variant="h5">{Math.round(spinner * servingGrams)}</Typography>
              <Typography variant="subtitle2" className={classes.units}>grams</Typography>
            </Box>
            <Box className={classes.info} paddingLeft="30px">
              <Typography className={classes.dataText} variant="h5">{Math.round(spinner * servingCalories)}</Typography>
              <Typography variant="subtitle2" className={classes.units}>calories</Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogContent className={classes.paddingNone}>
          <Typography variant="button" className={classes.subtitle3}>Add To Today</Typography>
          <Select
            fullWidth
            variant="outlined"
            onChange={handleOnSelect}
            IconComponent={replaceSelectIcon}
            className={classes.selectDropdown}
            input={<InputBase classes={{ input: classes.input }} />}
            defaultValue="breakfast"
          >
            <MenuItem value="breakfast">Breakfast</MenuItem>
            <MenuItem value="lunch">Lunch</MenuItem>
            <MenuItem value="dinner">Dinner</MenuItem>
            <MenuItem value="snack">Snack</MenuItem>
          </Select>
        </DialogContent>

        <DialogActions className={classes.buttonWrapper}>
          <Button
            onClick={() => {
              handleOnSubmit({ mealType, spinner });
              setSpinner(0);
            }}
            variant="contained"
            className={classes.addButton}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FoodDialog;
