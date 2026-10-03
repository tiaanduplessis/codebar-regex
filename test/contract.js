'use strict'

const assert = require('assert')

// Kept compatible with the published CommonJS implementation's syntax level so
// the same contract can also be checked with older consumer runtimes.
module.exports = function (codebarRegex) {
  assert.strictEqual(typeof codebarRegex, 'function')
  const regex = codebarRegex()
  assert.ok(regex instanceof RegExp)
  assert.strictEqual(regex.source, '^[A-D][0-9\\-\\$\\:\\.\\+\\/]+[A-D]$')
  assert.strictEqual(regex.flags, 'g')
  assert.notStrictEqual(regex, codebarRegex())

  const payload = '0123456789-$:.+/'
  for (const start of 'ABCD') {
    for (const end of 'ABCD') {
      assert.strictEqual(codebarRegex().test(start + payload + end), true)
    }
  }
  for (let code = 0; code < 128; code++) {
    const character = String.fromCharCode(code)
    assert.strictEqual(codebarRegex().test('A' + character + 'B'), payload.indexOf(character) !== -1, 'payload character ' + code)
    assert.strictEqual(codebarRegex().test(character + '1B'), 'ABCD'.indexOf(character) !== -1, 'start character ' + code)
    assert.strictEqual(codebarRegex().test('A1' + character), 'ABCD'.indexOf(character) !== -1, 'end character ' + code)
  }
  for (const value of ['A40156B', 'A31117013206375B', 'D0A']) {
    assert.strictEqual(codebarRegex().test(value), true, value)
  }
  for (const value of ['', 'AB', 'A', '1', '123', 'A1', '1B', 'a1b', 'A1b', 'a1B', 'A1AB', 'A1B1C', 'foobarbaz', 'A١B', 'A１B', 'AéB', 'A😀B']) {
    assert.strictEqual(codebarRegex().test(value), false, value)
  }
  for (const extra of ['x', ' ', '\t', '\n', '\r', '\r\n', '\u2028', '\u2029', '\0']) {
    assert.strictEqual(codebarRegex().test(extra + 'A1B'), false)
    assert.strictEqual(codebarRegex().test('A1B' + extra), false)
    assert.strictEqual(codebarRegex().test('A1' + extra + 'B'), false)
  }

  // Preserve the existing global flag and the normal RegExp lastIndex behavior.
  assert.strictEqual(regex.test('A1B'), true)
  assert.strictEqual(regex.lastIndex, 3)
  assert.strictEqual(regex.test('A1B'), false)
  assert.strictEqual(regex.lastIndex, 0)
  assert.strictEqual(regex.test('A1B'), true)
  assert.strictEqual(codebarRegex().lastIndex, 0)
  assert.strictEqual(codebarRegex().test(undefined), false)
  assert.strictEqual(codebarRegex().test(null), false)
  assert.strictEqual(codebarRegex().test(123), false)
  assert.strictEqual(codebarRegex().test({ toString: function () { return 'A1B' } }), true)
}
