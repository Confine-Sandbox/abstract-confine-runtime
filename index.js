const EventEmitter = require('events')

module.exports = class AbstractConfineRuntime extends EventEmitter {
  constructor (opts = {}) {
    super()
    this.source = opts.source
    this.ipc = opts.ipc
    this.opts = opts
  }

  async init () {
  }

  async run () {
  }

  async close () {
  }

  async handleRequest (body) {

  }
}