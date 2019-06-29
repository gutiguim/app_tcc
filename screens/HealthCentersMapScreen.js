import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';

class HealthCentersMapScreen extends React.Component {

  render() {
    return (

        <MapView 
            style={{ flex: 1 }}        
            region={{
                latitude: 42.882004,
                longitude: 74.582748,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}        
            showsUserLocation     
        />
    );
  }

}

HealthCentersMapScreen.navigationOptions = {
    title: 'Mapa Centros de Saúde',
};

const styles = StyleSheet.create({

});

export default HealthCentersMapScreen;
