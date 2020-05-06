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
        <li key={i}><Link to={`/players/${likedSong._id}`}>{likedSong.title}</Link></li>
      )
    })
  }

  render(){
    // console.log(this.state.profile.following)
    // console.log(this.state.profile.likes)
    return (
      <div className="col-sm-9 d-flex flex-column align-items-center justify-content-start mt-5">
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <div className="container d-flex flex-row align-items-center justify-content-center">
            <ul>
              <h3>Artists you are following</h3>  
              {this.props.profile && this.displayFollowing(this.props.following)}   
            </ul>
          </div>
          <div className="container d-flex flex-row align-items-center justify-content-center">
            <ul>
              <h3>Songs you've liked</h3>
              {this.props.profile && this.displayLikes(this.props.likes)}  
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMain;
