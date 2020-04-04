import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Pages
import MTBS from './Pages/mtbs/MTBS';
import Beranda from './Pages/beranda/Beranda'
import DataAnak from './Pages/dataanak/dataanak'
import KunjunganAnak from './Pages/kunjungananak/kunjungananak'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={index}/> */}
        <Route exact path = "/" component={Beranda}/>
        <Route path = "/MTBS/" component={MTBS}/>
        <Route path = "/DataAnak/" component={DataAnak}/>
        <Route path = "/KunjunganAnak/" component={KunjunganAnak}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
