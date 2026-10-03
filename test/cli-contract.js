'use strict'

const assert = require('node:assert/strict')
const { spawnSync } = require('node:child_process')

module.exports = function (command, prefix, cwd) {
  for (const [args, expected] of [
    [['A40156B'], true],
    [['D0123456789-$:.+/A'], true],
    [['foobarbaz'], false],
    [['AB'], false],
    [['a1b'], false],
    [['A1B\n'], false],
    [[], false],
    [[''], false],
    [['--help'], false],
    [['--version'], false],
    [['A1B', 'invalid'], true],
    [['invalid', 'A1B'], false]
  ]) {
    const result = spawnSync(command, prefix.concat(args), {
      cwd,
      encoding: 'utf8',
      input: 'A1B\n',
      timeout: 10000
    })
    assert.ifError(result.error)
    assert.equal(result.signal, null)
    assert.equal(result.status, 0, JSON.stringify(args))
    assert.equal(result.stderr, '')
    assert.equal(result.stdout, String(expected) + '\n', JSON.stringify(args))
  }
}
