import React from "react";
import axios from 'axios';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

import './SongCard.css'
 
class SongCard extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    liked: false,
    artistPage: this.props.artistPage
  }

  likeSong = () =>{
    axios.defaults.withCredentials = true
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/likes/${this.props.song._id}`)
      .then(res => {
        this.setState({
          liked: true
        })
      })
      .catch(err => console.log(err.response));
  }

  unlikeSong = () =>{
    axios.defaults.withCredentials = true
    axios    
      .delete(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/likes/${this.props.song._id}`)
      .then(res => {
        this.setState({
          liked: false
        })
      })
      .catch(err => console.log(err.response));
  }

  getUserLikes = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`, {withCredentials: true})
      .then(res => {
        res.data.likes.forEach(song => {
          if(song._id === this.props.song._id) {
            this.setState({
              liked: true
            });
          }
        });
      })
      .catch(err => console.log(err.response))
  }
  
  componentDidMount(){
    this.getUserLikes();
  }

  render(){
    return (
      <div className="ml-4 pb-4">
        <ReactPlayer
          url={this.props.song.url}
          height='80%'
          width='75%'
        />
        {
          !this.state.liked
            ? <button onClick={this.likeSong} type="button" className="btn btn-sm like-btn notliked justify-self-center mt-2"><i className="fas fa-heart"></i></button>
            : <button onClick={this.unlikeSong} type="button" className="btn btn-sm like-btn liked justify-self-center mt-2"><i className="fas fa-heart"></i></button>
        }
        {
          !this.state.artistPage
            ? <Link to={`/artists/${this.props.song.artist._id}`} className="ml-4">Go to {this.props.song.artist.name}</Link>
            : ""
        }
        <Link to={`/songs/${this.props.song._id}`} className="ml-4">Go to {this.props.song.title}</Link>
      </div>
    )
  }
}
 
export default SongCard;
