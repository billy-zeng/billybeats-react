import React from 'react';

// Components
import Container from 'react-bootstrap/Container';

// Styles
import './ArtistHeader.css';

const ArtistHeader = props => {
  return(
    <Container id="artist-header" className="d-flex flex-row align-items-start justify-content-center mt-3">
      <div id="artist-img-wrapper" className="d-flex col-sm-3 align-items-center justify-content-center">
        <img id="artist-picture" src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="profile-pic"/>
      </div>
      <div id="artist-overview" className="col-sm-9 d-flex flex-column align-items-start justify-content-center text-light bg-dark pl-5">
        <h1>{props.artistData.name}</h1>
      </div>
    </Container>
  );
};

export default ArtistHeader;
