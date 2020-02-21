import React from "react";
import { Component } from 'react';
import "reflect-metadata";

import "./styles.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}
