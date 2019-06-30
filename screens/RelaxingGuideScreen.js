import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  ToastAndroid,
  Linking
} from 'react-native';
import AlbumList from '../components/my_components/AlbumList';
import TabBarIcon from '../components/TabBarIcon';
import { Card, CardSection } from '../components/my_components';

class RelaxingGuideScreen extends React.Component {

  listenGuide1() {
    // TODO LISTEN GUIDE 1 
    // ToastAndroid.show('Dar play no relaxamento1', ToastAndroid.SHORT);
    Linking.openURL('https://www.youtube.com/watch?v=jUMLru7M11A');
  }

  listenGuide2() {
    // TODO LISTEN GUIDE 2
    // ToastAndroid.show('Dar play no relaxamento2', ToastAndroid.SHORT);
    Linking.openURL('https://www.youtube.com/watch?v=DOVTeP21qzA');
  }

  listenGuide3() {
    // TODO LISTEN GUIDE 3 
    // ToastAndroid.show('Dar play no relaxamento3', ToastAndroid.SHORT);
    Linking.openURL('https://www.youtube.com/watch?v=EqPyyh9x88A');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.relaxingGuidesIconColumn}>
          <Card>
            <TouchableOpacity style={styles.relaxingGuidesIcon} onPress={this.listenGuide1.bind(this)}>
              <TabBarIcon
                name={
                  Platform.OS === 'ios'
                    ? 'md-headset'
                    : 'md-headset'
                }
              />
              <Text>Relaxamento Profundo 30 Minutos</Text>
            </TouchableOpacity>
          </Card>

          <Card>
            <TouchableOpacity style={styles.relaxingGuidesIcon} onPress={this.listenGuide2.bind(this)}>
              <TabBarIcon
                name={
                  Platform.OS === 'ios'
                    ? 'md-headset'
                    : 'md-headset'
                }
              />
              <Text>Meditação guiada para relaxar</Text>
            </TouchableOpacity>
          </Card>
          
          <Card>
            <TouchableOpacity style={styles.relaxingGuidesIcon} onPress={this.listenGuide3.bind(this)}>
              <TabBarIcon
                name={
                  Platform.OS === 'ios'
                    ? 'md-headset'
                    : 'md-headset'
                }
              />
              <Text>Hora de Relaxar! Música Relaxante P/ Eliminar a Ansiedade - Acalmar</Text>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <AlbumList name={'relaxingGuides'} />
        </View>
      </ScrollView>
    );
  }

}

RelaxingGuideScreen.navigationOptions = {
  title: 'Informações',
};

const styles = StyleSheet.create({
  relaxingGuidesIconColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  relaxingGuidesIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default RelaxingGuideScreen;
