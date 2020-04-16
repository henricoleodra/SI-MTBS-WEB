import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Pages
import MTBS from './Pages/mtbs/MTBS';
import Beranda from './Pages/beranda/Beranda'
import MulaiPemeriksaan from './Pages/mulaipemeriksaan/MulaiPemeriksaan'
//import daftar nama anak
import PencarianDataAnak from './Pages/pencariandataanak/PencarianDataAnak'
import DataAnak from './Pages/dataanak/dataanak'
import PemeriksaanAnak from './Pages/pemeriksaananak/PemeriksaanAnak'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={index}/> */}
        <Route exact path = "/" component={Beranda}/>
        <Route path = "/MTBS/" component={MTBS}/>
        <Route path = "/PencarianDataAnak" component={PencarianDataAnak}/>
        <Route path = "/DataAnak" component={DataAnak}/>
        <Route path = "/PemeriksaanAnak" component={PemeriksaanAnak}/>
        <Route path = "/MulaiPemeriksaan" component={MulaiPemeriksaan}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
