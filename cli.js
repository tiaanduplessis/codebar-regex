#!/usr/bin/env node
'use strict'

const codebarRegex = require('./')
const str = process.argv[2]

console.log(codebarRegex().test(str))
