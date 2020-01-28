import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Box,
} from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import { addIdToList } from '../utils/helpers';

const useStyles = makeStyles({
  primary: {
    fontWeight: '500',
  },
});

const Main = ({ intakeData, cycle, todaysIntake }) => {
  const classes = useStyles();
  const intake = cycle ? intakeData[cycle].intake_list : todaysIntake;
  const mappedIntakeList = addIdToList(intake);

  return (
    <Box>
      <List>
        {mappedIntakeList.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" src={item.thumb}><BrokenImageIcon /></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.food_name}
                secondary={`${item.serving_size} ${item.serving_unit} (${item.serving_weight_grams} g)`}
                classes={{ primary: classes.primary }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Main;
