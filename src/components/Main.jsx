import React from 'react';
import {
  List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider,
} from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import Box from '@material-ui/core/Box';
import { addIdToList } from '../utils/helpers';

const Main = ({ intakeData }) => {
  const { intake_list: intakeList } = intakeData;
  const mappedIntakeList = addIdToList(intakeList);

  return (
    <Box>
      <List>
        {mappedIntakeList.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" src={item.thumb}><BrokenImageIcon /></Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.food_name} secondary={`${item.serving_size} ${item.serving_unit} (${item.serving_weight_grams} g)`} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Main;
