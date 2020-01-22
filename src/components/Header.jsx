import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, IconButton, Modal, Box,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SearchInput from './SearchInput';
import SearchDropdown from './SearchDropdown';
import { requestFood } from '../utils/api';


const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
    height: '100%',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '8px',
  },
  colorPrimary: {
    color: '#FFFFFF',
  },
  modalWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
    outline: 'none',
  },
});

const Header = ({
  setCyclePosition, cycleLength, dateText,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [food, setFood] = useState([]);

  const handleOnChange = async (event) => {
    const { value } = event.target;
    setOpen(true);
    setSearchInput(value);

    if (value.length > 0) {
      const results = await requestFood(value);
      setFood([...results.common, ...results.branded]);
    } else {
      setFood([]);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <SearchInput handleOnChange={handleOnChange} handleOpen={handleOpen} searchInput={searchInput} autoFocus={false} />
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.modalWrapper}>
          <SearchInput handleOnChange={handleOnChange} handleOpen={handleOpen} searchInput={searchInput} autoFocus />
          <SearchDropdown food={food} />
        </Box>
      </Modal>
      <Box className={classes.nav}>
        <IconButton onClick={cycleBack}><NavigateBeforeIcon className={classes.colorPrimary} /></IconButton>
        <Typography align="center" variant="h4" component="h2" className={classes.colorPrimary}>{dateText}</Typography>
        <IconButton onClick={cycleForward}><NavigateNextIcon className={classes.colorPrimary} /></IconButton>
      </Box>
    </Box>
  );
};

export default Header;
