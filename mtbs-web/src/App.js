import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Pages
import MTBS from './Pages/mtbs/MTBS';
import Beranda from './Pages/beranda/Beranda';
import MulaiPemeriksaan from './Pages/mulaipemeriksaan/MulaiPemeriksaan';
//import daftar nama anak
import PencarianDataAnak from './Pages/pencariandataanak/PencarianDataAnak';
import DataAnak from './Pages/dataanak/dataanak';
import PemeriksaanAnak from './Pages/pemeriksaananak/PemeriksaanAnak';
import IsiDataAnak1 from './Pages/isidataanak/IsiDataAnak1';
import IsiDataAnak2 from './Pages/isidataanak/IsiDataAnak2';

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
        <Route path = "/IsiDataAnak1" component={IsiDataAnak1}/>
        <Route path = "/IsiDataAnak2" component={IsiDataAnak2}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
