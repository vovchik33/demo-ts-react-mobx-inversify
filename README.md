[Module loader](https://ru.reactjs.org/docs/code-splitting.html) Instead of 
```
require('bundle-loader?name=[root.t]!./bootstrap/root/app-desktop.component');
render(<App />, rootElement)
```