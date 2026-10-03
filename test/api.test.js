'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const checkContract = require('./contract')
const codebarRegex = require('../')

test('tests the checkout entry, not a registry installation', () => {
  assert.equal(require.resolve('../'), path.join(__dirname, '..', 'index.js'))
})

test('preserves the CommonJS factory and complete regex contract', () => {
  checkContract(codebarRegex)
})
