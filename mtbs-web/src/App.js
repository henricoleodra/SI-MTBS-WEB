import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Pages
import SideBar from './View/SideBar/sidebar';
import TandaBahayaUmum from './View/TandaBahayaUmum/tbu';
import TandaBahayaUmum2 from './View/TandaBahayaUmum/tbu2';
import Batuk from './View/Batuk/batuk';
import Batuk2 from './View/Batuk/batuk2';
import Summary from './View/Summary/collapse';
import AllInOne from './View/AllInOne';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={index}/> */}
        <Route path = "/AllInOne/" component={AllInOne}/>
        
        
        <Route path="/sidebar" component={SideBar}/>
        <Route path="/tandabahayaumum" component={TandaBahayaUmum}/>
        <Route path="/tandabahayaumum2" component={TandaBahayaUmum2}/>
        <Route path="/batuk" component={Batuk}/>
        <Route path="/batuk2" component={Batuk2}/>
        <Route path="/summary" component={Summary}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
