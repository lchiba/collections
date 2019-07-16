'use strict'

const mapSeries = require('./mapSeries')

/**
 * Asynchronous version of Array#filter(), running the (async) testing
 * function **in series**. The `callback` should return `true`
 * if an item should be included in the resulting collection.
 *
 * @param {Function} callback
 *
 * @returns {Collection}
 */
module.exports = async function filter (array, callback) {
  const mapped = await mapSeries(array, callback)

  return array.filter((_, i) => mapped[i])
}
