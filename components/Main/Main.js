import React from 'react';
import StartSessionPage from './Pages/StartSessionPage';
import ChooseModePage from './Pages/ChooseModePage';
import TaskPage from './Pages/TaskPage';
import TimerPage from './Pages/TimerPage';
import Timer from './TimerUtil/TimerClock';
import StatusReportPage from './Pages/StatusReportPage';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={StartSessionPage} />
      <Stack.Screen name="Tasks" component={TaskPage} />
      <Stack.Screen name="Timer" component={Timer} />
      <Stack.Screen name="Status Report" component={StatusReportPage} />
    </Stack.Navigator>
  );
};

export default Main;
