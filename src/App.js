import React, {Component} from 'react';

import Species from './containers/Species/Species';
import Layout from './components/Layout/Layout'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Layout >
          <Species />
        </Layout>
      </div>
    );
  }

}

export default App;
