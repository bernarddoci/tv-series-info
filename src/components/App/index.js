import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar';
import Home from '../../components/Home';
// import TvSeries from '../../components/TvSeries';
// import TvShows from '../../components/TvShows';
// import People from '../../components/People';
import Footer from '../../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/" component={TvSeries} /> */}
          {/* <Route path="/" component={TvShows} />
          <Route path="/" component={People} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
