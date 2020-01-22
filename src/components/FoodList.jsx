import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider,
} from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

const useStyles = makeStyles({
  listHeading: {
    color: '#797979',
    fontWeight: 'bolder',
    letterSpacing: '2px',
    padding: '5px 0 0 15px',
  },
});

const FoodList = ({ title, foodList }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="overline" component="p" className={classes.listHeading}>{title}</Typography>
      <List>
        {foodList.map((item, index) => (
          <React.Fragment key={item}>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" src=""><BrokenImageIcon /></Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Food name ${item}`} />
            </ListItem>
            {foodList[index + 1] ? <Divider variant="inset" component="li" /> : null}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default FoodList;
