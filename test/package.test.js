'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const checkContract = require('./contract')
const checkCli = require('./cli-contract')

const root = path.join(__dirname, '..')

test('packed CommonJS entry and installed CLI preserve the consumer contract', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'codebar-regex-'))
  const npm = process.env.npm_execpath
  assert.ok(npm, 'run package checks through npm test or npm run test:package')

  function runNpm (args, cwd) {
    const result = spawnSync(process.execPath, [npm].concat(args), {
      cwd,
      encoding: 'utf8',
      env: { ...process.env, npm_config_ignore_scripts: 'true', HUSKY: '0', HUSKY_SKIP_INSTALL: '1' },
      timeout: 60000
    })
    assert.ifError(result.error)
    assert.equal(result.status, 0, result.stderr)
    return result.stdout
  }

  try {
    const packed = JSON.parse(runNpm(['pack', '--ignore-scripts', '--json', '--pack-destination', directory], root))[0]
    const names = packed.files.map(file => file.path)
    for (const name of ['index.js', 'cli.js', 'package.json', 'README.md', 'LICENSE']) {
      assert.ok(names.includes(name), name + ' is in the package')
    }
    assert.ok(!names.some(name => name.startsWith('node_modules/')))
    fs.writeFileSync(path.join(directory, 'package.json'), JSON.stringify({ private: true }))
    runNpm(['install', '--ignore-scripts', '--no-audit', '--no-fund', '--package-lock=false', path.join(directory, packed.filename)], directory)
    const entry = require.resolve('codebar-regex', { paths: [directory] })
    assert.equal(entry, path.join(directory, 'node_modules', 'codebar-regex', 'index.js'))
    checkContract(require(entry))
    const manifest = require(path.join(directory, 'node_modules', 'codebar-regex', 'package.json'))
    assert.equal(manifest.main, 'index.js')
    assert.equal(manifest.bin.codebar, 'cli.js')
    assert.deepEqual(manifest.dependencies, {})
    const cli = path.join(path.dirname(entry), 'cli.js')
    assert.ok(fs.readFileSync(cli, 'utf8').startsWith('#!/usr/bin/env node\n'))
    checkCli(process.execPath, [cli], directory)
    if (process.platform !== 'win32') {
      fs.accessSync(cli, fs.constants.X_OK)
      checkCli(path.join(directory, 'node_modules', '.bin', 'codebar'), [], directory)
    }
  } finally {
    fs.rmSync(directory, { recursive: true, force: true })
  }
})
