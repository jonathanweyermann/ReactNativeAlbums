// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make a component
class AlbumList extends Component {
  state = { albums: [] };


  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      console.log('componentWillMount is AlbumList');
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title}/>
    );
  }

  render() {
    console.log(this.state);

    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
    );
  }
}

// Make the component available to other parts of the app
export default AlbumList;
