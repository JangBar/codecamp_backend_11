// const express = require('express') // 옛날방식 => commonjs
import express from "express"         // 요즘방식 => module

const app = express()

app.get('/qqq', function (req, res) {
  res.send('Hello World')
})    // 미들웨어 함수

app.listen(3000)