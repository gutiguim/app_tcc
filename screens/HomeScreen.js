import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Linking,
  // ToastAndroid,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

class HomeScreen extends React.Component {
  goToInformationScreen() {
    // ToastAndroid.show('Ir para tela de informações', ToastAndroid.SHORT);
    this.props.navigation.navigate('Information');
  }
  goToHealthCentersMapScreen() {
    // ToastAndroid.show('Ir para a tela de mapa de centros', ToastAndroid.SHORT);
    // this.props.navigation.navigate('HealthCentersMap');
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=centro+de+saude');
  }
  goToSafetyPlanScreen() {
    // ToastAndroid.show('Ir para tela de plano de segurança', ToastAndroid.SHORT);
    this.props.navigation.navigate('SafetyPlan');
  }
  goToChecklistEvaluationScreen() {
    // ToastAndroid.show('Ir para tela de Auto Avaliação', ToastAndroid.SHORT);
    this.props.navigation.navigate('ChecklistEvaluation');
  }
  goToRelaxingGuide() {
    // ToastAndroid.show('Ir para tela de Guia de relaxamento', ToastAndroid.SHORT);
    this.props.navigation.navigate('RelaxingGuide');
  }


  render() {
    return (
      <View style={styles.getStartedContainer}>
  
        <View style={styles.getStartedContainerInside}>
  
          <TouchableOpacity style={styles.itemBorderRight} onPress={this.goToInformationScreen.bind(this)}>
            <TabBarIcon
              name={
                Platform.OS === 'ios'
                  ? 'ios-information-circle'
                  : 'md-information-circle'
              }
            />
            <Text>Informações</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.itemNoBorder} onPress={this.goToHealthCentersMapScreen.bind(this)}>
            <TabBarIcon
              name={
                Platform.OS === 'ios'
                  ? 'ios-heart'
                  : 'md-heart'
              }
            />
            <Text>Centros Próximos</Text>
          </TouchableOpacity>
  
        </View>
  
        <TouchableOpacity style={styles.getStartedContainerInside1Alone} onPress={this.goToSafetyPlanScreen.bind(this)}>
          <TabBarIcon
            name={
              Platform.OS === 'ios'
                ? 'ios-today'
                : 'md-today'
            }
          />
          <Text>Plano de Segurança</Text>
        </TouchableOpacity>
  
        <View style={styles.getStartedContainerInside}>
  
          <TouchableOpacity style={styles.itemBorderRight} onPress={this.goToChecklistEvaluationScreen.bind(this)}>
            <TabBarIcon
              name={
                Platform.OS === 'ios'
                  ? 'ios-stats'
                  : 'md-stats'
              }
            />
            <Text>Auto Avaliação</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.itemNoBorder} onPress={this.goToRelaxingGuide.bind(this)}>
            <TabBarIcon
              name={
                Platform.OS === 'ios'
                  ? 'ios-body'
                  : 'md-body'
              }
            />
            <Text>Guias de Relaxamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

/* <Card style={styles.items}>
  <Text>Hello world!</Text>
</Card> */

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  getStartedContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainerInside: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'stretch',
  },
  getStartedContainerInside1Alone: {
    display: 'flex',
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  itemBorderRight: {
    flex: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemNoBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
