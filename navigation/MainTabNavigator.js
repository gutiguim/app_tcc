import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactScreen from '../screens/ContactScreen';
import ChatCvvScreen from '../screens/ChatCvvScreen';

import InformationScreen from '../screens/InformationScreen';
import SafetyPlanScreen from '../screens/SafetyPlanScreen';
import ChecklistEvaluationScreen from '../screens/ChecklistEvaluationScreen';
import RelaxingGuideScreen from '../screens/RelaxingGuideScreen';
import HealthCentersMapScreen from '../screens/HealthCentersMapScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Information: {
    screen: InformationScreen
  },
  SafetyPlan: {
    screen: SafetyPlanScreen
  },
  ChecklistEvaluation: {
    screen: ChecklistEvaluationScreen
  },
  RelaxingGuide: {
    screen: RelaxingGuideScreen
  },
  HealthCentersMap: {
    screen: HealthCentersMapScreen
  },
});
HomeStack.navigationOptions = {
  tabBarLabel: 'HomeTest',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'md-home'
          : 'md-home'
      }
    />
  ),
};

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? 'md-home'
//           : 'md-home'
//       }
//     />
//   ),
// };

const ContactsStack = createStackNavigator({
  Links: ContactScreen,
});

ContactsStack.navigationOptions = {
  tabBarLabel: 'Contatos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-contact' : 'md-contact'}
    />
  ),
};

const ChatCvvStack = createStackNavigator({
  Links: ChatCvvScreen,
});

ChatCvvStack.navigationOptions = {
  tabBarLabel: 'Chat CVV',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-chatboxes' : 'md-chatboxes'}
    />
  ),
};

const AboutStack = createStackNavigator({
  Settings: SettingsScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'Sobre',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  // HomeStack,
  ContactsStack,
  ChatCvvStack,
  AboutStack,
});
