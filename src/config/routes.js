import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import Artist from '../components/Artist/Artist';
import Stream from '../components/Stream/Stream';

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
      <Route path='/stream' component={Stream} />
    </Switch>
  )
}

export default Routes;
