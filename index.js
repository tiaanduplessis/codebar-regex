'use strict'

module.exports = function () {
  const pattern = `[A-D][0-9\\-\\$\\:\\.\\+\\/]+[A-D]`
  return new RegExp('^' + pattern + '$', 'g')
}
