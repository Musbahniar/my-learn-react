import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/customGO.css';

import Routes from './routes';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "GOLearn",
      home: false,
      redirectToReferrer: false
    }
  }

  componentDidMount() {
    document.title = "GOlearn";
  }

  render() {
    return (
      <div className="App">
        {/* <Header name={this.state.appName} /> */}
        {/* { !this.state.redirectToReferrer ? <Header name={this.state.appName} /> : <Menu name={this.state.appName} /> } */}
        <Routes name={this.state.appName}/>
        <Footer />
      </div>
    );
  }
}

export default App;
