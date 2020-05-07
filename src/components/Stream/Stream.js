import React from 'react';
import axios from 'axios';
import SongsList from '../SongsList/SongsList';
import './Stream.css';

class Stream extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    songs: []
  }

  // gets user's followed artists
  getFollowing() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`, {withCredentials: true})
      .then(res => {     
        this.getSongs(res.data.following)
      })
      .catch(err => console.log(err.response))
  }

  // get all songs by user's followed artists
  getSongs(artists){
    const songs = [];
    artists.forEach(artist => 
      artist.songs.forEach(song => 
        axios
          .get(`${process.env.REACT_APP_API_URL}/songs/${song}`, {withCredentials: true})
          .then(res => {
            songs.push(res.data);
            this.setState({
              songs: songs
            })
          })
          .catch(err => console.log(err.response))
      )
    )
  }

  componentDidMount() {
    this.getFollowing();
  }

  render(){
    console.log(this.state)
    return (
      <>
        <h4 className="stream-header">Hear the latest posts from the people you're following</h4>
        <SongsList songs={this.state.songs} />
      </>
    )
  }
}

export default Stream;
