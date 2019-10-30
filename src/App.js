import React, { Component } from 'react';

import './App.css';
//Components for the website
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Our_Story from './components/Our_Story'
import Videos from './components/Videos'
import Application from './components/Applications'

//TODO: sign in 
//amplify code
//import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component = {Our_Story} />
          <Route path='/Our_Story' component={Our_Story}/>
          <Route path='/Blogs' component={Blogs}/>
          <Route path='/App Games' component={Application}/>
          <Route path='/Videos' component={Videos}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
        <h1> We make games, apps and videos.</h1>
        
        
      </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
//export default withAuthenticator(App, true);
