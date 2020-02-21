import * as React from "react";
import {Container, interfaces} from "inversify";
import {Provider} from "inversify-react";
import {ComponentClass, ComponentType} from "react";

export interface IModuleConfig {
  addBindings(container: interfaces.Container): void;
}

export interface ConnectedComponent {
  <ComponentT extends ComponentType>(component: ComponentT): ComponentT;
}

export function withModule(
  ...moduleConfigs: Array<IModuleConfig>
) {
  return function(Component: ComponentClass) {
    return class extends React.Component {
      private readonly _container = new Container();

      componentWillMount(): void {
        moduleConfigs.forEach((config:IModuleConfig) => {
          config.addBindings(this._container);
        })
      }

      render() {
        return (
          <Provider container={this._container}>
            <Component {...this.props}/>
          </Provider>
        )
      }
    }
  } as ConnectedComponent;
}