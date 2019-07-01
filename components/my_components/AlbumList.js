import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Whenever you got a ScrollView you must add a style property of "flex: 1" to your root view element

class AlbumList extends Component {

  state = { 
    information: [
      { title: 'Dicas para controlar ansiedade', image: 'http://portalamigodoidoso.com.br/wp-content/uploads/2017/10/ansiedade.png', url: 'https://www.sbcoaching.com.br/blog/qualidade-de-vida/como-controlar-ansiedade/' },
      { title: 'Sinais de alerta para riscos de suicídio', image: 'https://abrilsaude.files.wordpress.com/2017/11/suicidio-01.jpg', url: 'https://www.buzzfeed.com/br/annaborges/sinais-de-alerta-do-suicidio' },
      { title: 'Sugestões de como agir em relação ao comportamento suicida', image: 'https://drauziovarella.uol.com.br/wp-content/uploads/2012/10/cerebro-e1552586077908.jpg', url: 'https://drauziovarella.uol.com.br/entrevistas-2/distimia-entrevista/' },
      { title: 'Prevenção ao suicídio', image: 'https://uploads.bemparana.com.br/upload/image/noticia/noticia_741062_img1_setembroamarelo.jpg', url: 'https://www.polbr.med.br/ano17/wal0817.php' },
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
