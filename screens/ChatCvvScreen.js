import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import { Linking } from 'expo';

class ChatCvvScreen extends React.Component {
  openCVVChat() {
    Linking.openURL('https://www.cvv.org.br/chat/');
  }

  render() {
    return (
      <View style={styles.centerInside}>
        <TouchableOpacity style={styles.itemsInsideCentered} onPress={this.openCVVChat.bind(this)}>
          <TabBarIcon
            name={
              Platform.OS === 'ios'
                ? 'ios-chatboxes'
                : 'md-chatboxes'
            }
          />
          <Text>Abrir chat com CVV</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ChatCvvScreen.navigationOptions = {
  title: 'Chat CVV',
};

const styles = StyleSheet.create({
  centerInside: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsInsideCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatCvvScreen;
