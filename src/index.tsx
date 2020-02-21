import * as React from "react";
import { render } from "react-dom";

import {App} from "./App";

const rootElement = document.getElementById("root");

const deviceType: string = "mobile";
const AppComponent = React.lazy(() => import(`./bootstrap/root/app-${deviceType}.component`));
render(
  <App>
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppComponent/>
    </React.Suspense>
  </App>,
  rootElement
);
