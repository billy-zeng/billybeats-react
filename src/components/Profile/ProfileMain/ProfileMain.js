import React from 'react';
import { Link } from 'react-router-dom';

class ProfileMain extends React.Component {
   
  displayFollowing = followedArtists => {
    console.log(followedArtists)
    return followedArtists.map((followedArtist, i) => {
      return (
        <li key={i}><Link to={`/artists/${followedArtist._id}`}>{followedArtist.name}</Link></li>
      )
    })
  }

  displayLikes = likedSongs => {
    console.log(likedSongs)
    return likedSongs.map((likedSong, i) => {
      return (
        <li key={i}><Link to={`/songs/${likedSong._id}`}>{likedSong.title}</Link></li>
      )
    })
  }

  render(){
    return (
      <div className="col-sm-9 d-flex flex-column align-items-start justify-content-start mt-3">
        <div className="container d-flex flex-column align-items-start justify-content-start">
          <div className="container d-flex flex-row align-items-start justify-content-start">
            <ul>
              <h4>Artists you are following</h4>  
              {this.props.profile && this.displayFollowing(this.props.following)}   
            </ul>
          </div>
          <div className="container d-flex flex-row align-items-start justify-content-start">
            <ul>
              <h4>Songs you've liked</h4>
              {this.props.profile && this.displayLikes(this.props.likes)}  
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMain;
