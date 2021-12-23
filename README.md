# Abstract Confine Runtime

The base class for [confine](https://github.com/confine-sandbox/confine) runtimes.

```
npm i abstract-confine-runtime
```

Example usage:

```js
const fs = require('fs')
const { AbstractConfineRuntime, APIDescription, APIObject, APIMethod, MethodNotFound } = require('abstract-confine-runtime')

module.exports = class MyConfineRuntime extends AbstractConfineRuntime {
  constructor (opts) {
    super(opts)
    // ^ sets this.source, and this.opts
  }

  async init () {
    // do any init that's needed prior to syscalls are restricted

    // be sure to emit a 'closed' event if possible
    this.myCustomProcess.on('closed', () => {
      this.emit('closed', exitCode) // include unix-style exit code as first param
    })
  }

  async run () {
    // execute the script
  }

  async close () {
    // close the script (if possible)
  }

  configure (opts) {
    // change any options after initialization
  }

  describeAPI () {
    // return a tree structure to describe the api, see below
    return new APIDescription()
  }

  async handleAPICall (methodName, params) {
    // handle any API calls sent to the runtime by the host environment
    // if the method does not exist, throw MethodNotFound
    throw new MethodNotFound()
  }
}
```

The `describeAPI()` method needs to provide a tree of `APIDescription`, `APIObject`, and `APIMethod` objects, like so:

```js
/* The API we want to represent: */
// hello()
// sub.method()
// zed()
return new APIDescription([
  new APIMethod('hello'),
  new APIObject('sub', [
    new APIMethod('method')
  ]),
  new APIMethod('zed')
])
```

## License

MIT