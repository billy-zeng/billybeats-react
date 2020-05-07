import React from 'react';
import axios from 'axios';
import ReactPlayer from "react-player";
import SongInteraction from './SongInteraction/SongInteraction';

class SongDetail extends React.Component {
  state = {
    songData: null
  }

  getSongData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/songs/${this.props.match.params.songId}`)
      .then(res => {
        this.setState({
          songData: res.data
        });        
        console.log(res.data)
      })
      .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getSongData();
  }

  render() {
    return(
      <div className="d-flex flex-column align-items-center justify-content-center">
        {
          this.state.songData && 
            (<div className="mb-3">
              <ReactPlayer
                url={this.state.songData.url}
                width='80vw'
              />
              <SongInteraction song={this.state.songData} />
            </div>)
        }

      </div>
    )
  }
}

export default SongDetail;
