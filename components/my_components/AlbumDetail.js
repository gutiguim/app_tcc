import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
// import Card from './Card';
// import CardSection from './CardSection';
// import Button from './Button';

import { Card, CardSection } from '../my_components';

// const AlbumDetail = (props) => {
// const AlbumDetail = ({ album }) => {
const AlbumDetail = ({ album }) => {
  const { title, image, url } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </CardSection>
      </TouchableOpacity>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
