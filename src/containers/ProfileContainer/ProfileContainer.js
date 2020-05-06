import React from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {
  state = {
    profile: null,
    following: null,
    likes: null
  };

  updateUser = user => {
    this.setState({ profile: user });
  }

  componentDidMount() {
    const userId = localStorage.getItem('uId');
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {withCredentials: true})
      .then(res => {
        this.setState({
          profile: res.data,
          following: res.data.following,
          likes: res.data.likes
        });
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      this.state.profile && <Profile profile={this.state.profile} following={this.state.following} likes={this.state.likes} updateUser={this.updateUser} logout={this.props.logout} />
    )
  }
}

export default ProfileContainer;
