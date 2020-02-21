import React from "react";
import {Component} from "react";
import {HeaderComponent} from "../../components/header/header.component";

class AppDesktopComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent>
          <h1>Hello Desktop</h1>
        </HeaderComponent>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default AppDesktopComponent;