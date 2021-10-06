
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import './App.css';
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/soumyadeep">
            <Navbar title="Soumyadeep" link="Contact Us" active="home" />
            <TextForm heading="Enter example text here" />
          </Route>
          <Route exact path="/contactUs">
            <Navbar title="Soumyadeep" link="Contact Us" active="contactUs" />
            <ContactUs />
          </Route>
          <Route exact path="/">
            <Navbar title="Soumyadeep" link="Contact Us" active="home" />
            <TextForm heading="Enter example text here" />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
