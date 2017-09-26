var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(4654, function () {
    console.log('server up on 4654');
});