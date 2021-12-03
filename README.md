# Abstract Confine Runtime

The base class for [confine](https://github.com/confine-sandbox/confine) runtimes.

```
npm i abstract-confine-runtime
```

Example usage:

```js
const fs = require('fs')
const AbstractConfineRuntime = require('abstract-confine-runtime')

module.exports = class MyConfineRuntime extends AbstractConfineRuntime {
  constructor (scriptPath, opts) {
    super(scriptPath, opts)
  }

  async init () {
    // do any init that's needed prior to syscalls are restricted
  }

  async run () {
    // execute the script
  }

  async close () {
    // close the script (if possible)
  }
}
```

## License

MIT