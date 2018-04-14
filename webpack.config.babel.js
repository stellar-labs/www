'use strict'
import mode from './webpack/mode.babel.js'
import entry from './webpack/entry.babel.js'
import output from './webpack/output.babel.js'
import devServer from './webpack/devServer.babel.js'
import module from './webpack/module.babel.js'
import plugins from './webpack/plugins.babel.js'
export default env => {
  return {
    ...mode(env),
    entry,
    output,
    ...plugins(env),
    module,
    devServer
  }
}
