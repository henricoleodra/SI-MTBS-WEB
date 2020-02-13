import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Pages
import SideBar from './View/SideBar/sidebar';
import TandaBahayaUmum from './View/TandaBahayaUmum/tbu';
import Summary from './View/Summary/collapse';
// import index from '.index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={index}/> */}
        <Route exact path="/sidebar" component={SideBar}/>
        <Route path="/tandabahayaumum" component={TandaBahayaUmum}/>
        <Route path="/summary" component={Summary}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
