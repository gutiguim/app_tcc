import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import InformationScreen from '../screens/InformationScreen';
import SafetyPlanScreen from '../screens/SafetyPlanScreen';

const AppStack = createStackNavigator({ Home: HomeScreen, Information: InformationScreen, SafetyPlan: SafetyPlanScreen });

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    App: AppStack,
    Main: MainTabNavigator,
  })
);
