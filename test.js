/* eslint-env jest */
'use strict'

const codebarRegex = require('codebar-regex')

test('codebar-regex', () => {
  expect(codebarRegex().test('A40156B')).toBeTruthy()
  expect(codebarRegex().test('A31117013206375B')).toBeTruthy()
  expect(codebarRegex().test('foobarbaz')).toBeFalsy()
})
