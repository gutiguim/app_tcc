import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, Linking, ToastAndroid, AsyncStorage } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input';

class ContactSreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      contact0: { name: 'Sem contato salvo', number: '' },
      contact1: { name: 'Sem contato salvo', number: '' },
      contact2: { name: 'Sem contato salvo', number: '' },
      contact3: { name: 'Sem contato salvo', number: '' },
      contact4: { name: 'Sem contato salvo', number: '' },
      contact5: { name: 'Sem contato salvo', number: '' },
      isNameContactDialogVisible: false,
      isNumberContactDialogVisible: false,
      auxiliarIndex: 0,
    };
  }

  componentDidMount() {
    this.getStateFromStorageAndSetState();
  }

  getStateFromStorageAndSetState = async () => {
    let value;
    try {
      value = await AsyncStorage.getItem('ContactScreen');
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
  }

  saveStateOnStorage = async () => {
    const saveState = JSON.stringify(this.state);
    console.log(saveState);

    try {
      await AsyncStorage.setItem('ContactScreen', saveState);
    } catch (error) {
      ToastAndroid.show('Não foi possível salvar as informações', ToastAndroid.SHORT);
    }
  };

  handleCall = (index, stateName) => {
    this.setState({ auxiliarIndex: index });

    if (this.state[stateName].name === 'Sem contato salvo') {
      this.setState({ isNameContactDialogVisible: true });
    } else {
      // WebBrowser.openBrowserAsync('http://docs.expo.io');
      const phoneNumber = parseInt(this.state[stateName].number, 10);
      Linking.openURL(`tel:${phoneNumber}`);
    }
  };

  sendContactInformation(inputText) {
    const index = this.state.auxiliarIndex;
    switch (index) {
      case 0:
        this.setState({ contact0: { name: inputText, number: this.state.contact0.number } });
        break;
      case 1:
        this.setState({ contact1: { name: inputText, number: this.state.contact1.number } });
        break;
      case 2:
        this.setState({ contact2: { name: inputText, number: this.state.contact2.number } });
        break;
      case 3:
        this.setState({ contact3: { name: inputText, number: this.state.contact3.number } });
        break;
      case 4:
        this.setState({ contact4: { name: inputText, number: this.state.contact4.number } });
        break;
      case 5:
        this.setState({ contact5: { name: inputText, number: this.state.contact5.number } });
        break;
      default:
        break;
    }

    this.setState({ isNameContactDialogVisible: false });
    this.setState({ isNumberContactDialogVisible: true });
  }

  sendContactInformation2(inputText) {
    const index = this.state.auxiliarIndex;
    switch (index) {
      case 0:
        this.setState({ contact0: { name: this.state.contact0.name, number: inputText } });
        break;
      case 1:
        this.setState({ contact1: { name: this.state.contact1.name, number: inputText } });
        break;
      case 2:
        this.setState({ contact2: { name: this.state.contact2.name, number: inputText } });
        break;
      case 3:
        this.setState({ contact3: { name: this.state.contact3.name, number: inputText } });
        break;
      case 4:
        this.setState({ contact4: { name: this.state.contact4.name, number: inputText } });
        break;
      case 5:
        this.setState({ contact5: { name: this.state.contact5.name, number: inputText } });
        break;
      default:
        break;
    }

    this.setState({ isNumberContactDialogVisible: false });
    this.saveStateOnStorage();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => this.handleCall(0, 'contact0')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{this.state.contact0.name}</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => this.handleCall(1, 'contact1')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{this.state.contact1.name}</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => this.handleCall(2, 'contact2')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{this.state.contact2.name}</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => this.handleCall(3, 'contact3')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{this.state.contact3.name}</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => this.handleCall(4, 'contact4')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{this.state.contact4.name}</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => this.handleCall(5, 'contact5')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{this.state.contact5.name}</Text>
              </View>
            </View>
          </Touchable>

        </View>
        <DialogInput 
          isDialogVisible={this.state.isNameContactDialogVisible}
          title={'Contato'}
          message={'Digite o nome do contato'}
          hintInput={'Nome'}
          submitInput={(inputText) => { this.sendContactInformation(inputText); }}
          closeDialog={() => { this.setState({ isNameContactDialogVisible: false }); }}>
        </DialogInput>
        <DialogInput 
            isDialogVisible={this.state.isNumberContactDialogVisible}
            title={'Contato'}
            message={'Digite o número do contato'}
            hintInput={'Número'}
            submitInput={(inputText) => { this.sendContactInformation2(inputText); }}
            closeDialog={() => { this.setState({ isNumberContactDialogVisible: false }); }}>
        </DialogInput>
      </ScrollView>
    );
  }
}

ContactSreen.navigationOptions = {
  title: 'Contatos',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});

export default ContactSreen;
