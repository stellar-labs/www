'use strict'
export default env => {
  return {
    mode: env.production ? 'production' : 'development'
  }
}
