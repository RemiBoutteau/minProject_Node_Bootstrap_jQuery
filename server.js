
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('/'));
//app.use(express.static('website'));

//app.use(express.static('node_modules'));

// prepare server
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd')); // redirect popper
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.sendFile('website/index.html');
});

/*
app.get('/', (req, res) => {
  res.send('Hello world');
});*/app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery