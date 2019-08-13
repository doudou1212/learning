import React from "react"
import express from "express"
import {renderToNodeStream} from 'react-dom/server'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'
import {CompWithTheme8} from "./examples"

const sheet = new ServerStyleSheet()

const app = express()
const stream = sheet.interleaveWithNodeStream(renderToNodeStream(sheet.collectStyles(<CompWithTheme8/>)))

app.use("/", (req, res) => {
  console.log("listening on 3001 ...")

  res.write('<html><head><title>Test Stream</title></head><body>')
  stream.pipe(
    res,
    { end: false }
  )
  stream.on('end', () => res.end('</body></html>'))
})

app.listen(3001)

