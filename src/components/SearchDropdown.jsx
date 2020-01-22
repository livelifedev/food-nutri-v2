import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Paper,
} from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

const dummyArray = [1, 2, 3, 4];

const useStyles = makeStyles({
  listHeading: {
    color: '#797979',
    fontWeight: 'bolder',
    letterSpacing: '2px',
    padding: '5px 0 0 15px',
  },
});

const SearchDropdown = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Typography variant="overline" component="p" className={classes.listHeading}>COMMON</Typography>
      <List>
        {dummyArray.map((item, index) => (
          <React.Fragment key={item}>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" src=""><BrokenImageIcon /></Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Food name ${item}`} />
            </ListItem>
            {dummyArray[index + 1] ? <Divider variant="inset" component="li" /> : null}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default SearchDropdown;
