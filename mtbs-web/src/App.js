import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Pages
import SideBar from './View/SideBar/sidebar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SideBar}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
