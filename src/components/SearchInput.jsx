import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, InputAdornment, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  search: {
    height: '45px',
    lineHeight: '0',
  },
  paper: {
    margin: '15px 0 10px 0',
  },
  icon: {
    marginLeft: '10px',
  },
  input: {
    '&::placeholder': {
      color: '#000000',
      opacity: '1',
    },
  },
});

const SearchInput = ({
  handleOnChange, handleOpen, searchInput, autoFocus,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <InputBase
        className={classes.search}
        classes={{ input: classes.input }}
        placeholder="Search foods..."
        onChange={handleOnChange}
        value={searchInput}
        autoFocus={autoFocus}
        startAdornment={(
          <InputAdornment position="start" className={classes.icon}>
            <SearchIcon color="disabled" onClick={handleOpen} />
          </InputAdornment>
                )}
        fullWidth
      />
    </Paper>
  );
};

export default SearchInput;
