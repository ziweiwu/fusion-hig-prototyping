# hig-react

# DEPRECATION WARNING: this package is no longer getting updates. Use the component packages published in the @hig namespace, and browse their source at [`packages`](..).

React components for the HIG

## Consume

This project uses [node](http://nodejs.org) and [yarn](https://yarnpkg.com). Go check them out if you don't have them locally installed.

```sh
$ yarn add hig-react
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import { Button } from 'hig-react';

// give me all the components at once
import * as Hig from 'hig-react';

// CSS Style (works well with webpack)
import 'hig-react/lib/hig-react.css';

// using CommonJS modules
var ReactHIG = require('hig-react');
var Button = ReactHIG.Button;
```

You can find the library on `window.ReactHIG`.

## Usage

for more code examples see the hig website: [hig.autodesk.com](http://hig.autodesk.com)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'hig-react';
import 'hig-react/lib/hig-react.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button title="Hello World!" />
      </div>
    )
  }
}
```

## Contribute

Please see our [DEVELOPING.md](./DEVELOPING.md) for running our `playground` locally to play around with the source and see our [CONTRIBUTING.md](../../CONTRIBUTING.md) and how to get your code back in the repo.
