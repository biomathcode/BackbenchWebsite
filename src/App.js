import React, { Component } from 'react';

import './App.css';
//Components for the website
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./components/Home"
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
  state = {
    videos : [
      {id:1, content: 'https://www.youtube.com/embed/ccTdAlVRZn0'},
      {id:2, content: 'https://youtube.com/embed/u7qw4-QgPXk'},
      {id:3, content: 'https://youtube.com/embed/UwN0eFvTtf4'},
      {id:4, content: 'https://youtube.com/embed/wgzJJS75yfE'},
      {id:5, content: 'https://youtube.com/embed/boEDJeTqah4'},
      {id:6, content: 'https://youtube.com/embed/600HsNST7sk'},
    ]

  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route path='/Our_Story' component={Our_Story}/>
          <Route path='/Blogs' component={Blogs}/>
          <Route path='/App Games' component={Application}/>
          <Route path='/Videos' component={Videos}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
      </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
//export default withAuthenticator(App, true);
