import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Paper,
} from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';


const useStyles = makeStyles({

});

const SearchDropdown = () => {
  const classes = useStyles();

  return (
    <Paper>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar variant="square" src=""><BrokenImageIcon /></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Food name" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </Paper>
  );
};

export default SearchDropdown;
