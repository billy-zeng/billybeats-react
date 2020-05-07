import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import './SongInteraction.css'
 
class SongInteraction extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    liked: false,
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
      <>
        {
          !this.state.liked
            ? <button onClick={this.likeSong} type="button" className="btn btn-sm like-btn notliked justify-self-center mt-2"><i className="fas fa-heart"></i></button>
            : <button onClick={this.unlikeSong} type="button" className="btn btn-sm like-btn liked justify-self-center mt-2"><i className="fas fa-heart"></i></button>
        }
        <Link to={`/artists/${this.props.song.artist._id}`} className="ml-4">Go to {this.props.song.artist.name}</Link>
      </>
    )
  }
}
 
export default SongInteraction;
