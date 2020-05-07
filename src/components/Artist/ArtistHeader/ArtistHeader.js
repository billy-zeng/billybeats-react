import React from 'react';
import axios from 'axios';

// Components
import Container from 'react-bootstrap/Container';

// Styles
import './ArtistHeader.css';

class ArtistHeader extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    following: false
  }

  followArtist = () =>{
    axios.defaults.withCredentials = true
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/following/${this.props.artistData._id}`)
      .then(res => {
        this.setState({
          following: true
        })
      })
      .catch(err => console.log(err.response));
  }

  unfollowArtist = () =>{
    axios.defaults.withCredentials = true
    axios    
      .delete(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/following/${this.props.artistData._id}`)
      .then(res => {
        this.setState({
          following: false
        })
      })
      .catch(err => console.log(err.response));
  }

  getUserFollows = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`, {withCredentials: true})
      .then(res => {
        res.data.following.forEach(artist => {
          if(artist._id === this.props.artistData._id) {
            this.setState({
              liked: true
            });
          }
        });
      })
      .catch(err => console.log(err.response))
  }
  
  componentDidMount(){
    this.getUserFollows();
  }
  
  render(){
    return(
      <Container id="artist-header" className="d-flex flex-row align-items-start justify-content-center mt-3">
        <div id="artist-img-wrapper" className="d-flex col-sm-3 align-items-center justify-content-center">
          <img id="artist-picture" src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="profile-pic"/>
        </div>
        <div id="artist-overview" className="col-sm-9 d-flex flex-column align-items-start justify-content-center text-light bg-dark pl-5">
          <h1>{this.props.artistData.name}</h1>
          {
            this.state.liked
              ? <button onClick={this.unfollowArtist} type="button" className="btn follow-btn justify-self-center mt-2">Unfollow</button>
              : <button onClick={this.followArtist} type="button" className="btn follow-btn justify-self-center mt-2">+ Follow</button>
          }
        </div>
      </Container>
    )
  }
};

export default ArtistHeader;
