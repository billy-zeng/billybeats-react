import React from 'react';
import SongsList from '../../components/SongsList/SongsList'
import axios from 'axios';

class TeamsContainer extends React.Component {
  state = {
    songs: []
  };

  getSongs = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/songs/`)
    .then(res => {
      this.setState({
        songs: res.data
      });
    })
    .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getSongs();
  };

  render() {
    return (
      <SongsList songs={this.state.songs} />
    )
  }
}

export default SongsContainer;
