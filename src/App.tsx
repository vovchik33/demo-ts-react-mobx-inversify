import React from "react";
import { Component } from 'react';
import {Provider} from "inversify-react";
import {Container} from "inversify";
import "reflect-metadata";
import {MainStore} from "./stores/main.store";

import "./styles.css";

export class App extends Component {
  container: Container;

  constructor(props: any, context: any) {
    super(props, context);

    this.container = new Container();
    this.container.bind(MainStore).toSelf();
  }

  render() {
    return (
      <Provider container={this.container}>
        <div className="App">
          {this.props.children}
        </div>
      </Provider>
    );
  }
}
