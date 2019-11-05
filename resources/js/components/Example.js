
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Footer from "./Footer/Footer";
import Pane from "./Pane";
import Content from "./Content/Content";
export default class Example extends Component {
  render() {
    return (
      <div>
        <Pane  />
        <Content />
        <Footer />

      </div>
    );
  }
} 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}