import React from 'react';
// import logo from './logo.svg'; example importing image
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Assets/style/style.css';

//Import Components
import MTBS from './Pages/mtbs/MTBS';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={index}/> */}
        <Route path = "/MTBS/" component={MTBS}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
