import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Whenever you got a ScrollView you must add a style property of "flex: 1" to your root view element

class AlbumList extends Component {

  state = { 
    information: [
      { title: 'Information 1', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
      { title: 'Information 2', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
      { title: 'Information 3', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
      { title: 'Information 4', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
      { title: 'Information 5', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
    ],
    relaxingGuides: [
      { title: 'Relaxing 1', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
      { title: 'Relaxing 2', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
      { title: 'Relaxing 3', artist: 'TEST', image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg', thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg' },
    ]
};

  // componentWillMount() {
  //   fetch('https://rallycoding.herokuapp.com/api/music_albums')
  //    .then(response => response.json())
  //    .then(data => this.setState({ albums: data }));
  // }

  renderWhich() {
    const name = this.props.name;
    switch (name) {
      case 'information':
        return this.renderInformation();
      case 'relaxingGuides':
        return this.renderRelaxingGuides();
      default:
        break;
    }
  }

  renderInformation() {
    return this.state.information.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  renderRelaxingGuides() {
    return this.state.relaxingGuides.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderWhich()}
      </ScrollView>
    );
  }
}

export default AlbumList;
