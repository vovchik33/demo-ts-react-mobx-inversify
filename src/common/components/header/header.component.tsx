import React from "react";
import {Component} from "react";
import {MainStore} from "../../stores/main.store";
import {resolve} from "inversify-react";

export class HeaderComponent extends Component {
  @resolve(MainStore)
  private readonly mainStore: MainStore;

  render() {
    return (
      <div>
        {this.mainStore.user}
        {this.props.children}
      </div>
    )
  }
}