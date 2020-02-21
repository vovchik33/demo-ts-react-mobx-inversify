import React from "react";
import {Component} from "react";
import {HeaderComponent} from "../../common/components/header/header.component";

class AppMobileComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent>
          <h1>Hello Mobile</h1>
        </HeaderComponent>
      </div>
    );
  }
}

export default AppMobileComponent;