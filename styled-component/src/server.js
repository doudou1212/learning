import React from "react"
import express from "express"
import {renderToString, renderToNodeStream} from 'react-dom/server'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'
import {CompWithTheme8} from "./examples"

const sheet = new ServerStyleSheet()
const html = renderToString(
  <StyleSheetManager sheet={sheet.instance}>
    <CompWithTheme8/>
  </StyleSheetManager>
)
const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
console.log("styleTags", styleTags)

const app = express()

app.use("/", (req, res) => {
  console.log("listening on 3001 ...")

  res.send(styleTags+html)
})

app.listen(3001)

