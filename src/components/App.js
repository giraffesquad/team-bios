import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppHeader from './AppHeader';
import Landing from '../containers/Landing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <AppHeader />
          <div className="app-content-container" >
              <Landing/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
