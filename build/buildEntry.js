/**
 * 生成 JavaScript 入口文件
 */
const fs = require("fs");
const path = require("path")

const files = fs.readdirSync(path.join(__dirname, "./../src/js"), 'utf-8')
const entry = fs.openSync(path.join(__dirname, "./../src/js/index.ts"), 'w')
const entryInner = files.reduce((total, file) => (file !== 'index.ts' && /\.ts$/.test(file)) ? total + `export * from './${file.replace('.ts', '')}'\n` : total, '')

fs.writeSync(entry, entryInner);