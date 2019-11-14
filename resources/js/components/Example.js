
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Footer from "./footer/footer";
import Pane from "./pane";
import Content from "./content/content";
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