import React from 'react';
import SongsContainer from '../../containers/SongsContainer/SongsContainer';
import './Home.css';

const Home = props => {
  return (
    <>
      <h4 className="home-header">Welcome to BillyBeats</h4>
      <SongsContainer />
    </>
  );
}

export default Home;
