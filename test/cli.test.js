'use strict'

const test = require('node:test')
const path = require('node:path')
const checkCli = require('./cli-contract')

test('CLI prints a boolean for the first argument and exits successfully', () => {
  checkCli(process.execPath, [path.join(__dirname, '..', 'cli.js')], __dirname)
})
