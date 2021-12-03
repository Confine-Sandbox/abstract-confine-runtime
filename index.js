module.exports = class AbstractConfineRuntime {
  constructor (sourcePath, opts = {}) {
    this.sourcePath = sourcePath
    this.opts = opts
  }

  async init () {
  }

  async run () {
  }

  async close () {
  }
}