import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { SignIn } from './';
import {Slack} from './';

function Home() {
  return (
    <div> Home</div>
  );
}


class App extends Component {
  state = {
    counter: 1,
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/main" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
