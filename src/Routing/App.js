import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CardSection from '../Component/ui_component/card/CardSection';
import Footer from '../Component/ui_component/Footer/Footer';
import Navbars from '../Component/ui_component/Navbar/Navbar';
import Home from '../Component/Home/Home';
import Details from '../Component/ui_component/Detail/detail';
import Login from '../Component/ui_component/Form/Login';
import Signup from '../Component/ui_component/Form/signup';

class App extends Component {
  render() {
    return (
      <>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Route exact path="/" component={Footer} />
      </>
    );
  }
}

export default App;
