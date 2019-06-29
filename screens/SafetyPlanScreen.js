import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ToastAndroid,
  Linking,
  Permissions,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import * as Contacts from 'expo-contacts';
import { Card, CardSection, Button, InputNoLabel } from '../components/my_components';
import TabBarIcon from '../components/TabBarIcon';

class SafetyPlanScreen extends React.Component {
  INITIAL_STATE = {
    alertSigns: ['', '', '', ''],
    copingStrategy: ['', '', '', ''],
    contacts: [{ name: '', number: '' }, { name: '', number: '' }, { name: '', number: '' }], 
    contactCrisisCenter: { name: '', phone: '' },  
    reasonsToLive: ['', '', '', ''],
    placesToDistract: ['', '', '', ''],
    reducingRisks: ['', '', '', ''],
    recovery: '',
    professionalsToCall: [{ name: '', number: '' }, { name: '', number: '' }, { name: '', number: '' }], 
  //   keepingEnvironmentSafe: '',
  };

  constructor(props) {
    super(props);
    this.state = { 
      alertSigns: ['', '', '', ''],
      copingStrategy: ['', '', '', ''],
      contacts: [{ name: '', number: '' }, { name: '', number: '' }, { name: '', number: '' }], 
      contactCrisisCenter: { name: '', phone: '' },  
      reasonsToLive: ['', '', '', ''],
      placesToDistract: ['', '', '', ''],
      reducingRisks: ['', '', '', ''],
      recovery: '',
      professionalsToCall: [{ name: '', number: '' }, { name: '', number: '' }, { name: '', number: '' }], 
    //   keepingEnvironmentSafe: '',
     };
  }

  handleCall = (number) => {
    // WebBrowser.openBrowserAsync('http://docs.expo.io');
    Linking.openURL(`tel:${number}`);
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

  onReasonsToLiveChange(text, index) {
    this.setState(state => {
      const reasonsToLive = state.reasonsToLive.map((item, j) => {
        if (j === index) {
          return text;
        } else {
          return item;
        }
      });

      return {
        reasonsToLive,
      };
    });
  }

  onPlacesToDistractChange(text, index) {
    this.setState(state => {
      const placesToDistract = state.placesToDistract.map((item, j) => {
        if (j === index) {
          return text;
        } else {
          return item;
        }
      });

      return {
        placesToDistract,
      };
    });
  }

  onReducingRisksChange(text, index) {
    this.setState(state => {
      const reducingRisks = state.reducingRisks.map((item, j) => {
        if (j === index) {
          return text;
        } else {
          return item;
        }
      });

      return {
        reducingRisks,
      };
    });
  }

  onChangeContact(index, name, number) {
    // TODO -> IF EXISTS CALLS, IF DOESNT ADD NUMBER
    if (name !== '' || number !== '') {
      this.handleCall(parseInt(number, 10));
    } else {
      // SHOW INPUT FOR GETTING CONTACT
    }
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

  onChangeProfessionalsToCall(index, name, number) {
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

  getStateFromStorageAndSetState = async () => {
    let value;
    try {
      value = await AsyncStorage.getItem('safetyPlanScreenState');
    } catch (error) {
      ToastAndroid.show('Não foi possível carregar as informações', ToastAndroid.SHORT);
    }

    this.setStorageState(value);
    return value;
  }

  setStorageState(newState) {
    const parse = JSON.parse(newState);
    this.setState(parse);
  }

  componentDidMount() {
    this.getStateFromStorageAndSetState();
  }

  onButtonPress = async () => {
    const saveState = JSON.stringify(this.state);
    console.log(saveState);

    try {
      await AsyncStorage.setItem('safetyPlanScreenState', saveState);
    } catch (error) {
      ToastAndroid.show('Não foi possível salvar as informações', ToastAndroid.SHORT);
    }
  };

  // TODO Future -> Hide each BIG CardSection in a button
  // TODO ADD METHOD TO CHANGE NUMBER

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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

            <CardSection>
              <View style={styles.contactRow}>
                <TouchableOpacity style={styles.contacts} onPress={() => this.onChangeContact(0, '', '')}>
                  <TabBarIcon
                    name={'md-contact'}
                  />
                  <Text>{this.state.contacts[0].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contactMiddle} onPress={() => this.onChangeContact(1, 'name', 99999999)}>
                  <TabBarIcon 
                    name={'md-contact'}
                  />
                  <Text>{this.state.contacts[1].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contacts} onPress={() => this.onChangeContact(2, 'name', 99999999)}>
                  <TabBarIcon
                    name={'md-contact'}
                  />
                  <Text>{this.state.contacts[2].name}</Text>
                </TouchableOpacity>
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.contactColumn}>
                <TouchableOpacity style={styles.contactCrisisTouchableOpacity} onPress={this.onChangeContactCrisisCenter('name', 99999999)}>
                  <TabBarIcon
                    name={'md-contact'}
                  />
                </TouchableOpacity>
                <Text style={styles.contactCrisis}>{this.state.contactCrisisCenter.name}</Text>
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.arrayListInside}>
                <Text>
                  Razões para viver:
                </Text>
                {this.state.reasonsToLive.map((item, index) => (
                  <CardSection>
                    <InputNoLabel
                      id={index}
                      placeholder="Digite uma razão para viver"
                      onChangeText={text => this.onReasonsToLiveChange(text, index)}
                      value={this.state.reasonsToLive[index]}
                    />
                  </CardSection>
                ))}
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.arrayListInside}>
                <Text>
                  Lugares para se distrair:
                </Text>
                {this.state.placesToDistract.map((item, index) => (
                  <CardSection>
                    <InputNoLabel
                      id={index}
                      placeholder="Digite um lugar para se distrair"
                      onChangeText={text => this.onPlacesToDistractChange(text, index)}
                      value={this.state.placesToDistract[index]}
                    />
                  </CardSection>
                ))}
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.arrayListInside}>
                <Text>
                  Como reduzir riscos:
                </Text>
                {this.state.reducingRisks.map((item, index) => (
                  <CardSection>
                    <InputNoLabel
                      id={index}
                      placeholder="Digite como reduzir riscos"
                      onChangeText={text => this.onReducingRisksChange(text, index)}
                      value={this.state.reducingRisks[index]}
                    />
                  </CardSection>
                ))}
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.arrayListInside}>
                <Text>
                  Recuperação:
                </Text>
                  <CardSection>
                    <InputNoLabel
                      placeholder="Digite como reduzir riscos"
                      onChangeText={recovery => this.setState({ recovery })}
                      value={this.state.recovery}
                      multiline={true}
                    />
                  </CardSection>
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.contactRow}>
                <TouchableOpacity style={styles.contacts} onPress={this.onChangeProfessionalsToCall(0, 'name', 99999999)}>
                  <TabBarIcon
                    name={'md-contact'}
                  />
                  <Text>{this.state.professionalsToCall[0].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contactMiddle} onPress={this.onChangeProfessionalsToCall(1, 'name', 99999999)}>
                  <TabBarIcon 
                    name={'md-contact'}
                  />
                  <Text>{this.state.professionalsToCall[1].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contacts} onPress={this.onChangeProfessionalsToCall(2, 'name', 99999999)}>
                  <TabBarIcon
                    name={'md-contact'}
                  />
                  <Text>{this.state.professionalsToCall[2].name}</Text>
                </TouchableOpacity>
              </View>
            </CardSection>

            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                Salvar
              </Button>
            </CardSection>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

}

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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contactMiddle: {
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactCrisis: {
    paddingBottom: 20,
  },
  contactCrisisTouchableOpacity: {
    paddingTop: 10
  }
});

export default SafetyPlanScreen;
