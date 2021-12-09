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
  constructor (opts) {
    super(opts)
    // sets this.source, this.ipc, and this.opts
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

  async handleRequest (body) {
    // handle requests sent to the runtime by the host environment
  }
}
```

## License

MIT