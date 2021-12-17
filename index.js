const EventEmitter = require('events')

exports.AbstractConfineRuntime = class AbstractConfineRuntime extends EventEmitter {
  constructor (opts = {}) {
    super()
    this.source = opts.source
    this.opts = opts
  }

  async init () {
  }

  async run () {
  }

  async close () {
  }

  describeAPI () {
    return new APIDescription()
  }

  async handleAPICall (methodName, params) {
    throw new MethodNotFound()
  }
}

exports.APIDescription = class APIObject {
  constructor (children = []) {
    this.type = 'api'
    this.children = children
  }
}

exports.APIObject = class APIObject {
  constructor (name, children) {
    this.type = 'object'
    this.name = name
    this.children = children
  }
}

exports.APIMethod = class APIMethod {
  constructor (name) {
    this.type = 'method'
    this.name = name
  }
}

class RuntimeError extends Error {
  constructor (code, message, data) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.data = data;
  }
}

exports.MethodNotFound = class MethodNotFound extends RuntimeError {
  static CODE = -1
  constructor (msg, data) {
    super(MethodNotFound.CODE, msg || 'Method not found', data)
  }
}