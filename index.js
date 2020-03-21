const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/auth.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/auth.html'));
})

app.get('/create.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/create.html'));
})

app.get('/faculty.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/faculty.html'));
})

app.get('/student.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/student.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))