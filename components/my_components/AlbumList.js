import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Whenever you got a ScrollView you must add a style property of "flex: 1" to your root view element

class AlbumList extends Component {

  state = { 
    information: [
      { title: 'Saúde mental', image: 'https://drauziovarella.uol.com.br/wp-content/uploads/2012/10/cerebro-e1552586077908.jpg', url: 'https://drauziovarella.uol.com.br/entrevistas-2/saude-mental-entrevista/' },
      { title: 'Ansiedade', image: 'http://portalamigodoidoso.com.br/wp-content/uploads/2017/10/ansiedade.png', url: 'https://www.minhavida.com.br/saude/temas/ansiedade' },
      { title: 'Distimia', image: 'https://drauziovarella.uol.com.br/wp-content/uploads/2012/01/201903_drauzio_homem-triste-tedio_33997609_londondeposit_1000x563.jpg', url: 'https://drauziovarella.uol.com.br/entrevistas-2/distimia-entrevista/' },
      { title: 'Depressão', image: 'https://drauziovarella.uol.com.br/wp-content/uploads/2013/03/dv-mulher-ansiedade-1000x563.jpg', url: 'https://drauziovarella.uol.com.br/doencas-e-sintomas/depressao/' },
      { title: 'Transtorno do estresse pós-traumático', image: 'https://drauziovarella.uol.com.br/wp-content/uploads/2012/05/iStock_000014716501Small_wragg_destaque11-e1357567791428.jpg', url: 'https://drauziovarella.uol.com.br/doencas-e-sintomas/transtorno-do-estresse-pos-traumatico/' },
    ],
    relaxingGuides: [
      { title: 'Estratégia de relaxamento', image: 'https://amenteemaravilhosa.com.br/wp-content/uploads/2017/05/Jacobson1.png', url: 'http://possibilidades.com.br/meditacao/relaxamento.asp' },
      { title: 'Como Relaxar a Mente', image: 'https://www.eadconcursos.com.br/wp-content/uploads/2017/01/local-acalmar-a-mente.jpg', url: 'https://www.eadconcursos.com.br/como-relaxar-a-mente/' },
      { title: 'Conjunto de técnicas para o alívio de tensões', image: 'https://i1.wp.com/www.guiaestudo.com.br/wp-content/uploads/2019/02/relaxamento-e-massagem.jpg', url: 'https://www.guiaestudo.com.br/relaxamento' },
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
