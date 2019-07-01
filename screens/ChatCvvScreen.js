import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';

class ChatCvvScreen extends React.Component {
  openCVVChat() {
    Linking.openURL('https://www.cvv.org.br/chat/');
  }

  render() {
    return (
      <View style={styles.centerInside}>
        <TouchableOpacity style={styles.itemsInsideCentered} onPress={this.openCVVChat.bind(this)}>
          <Image
            style={{ width: 250, height: 250 }}
            source={
                require('../assets/images/chatCVV.png')
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
