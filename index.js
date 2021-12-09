module.exports = class AbstractConfineRuntime {
  constructor (opts = {}) {
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