import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Assets/style/style.css';
import routes from './Config/routes';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, idx, props) => 
              <Route
                key={idx}
                path={route.path}
                component={route.component}
                {...props}
              />
            )
          }
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
