import React from 'react';
import axios from 'axios';
import ArtistHeader from './ArtistHeader/ArtistHeader';
import SongsList from '../SongsList/SongsList';

class Artist extends React.Component {
  state = {
    artistData: null
  }

  getArtistData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/artists/${this.props.match.params.artistId}`)
      .then(res => {
        this.setState({
          artistData: res.data
        });        
      })
      .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getArtistData();
  }

  render() {
    return(
      <div className="d-flex flex-column align-items-center justify-content-center">
        {this.state.artistData && <ArtistHeader artistData={this.state.artistData} />}
        {this.state.artistData && <SongsList songs={this.state.artistData.songs} />}
      </div>
    )
  }
}

export default Artist;
