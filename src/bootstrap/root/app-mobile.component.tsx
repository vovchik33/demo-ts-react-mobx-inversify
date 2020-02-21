import React from "react";
import {HeaderComponent} from "../../common/components/header/header.component";
import {IModuleConfig, withModule} from "../../common/utils/with-module/with-module.component";
import {MainStore} from "../../common/stores/main.store";

const config:IModuleConfig = {
  addBindings: (container) => {
    container.bind(MainStore).toSelf();
  }
};

@withModule(config)
class AppMobileComponent extends React.Component {
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