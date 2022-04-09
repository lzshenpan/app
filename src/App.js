import PublicRoutes from "./router"
import { history } from './redux/store.js';


import React, { Component } from 'react';

class App extends Component {
  
  render() {
    return (
      <PublicRoutes history={history}/>
    );
  }
}

export default App;