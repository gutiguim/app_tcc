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
} from 'react-native';
import DialogInput from 'react-native-dialog-input';
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
      isNameContactDialogVisible: false,
      isNumberContactDialogVisible: false,
      isNameContactCrisisCenterDialogVisible: false,
      isNumberContactCrisisCenterDialogVisible: false,
      isNameProfessionalsToCallDialogVisible: false,
      isNumberProfessionalsToCallDialogVisible: false,
      auxiliarIndex: 0,
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
      this.setState({ auxiliarIndex: index });
      this.setState({ isNameContactDialogVisible: true });
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
      if (value !== null) {
        this.setStorageState(value);
        return value;
      }
    } catch (error) {
      ToastAndroid.show('Não foi possível carregar as informações', ToastAndroid.SHORT);
    }
  }

  setStorageState(newState) {
    const parse = JSON.parse(newState);
    this.setState(parse);
    this.setState({ isNameContactDialogVisible: false });
    this.setState({ isNumberContactDialogVisible: false });

    this.setState({ isNameContactCrisisCenterDialogVisible: false });
    this.setState({ isNumberContactCrisisCenterDialogVisible: false });

    this.setState({ isNameProfessionalsToCallDialogVisible: false });
    this.setState({ isNumberProfessionalsToCallDialogVisible: false });
  }

  componentDidMount() {
    this.getStateFromStorageAndSetState();
  }

  sendContactInformation(stateParameter, inputText) {
    const index = this.state.auxiliarIndex;
    const stateParameterIndex = (this.state[stateParameter][index]);
    switch (stateParameter) {
      case 'contacts':
        // console.log("AAAAAAA");
        // console.log('TEST: ');
        // console.log(stateParameterIndex);
        // this.setState({ [this.state[stateParameter][index]]: { name: inputText, number: this.state[stateParameter][index].number } });
        // console.log("BBBBBBB");
        // console.log(this.state);
        break;
      case 'contactCrisisCenter':

        break;
      case 'professionalsToCall':

        break;
    
      default:
        break;
    }

    /*
      contacts: [{ name: '', number: '' }, { name: '', number: '' }, { name: '', number: '' }], 
      contactCrisisCenter: { name: '', phone: '' }, 
      professionalsToCall: [{ name: '', number: '' }, { name: '', number: '' }, { name: '', number: '' }], 
    */

    this.setState({ isNameContactDialogVisible: false });
    this.setState({ isNumberContactDialogVisible: true });
  }

  sendContactInformation2(stateParameter, inputText) {
    const index = this.auxiliarIndex;
    switch (stateParameter) {
      case 'contacts':
        
        break;
      case 'contactCrisisCenter':

        break;
      case 'professionalsToCall':

        break;
    
      default:
        break;
    }

    this.setState({ isNumberContactDialogVisible: false });
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
                      multiline
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

        <DialogInput 
            isDialogVisible={this.state.isNameContactDialogVisible}
            title={'Contato'}
            message={'Digite o nome do contato'}
            hintInput={'Nome'}
            submitInput={(inputText) => { this.sendContactInformation('contacts', inputText); }}
            closeDialog={() => { this.setState({ isNameContactDialogVisible: false }); }}>
        </DialogInput>
        <DialogInput 
            isDialogVisible={this.state.isNumberContactDialogVisible}
            title={'Contato'}
            message={'Digite o número do contato'}
            hintInput={'Número'}
            submitInput={(inputText) => { this.sendContactInformation2('contacts', inputText); }}
            closeDialog={() => { this.setState({ isNumberContactDialogVisible: false }); }}>
        </DialogInput>

        <DialogInput 
            isDialogVisible={this.state.isNameContactCrisisCenterDialogVisible}
            title={'Contato de centro de saúde'}
            message={'Digite o nome do centro de saúde'}
            hintInput={'Nome'}
            submitInput={(inputText) => { this.sendContactInformation('contactCrisisCenter', inputText); }}
            closeDialog={() => { this.setState({ isNameContactCrisisCenterDialogVisible: false }); }}>
        </DialogInput>
        <DialogInput 
            isDialogVisible={this.state.isNumberContactCrisisCenterDialogVisible}
            title={'Contato de centro de saúde'}
            message={'Digite o número do centro de saúde'}
            hintInput={'Número'}
            submitInput={(inputText) => { this.sendContactInformation2('contactCrisisCenter', inputText); }}
            closeDialog={() => { this.setState({ isNumberContactCrisisCenterDialogVisible: false }); }}>
        </DialogInput>

        <DialogInput 
            isDialogVisible={this.state.isNameProfessionalsToCallDialogVisible}
            title={'Contato de profissionais'}
            message={'Digite o nome do profissional'}
            hintInput={'Nome'}
            submitInput={(inputText) => { this.sendContactInformation('professionalsToCall', inputText); }}
            closeDialog={() => { this.setState({ isNameProfessionalsToCallDialogVisible: false }); }}>
        </DialogInput>
        <DialogInput 
            isDialogVisible={this.state.isNumberProfessionalsToCallDialogVisible}
            title={'Contato de profissionais'}
            message={'Digite o número do profissional'}
            hintInput={'Número'}
            submitInput={(inputText) => { this.sendContactInformation2('professionalsToCall', inputText); }}
            closeDialog={() => { this.setState({ isNumberContactCrisisCenterDialogVisible: false }); }}>
        </DialogInput>

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
