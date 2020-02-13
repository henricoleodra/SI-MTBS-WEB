import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Pages
import SideBar from './View/SideBar/sidebar';
import TandaBahayaUmum from './View/TandaBahayaUmum/tbu';
import Summary from './View/Summary/collapse';
<<<<<<< HEAD
// import index from '.index';
=======
>>>>>>> 180d23f44ad6a1c49cd525952fd418004cd2720c

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
