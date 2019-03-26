const config = require('config')
const Parser = require('json-text-sequence').parser
const fs = require('fs')

const srcPath = config.get('srcPath')
const relations = config.get('relations')

const input = fs.createReadStream(srcPath)
const parser = new Parser()
  .on('data', f => {
    if (relations.includes(f.properties._relation)) {
      console.log(`\x1e${JSON.stringify(f)}`)
    }
  })

input.pipe(parser)
