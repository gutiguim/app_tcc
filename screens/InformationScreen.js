import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import AlbumList from '../components/my_components/AlbumList';

class InformationScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AlbumList name={'information'} />
      </View>
    );
  }

}

InformationScreen.navigationOptions = {
  title: 'Informações',
};

const styles = StyleSheet.create({

});

export default InformationScreen;
