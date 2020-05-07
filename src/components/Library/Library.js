import React from 'react';
import axios from 'axios';
import SongsList from '../SongsList/SongsList';
import './Library.css';

class Library extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    songs: []
  }

  // gets user's liked songs
  getSongs() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`, {withCredentials: true})
      .then(res => {     
        console.log(res.data.likes)
        this.setState({
          songs: res.data.likes
        })
      })
      .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getSongs();
  }

  render(){
    console.log(this.state)
    return (
      <>
        <h4 className="library-header">Songs that you've liked</h4>
        <SongsList songs={this.state.songs} />
      </>
    )
  }
}

export default Library;
