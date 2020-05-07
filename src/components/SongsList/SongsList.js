import React from 'react';
// import SongCard from './SongCard/SongCard.js';

class SongsList extends React.Component {

  displaySongs = songs => {    
    return songs.map((song, i) => {
      // return <SongCard key={song._id} songData={song} />
      return (
        <li key={i}>{song.title}</li>
      )
    });
  };

  render(){
    return(
      <div className="col mt-4">
        {this.displaySongs(this.props.songs)}
      </div>
    )
  }
}

export default SongsList;
