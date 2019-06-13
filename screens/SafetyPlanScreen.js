import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import { Card, CardSection, Input, Button, InputNoLabel } from '../components/my_components';
import TabBarIcon from '../components/TabBarIcon';


class SafetyPlanScreen extends React.Component {
  state = { 
    alertSigns: ['', '', '', ''],
    copingStrategy: ['', '', '', ''],
    contacts: [{ name: 'Test1', number: '' }, { name: 'Test2', number: '' }, { name: 'Test3', number: '' }], 
    contactCrisisCenter: { name: 'Centro de Crise', phone: '' },  
  //   reasonsToLive: [],
  //   placesToDistract: [],
  //   peopleWhoCanHelp: [],
  //   reducingRisks: [],
  //   recovery: '',
  //   professionalsToCall: [],
  //   keepingEnvironmentSafe: '',
  };

  onAlertSignsChange(text, index) {
    this.setState(state => {
      const alertSigns = state.alertSigns.map((item, j) => {
        if (j === index) {
          return text;
        } else {
          return item;
        }
      });

      return {
        alertSigns,
      };
    });
  }

  onCopingStrategyChange(text, index) {
    this.setState(state => {
      const copingStrategy = state.copingStrategy.map((item, j) => {
        if (j === index) {
          return text;
        } else {
          return item;
        }
      });

      return {
        copingStrategy,
      };
    });
  }

  onChangeContact(index, name, number) {
    // TODO -> IF EXISTS CALLS, IF DOESNT ADD NUMBER
    // this.setState(state => {
    //   const contacts = state.contacts.map((item, j) => {
    //     if (j === index) {
    //       return { name, number };
    //     } else {
    //       return item;
    //     }
    //   });

    //   return {
    //     contacts,
    //   };
    // });
  }

  onChangeContactCrisisCenter(name, number) {
    // TODO -> IF EXISTS CALLS, IF DOESNT ADD NUMBER
  }

  onButtonPress() {

  }
 
  // TODO Future -> Hide each BIG CardSection in a button

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <View style={styles.arrayListInside}>
              <Text>
                Sinais de alerta:
              </Text>
              {this.state.alertSigns.map((item, index) => (
                <CardSection>
                  <InputNoLabel
                    id={index}
                    placeholder="Digite um sinal de alerta"
                    onChangeText={text => this.onAlertSignsChange(text, index)}
                    value={this.state.alertSigns[index]}
                  />
                </CardSection>
              ))}
            </View>
          </CardSection>

          <CardSection>
            <View style={styles.arrayListInside}>
              <Text>
                Estratégias de enfrentamento:
              </Text>
              {this.state.copingStrategy.map((item, index) => (
                <CardSection>
                  <InputNoLabel
                    id={index}
                    placeholder="Digite uma estratégia"
                    onChangeText={text => this.onCopingStrategyChange(text, index)}
                    value={this.state.copingStrategy[index]}
                  />
                </CardSection>
              ))}
            </View>
          </CardSection>

          {/* TODO ADD METHOD TO CHANGE USER NUMBER */}
          <CardSection>
            <View style={styles.contactRow}>
              <TouchableOpacity style={styles.contacts} onPress={this.onChangeContact(0, 'name', 99999999)}>
                <TabBarIcon
                  name={'md-contact'}
                />
                <Text>{this.state.contacts[0].name}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contactMiddle} onPress={this.onChangeContact(1, 'name', 99999999)}>
                <TabBarIcon 
                  name={'md-contact'}
                />
                <Text>{this.state.contacts[1].name}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contacts} onPress={this.onChangeContact(2, 'name', 99999999)}>
                <TabBarIcon
                  name={'md-contact'}
                />
                <Text>{this.state.contacts[2].name}</Text>
              </TouchableOpacity>
            </View>
          </CardSection>

          {/* TODO ADD METHOD TO CHANGE NUMBER */}
          <CardSection>
            <View style={styles.contactColumn}>
              <TouchableOpacity style={styles.contacts} onPress={this.onChangeContactCrisisCenter('name', 99999999)}>
                <TabBarIcon
                  name={'md-contact'}
                />
              </TouchableOpacity>
              <Text>{this.state.contactCrisisCenter.name}</Text>
            </View>
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Salvar
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }

}

/* <Card style={styles.items}>
  <Text>Hello world!</Text>
</Card> */

SafetyPlanScreen.navigationOptions = {
  title: 'Plano de Segurança',
};

const styles = StyleSheet.create({
  arrayListInside: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  contactRow: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contacts: {
    padding: 20,
  },
  contactMiddle: {
    paddingLeft: 30,
    paddingRight: 30,
  }
});

export default SafetyPlanScreen;
