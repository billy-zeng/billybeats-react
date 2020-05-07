import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import Artist from '../components/Artist/Artist';
import Stream from '../components/Stream/Stream';
import Library from '../components/Library/Library';
import SongDetail from '../components/SongDetail/SongDetail';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        path='/profile'
        render={() => (
          <ProfileContainer logout={props.logout} />
        )}
      />
      <Route path='/artists/:artistId' component={Artist} />
      <Route path='/songs/:songId' component={SongDetail} />
      <Route path='/stream' component={Stream} />
      <Route path='/library' component={Library} />
    </Switch>
  )
}

export default Routes;
