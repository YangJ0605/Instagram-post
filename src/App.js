import React from 'react';
import Post from './pages/post'
import PostContent from './pages/post-content'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/post' exact>
          <Post></Post>
        </Route>
        <Route path='/post/:id' exact>
          <PostContent/>
        </Route>
        <Redirect from='/' exact to='/post'/>
      </Switch>
    </Router>
  );
}

export default App;
