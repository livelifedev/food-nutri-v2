import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import moment from 'moment';
import Desktop from './Desktop';
import Mobile from './Mobile';
import mock from './mock';

const App = () => {
  const isDesktop = useMediaQuery('(min-width:640px)');
  const { data_points: dataPoints } = mock;
  const [cyclePosition, setCyclePosition] = useState(0);
  const [dateText, setDateText] = useState('');
  const [todaysIntake, setTodaysIntake] = useState([]);

  const props = {
    cyclePosition, setCyclePosition, dataPoints, dateText, setTodaysIntake, todaysIntake,
  };

  useEffect(() => {
    const date = moment().subtract(cyclePosition, 'days');

    if (cyclePosition === 0) setDateText('Today');
    if (cyclePosition === 1) setDateText('Yesterday');
    if (cyclePosition > 1) {
      setDateText(date.format('DD MMMM'));
    }
  }, [cyclePosition]);

  return isDesktop ? <Desktop props={props} /> : <Mobile props={props} />;
};

export default App;
